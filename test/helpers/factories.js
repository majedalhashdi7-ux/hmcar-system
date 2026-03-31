// Test Data Factories
const bcrypt = require('bcrypt');

/**
 * Create test user data
 */
function createUserData(overrides = {}) {
    return {
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123',
        phone: '+1234567890',
        role: 'buyer',
        ...overrides,
    };
}

/**
 * Create test admin data
 */
function createAdminData(overrides = {}) {
    return createUserData({
        name: 'Admin User',
        email: 'admin@example.com',
        role: 'admin',
        ...overrides,
    });
}

/**
 * Create test car data
 */
function createCarData(overrides = {}) {
    return {
        title: 'Toyota Camry 2023',
        make: 'Toyota',
        model: 'Camry',
        year: 2023,
        price: 25000,
        mileage: 15000,
        condition: 'excellent',
        description: 'Test car description',
        images: ['https://example.com/car1.jpg'],
        ...overrides,
    };
}

/**
 * Create test auction data
 */
function createAuctionData(carId, overrides = {}) {
    const now = new Date();
    const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    
    return {
        car: carId,
        startingPrice: 20000,
        currentPrice: 20000,
        startsAt: now,
        endsAt: tomorrow,
        status: 'running',
        ...overrides,
    };
}

/**
 * Create test part data
 */
function createPartData(overrides = {}) {
    return {
        name: 'Test Part',
        partNumber: 'TP-12345',
        partType: 'engine',
        price: 150,
        stockQty: 10,
        description: 'Test part description',
        ...overrides,
    };
}

/**
 * Create test order data
 */
function createOrderData(userId, items, overrides = {}) {
    return {
        buyer: userId,
        items: items || [],
        orderNumber: `HM-2026-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`,
        status: 'pending',
        ...overrides,
    };
}

/**
 * Hash password for testing
 */
async function hashPassword(password) {
    return await bcrypt.hash(password, 10);
}

module.exports = {
    createUserData,
    createAdminData,
    createCarData,
    createAuctionData,
    createPartData,
    createOrderData,
    hashPassword,
};
