// Permissions Integration Tests
const request = require('supertest');
const { expect } = require('chai');
const App = require('../../../modules/app');
const { setupTestDB, clearDatabase, closeDatabase } = require('../../helpers/setup');
const { createUserData, createAdminData, createCarData, hashPassword } = require('../../helpers/factories');
const { generateToken, generateAdminToken } = require('../../helpers/auth');
const User = require('../../../models/User');
const Car = require('../../../models/Car');

describe('Permissions Integration Tests', () => {
    let app;
    let adminToken;
    let userToken;
    let adminUser;
    let normalUser;

    before(async () => {
        await setupTestDB();
        const appInstance = new App({ isServerless: true });
        app = appInstance.getExpressApp();
    });

    beforeEach(async () => {
        const adminData = createAdminData();
        adminUser = await User.create({
            ...adminData,
            password: await hashPassword(adminData.password),
        });
        adminToken = generateAdminToken(adminUser._id.toString());

        const userData = createUserData();
        normalUser = await User.create({
            ...userData,
            password: await hashPassword(userData.password),
        });
        userToken = generateToken(normalUser._id.toString());
    });

    afterEach(async () => {
        await clearDatabase();
    });

    after(async () => {
        await closeDatabase();
    });

    describe('Admin Permissions', () => {
        it('should allow admin to create cars', async () => {
            const carData = createCarData();

            const res = await request(app)
                .post('/api/v2/cars')
                .set('Authorization', `Bearer ${adminToken}`)
                .send(carData)
                .expect(201);

            expect(res.body).to.have.property('success', true);
        });

        it('should allow admin to update cars', async () => {
            const car = await Car.create(createCarData());

            const res = await request(app)
                .put(`/api/v2/cars/${car._id}`)
                .set('Authorization', `Bearer ${adminToken}`)
                .send({ price: 30000 })
                .expect(200);

            expect(res.body).to.have.property('success', true);
        });

        it('should allow admin to delete cars', async () => {
            const car = await Car.create(createCarData());

            const res = await request(app)
                .delete(`/api/v2/cars/${car._id}`)
                .set('Authorization', `Bearer ${adminToken}`)
                .expect(200);

            expect(res.body).to.have.property('success', true);
        });
    });

    describe('User Permissions', () => {
        it('should deny user from creating cars', async () => {
            const carData = createCarData();

            const res = await request(app)
                .post('/api/v2/cars')
                .set('Authorization', `Bearer ${userToken}`)
                .send(carData)
                .expect(403);

            expect(res.body).to.have.property('success', false);
        });

        it('should deny user from updating cars', async () => {
            const car = await Car.create(createCarData());

            const res = await request(app)
                .put(`/api/v2/cars/${car._id}`)
                .set('Authorization', `Bearer ${userToken}`)
                .send({ price: 30000 })
                .expect(403);

            expect(res.body).to.have.property('success', false);
        });

        it('should deny user from deleting cars', async () => {
            const car = await Car.create(createCarData());

            const res = await request(app)
                .delete(`/api/v2/cars/${car._id}`)
                .set('Authorization', `Bearer ${userToken}`)
                .expect(403);

            expect(res.body).to.have.property('success', false);
        });

        it('should allow user to view cars', async () => {
            await Car.create(createCarData());

            const res = await request(app)
                .get('/api/v2/cars')
                .set('Authorization', `Bearer ${userToken}`)
                .expect(200);

            expect(res.body).to.have.property('success', true);
        });
    });

    describe('Public Access', () => {
        it('should allow public to view cars', async () => {
            await Car.create(createCarData());

            const res = await request(app)
                .get('/api/v2/cars')
                .expect(200);

            expect(res.body).to.have.property('success', true);
        });

        it('should deny public from creating cars', async () => {
            const carData = createCarData();

            const res = await request(app)
                .post('/api/v2/cars')
                .send(carData)
                .expect(401);

            expect(res.body).to.have.property('success', false);
        });
    });
});
