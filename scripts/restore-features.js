const mongoose = require('mongoose');
require('dotenv').config();

const SiteSettings = require('../models/SiteSettings');

async function restoreFeatures() {
    const uri = process.env.MONGO_URI || process.env.MONGODB_URI;
    if (!uri) {
        console.error('MONGO_URI is missing');
        process.exit(1);
    }
    
    await mongoose.connect(uri);
    console.log('Connected to DB');
    
    const defaultFeatures = [
        { icon: 'Shield', title: 'ضمان شامل', titleEn: 'Full Warranty', desc: 'ضمان شامل على جميع السيارات الحقيقية المستوردة.', descEn: 'Full warranty on all authentic imported cars.' },
        { icon: 'Truck', title: 'شحن عالمي', titleEn: 'Global Shipping', desc: 'توصيل إلى باب منزلك في أي مكان بالعالم.', descEn: 'Door-to-door delivery anywhere in the world.' },
        { icon: 'CreditCard', title: 'دفع آمن', titleEn: 'Secure Payment', desc: 'طرق دفع متعددة وآمنة لضمان حق المشتري.', descEn: 'Multiple secure payment methods for buyer protection.' },
        { icon: 'Award', title: 'فحص شامل', titleEn: 'Full Inspection', desc: 'فحص 200 نقطة للسيارات لضمان الجودة.', descEn: '200-point vehicle inspection for quality assurance.' },
        { icon: 'Zap', title: 'مزايدة سريعة', titleEn: 'Quick Bid', desc: 'نظام مزايدة فوري وسريع للمزادات الحية.', descEn: 'Instant and fast bidding system for live auctions.' },
        { icon: 'Globe', title: 'سيارات كورية', titleEn: 'Korean Cars', desc: 'أفضل السيارات الكورية الفاخرة مباشرة.', descEn: 'Best premium Korean cars delivered directly.' }
    ];

    const result = await SiteSettings.findOneAndUpdate(
        { key: 'main' },
        { $set: { features: defaultFeatures } },
        { upsert: true, new: true }
    );
    
    console.log('Features restored:', result.features.length);
    process.exit(0);
}

restoreFeatures();
