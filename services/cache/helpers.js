// [[ARABIC_HEADER]] هذا الملف (services/cache/helpers.js) جزء من مشروع HM CAR ويحتوي تعليقات عربية لضمان الوضوح.

const connection = require('./connection');
const { set, get } = require('./basic');

const defaultTTL = 3600;

/**
 * Helper function to generate tenant-scoped cache key
 * مولد مفاتيح الكاش مع عزل المعرض
 * @param {string} tenantId - معرف المعرض
 * @param {string} key - المفتاح الأساسي
 * @returns {string} المفتاح مع عزل المعرض
 */
function getTenantKey(tenantId, key) {
    const tId = tenantId || 'default';
    return `tenant:${tId}:${key}`;
}

// Cache helpers for specific data types
async function cacheCars(cars, ttl = defaultTTL) {
    const cachePromises = cars.map(car => 
      set(`car:${car._id}`, car, ttl)
    );
    await Promise.all(cachePromises);
    
    // Cache the list
    await set('cars:list', cars, ttl);
}

async function getCachedCar(carId) {
    return await get(`car:${carId}`);
}

// Tenant-scoped versions of cache helpers
// نسخ معزولة للمعرض من دوال التخزين المؤقت

async function cacheCarsForTenant(tenantId, cars, ttl = defaultTTL) {
    const prefix = getTenantKey(tenantId, 'car');
    const cachePromises = cars.map(car => 
      set(`${prefix}:${car._id}`, car, ttl)
    );
    await Promise.all(cachePromises);
    
    // Cache the list for this tenant
    await set(getTenantKey(tenantId, 'cars:list'), cars, ttl);
}

async function getCachedCarForTenant(tenantId, carId) {
    return await get(getTenantKey(tenantId, `car:${carId}`));
}

async function getCachedCarsListForTenant(tenantId) {
    return await get(getTenantKey(tenantId, 'cars:list'));
}

async function cacheSearchResults(query, results, ttl = 1800) { // 30 minutes
    const key = `search:${Buffer.from(query).toString('base64')}`;
    return await set(key, results, ttl);
}

async function getCachedSearchResults(query) {
    const key = `search:${Buffer.from(query).toString('base64')}`;
    return await get(key);
}

async function cacheSearchResultsForTenant(tenantId, query, results, ttl = 1800) {
    const baseKey = Buffer.from(query).toString('base64');
    return await set(getTenantKey(tenantId, `search:${baseKey}`), results, ttl);
}

async function getCachedSearchResultsForTenant(tenantId, query) {
    const baseKey = Buffer.from(query).toString('base64');
    return await get(getTenantKey(tenantId, `search:${baseKey}`));
}

async function cacheUserSession(userId, sessionData, ttl = 86400) { // 24 hours
    return await set(`session:${userId}`, sessionData, ttl);
}

async function getCachedUserSession(userId) {
    return await get(`session:${userId}`);
}

async function cacheAuctionData(auctionId, data, ttl = 1800) { // 30 minutes
    return await set(`auction:${auctionId}`, data, ttl);
}

async function getCachedAuctionData(auctionId) {
    return await get(`auction:${auctionId}`);
}

async function cacheAuctionDataForTenant(tenantId, auctionId, data, ttl = 1800) {
    return await set(getTenantKey(tenantId, `auction:${auctionId}`), data, ttl);
}

async function getCachedAuctionDataForTenant(tenantId, auctionId) {
    return await get(getTenantKey(tenantId, `auction:${auctionId}`));
}

async function cacheViewCounts(itemId, counts, ttl = 3600) { // 1 hour
    return await set(`views:${itemId}`, counts, ttl);
}

async function incrementViewCount(itemId) {
    const key = `views:${itemId}`;
    const current = await get(key) || { count: 0 };
    current.count++;
    await set(key, current, 3600);
    return current.count;
}

async function cachePopularItems(items, ttl = 7200) { // 2 hours
    return await set('popular:items', items, ttl);
}

async function getCachedPopularItems() {
    return await get('popular:items');
}

async function cachePopularItemsForTenant(tenantId, items, ttl = 7200) {
    return await set(getTenantKey(tenantId, 'popular:items'), items, ttl);
}

async function getCachedPopularItemsForTenant(tenantId) {
    return await get(getTenantKey(tenantId, 'popular:items'));
}

async function cacheDashboardStats(stats, ttl = 600) { // 10 minutes
    return await set('dashboard:stats', stats, ttl);
}

async function getCachedDashboardStats() {
    return await get('dashboard:stats');
}

async function cacheDashboardStatsForTenant(tenantId, stats, ttl = 600) {
    return await set(getTenantKey(tenantId, 'dashboard:stats'), stats, ttl);
}

async function getCachedDashboardStatsForTenant(tenantId) {
    return await get(getTenantKey(tenantId, 'dashboard:stats'));
}

module.exports = {
    // Helper function
    getTenantKey,
    // Original functions (for backward compatibility)
    cacheCars,
    getCachedCar,
    cacheSearchResults,
    getCachedSearchResults,
    cacheUserSession,
    getCachedUserSession,
    cacheAuctionData,
    getCachedAuctionData,
    cacheViewCounts,
    incrementViewCount,
    cachePopularItems,
    getCachedPopularItems,
    cacheDashboardStats,
    getCachedDashboardStats,
    // Tenant-scoped functions
    cacheCarsForTenant,
    getCachedCarForTenant,
    getCachedCarsListForTenant,
    cacheSearchResultsForTenant,
    getCachedSearchResultsForTenant,
    cacheAuctionDataForTenant,
    getCachedAuctionDataForTenant,
    cachePopularItemsForTenant,
    getCachedPopularItemsForTenant,
    cacheDashboardStatsForTenant,
    getCachedDashboardStatsForTenant,
};
