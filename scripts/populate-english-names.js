const mongoose = require('mongoose');
require('dotenv').config({ path: `${__dirname}/../.env` });
const Brand = require('../models/Brand');
const SparePart = require('../models/SparePart');

// خريطة الترجمة: الاسم العربي => الاسم الإنجليزي
const BRAND_TRANSLATIONS = {
    'إنفينيتي': 'Infiniti',
    'انفينيتي': 'Infiniti',
    'اسبرانزا': 'Esperanza',
    'اسبيرانزا': 'Esperanza',
    'ام جي': 'MG',
    'اوبل': 'Opel',
    'اودي': 'Audi',
    'ايسوزو': 'Isuzu',
    'بروتون': 'Proton',
    'بريليانس': 'Brilliance',
    'بي ام دبليو': 'BMW',
    'بي ام': 'BMW',
    'بي واي دي': 'BYD',
    'بيجو': 'Peugeot',
    'تاتا': 'Tata',
    'تويوتا': 'Toyota',
    'هوندا': 'Honda',
    'نيسان': 'Nissan',
    'هيونداي': 'Hyundai',
    'كيا': 'Kia',
    'ميتسوبيشي': 'Mitsubishi',
    'مازدا': 'Mazda',
    'سوزوكي': 'Suzuki',
    'شيفروليه': 'Chevrolet',
    'فورد': 'Ford',
    'مرسيدس': 'Mercedes-Benz',
    'مرسيدس بنز': 'Mercedes-Benz',
    'فولكسفاغن': 'Volkswagen',
    'فولكس فاغن': 'Volkswagen',
    'رينو': 'Renault',
    'سيتروين': 'Citroën',
    'لكزس': 'Lexus',
    'جيب': 'Jeep',
    'بورش': 'Porsche',
    'لاند روفر': 'Land Rover',
    'جاكوار': 'Jaguar',
    'سوبارو': 'Subaru',
    'فولفو': 'Volvo',
    'أوبل': 'Opel',
    'شيري': 'Chery',
    'شيري': 'Chery',
    'جيلي': 'Geely',
    'هافال': 'Haval',
    'دايهاتسو': 'Daihatsu',
};

mongoose.connect(process.env.MONGODB_URI || process.env.MONGO_URI).then(async () => {
    console.log('✅ Connected to MongoDB');
    
    // 1. تحديث أسماء الوكالات بالإنجليزي
    const brands = await Brand.find({}).lean();
    console.log(`\nFound ${brands.length} brands`);
    
    let updatedBrands = 0;
    for (const brand of brands) {
        const nameEn = BRAND_TRANSLATIONS[brand.name] || 
                       BRAND_TRANSLATIONS[brand.name?.trim()] ||
                       brand.nameEn ||
                       '';
        
        if (nameEn && nameEn !== brand.nameEn) {
            await Brand.updateOne({ _id: brand._id }, { $set: { nameEn } });
            console.log(`  ✅ Brand: "${brand.name}" => "${nameEn}"`);
            updatedBrands++;
        } else if (!nameEn) {
            console.log(`  ⚠️  No English name for: "${brand.name}"`);
        }
    }
    console.log(`\nUpdated ${updatedBrands} brands`);
    
    // 2. تحديث القطع - استخدم الماركة الإنجليزية
    const parts = await SparePart.find({}).populate('brand', 'name nameEn').lean();
    console.log(`\nFound ${parts.length} parts`);
    
    let updatedParts = 0;
    for (const part of parts) {
        const updates = {};
        
        // carMakeEn من الوكالة المرتبطة أو من الخريطة
        const brandNameEn = part.brand?.nameEn || BRAND_TRANSLATIONS[part.carMake] || '';
        if (brandNameEn && brandNameEn !== part.carMakeEn) {
            updates.carMakeEn = brandNameEn;
        }
        
        // nameEn: استخدم الاسم الأصلي إذا لا يحتوي على حروف عربية
        if (!part.nameEn) {
            const hasArabic = /[\u0600-\u06FF]/.test(part.name);
            if (!hasArabic) {
                updates.nameEn = part.name; // الاسم أصلاً إنجليزي
            }
        }
        
        if (Object.keys(updates).length > 0) {
            await SparePart.updateOne({ _id: part._id }, { $set: updates });
            updatedParts++;
        }
    }
    console.log(`Updated ${updatedParts} parts`);
    
    console.log('\n✅ Done!');
    mongoose.disconnect();
}).catch(e => { console.error('Error:', e.message); process.exit(1); });
