'use client';

/**
 * PartCard - بطاقة قطعة الغيار المحسّنة
 * تحتوي على: صورة، معلومات، سعر، قلب، سلة، مخزون
 */

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Check, Wrench, Package } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/lib/LanguageContext';
import { useAuth } from '@/lib/AuthContext';
import { useSettings } from '@/lib/SettingsContext';

const FAVORITES_KEY = 'hm_favorites';
const CART_KEY = 'hm_cart';

function getFavorites(): string[] {
    try { return JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]'); } catch { return []; }
}
function getCart(): any[] {
    try { return JSON.parse(localStorage.getItem(CART_KEY) || '[]'); } catch { return []; }
}
function dispatchCartUpdate() {
    window.dispatchEvent(new CustomEvent('cart_updated'));
}

interface PartCardProps {
    part: any;
    index?: number;
    onClick?: () => void;
    onLoginRequired?: () => void;
}

export default function PartCard({ part, index = 0, onClick, onLoginRequired }: PartCardProps) {
    const { isRTL } = useLanguage();
    const { isLoggedIn } = useAuth();
    const { formatPrice } = useSettings() as any;

    const cardKey = String(part.id || part._id || `part-${index}`);
    const imageSrc = part.img || part.images?.[0] || '';
    const name = isRTL ? (part.nameAr || part.name) : (part.name || part.nameAr);
    const stock = part.stockQty ?? part.stock ?? 0;

    const [imgError, setImgError] = useState(false);
    const [isFav, setIsFav] = useState(() => getFavorites().includes(cardKey));
    const [inCart, setInCart] = useState(() => getCart().some((i: any) => i.id === cardKey));
    const [cartAdded, setCartAdded] = useState(false);

    const toggleFav = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        if (!isLoggedIn) { onLoginRequired?.(); return; }
        const favs = getFavorites();
        const next = favs.includes(cardKey)
            ? favs.filter(id => id !== cardKey)
            : [...favs, cardKey];
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(next));
        setIsFav(!isFav);
        window.dispatchEvent(new CustomEvent('favorites_updated'));
    }, [cardKey, isFav, isLoggedIn, onLoginRequired]);

    const addToCart = useCallback((e: React.MouseEvent) => {
        e.stopPropagation();
        if (!isLoggedIn) { onLoginRequired?.(); return; }
        if (inCart || stock === 0) return;
        const cart = getCart();
        cart.push({ ...part, id: cardKey, type: 'part' });
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
        dispatchCartUpdate();
        setInCart(true);
        setCartAdded(true);
        setTimeout(() => setCartAdded(false), 2000);
    }, [part, cardKey, inCart, stock, isLoggedIn, onLoginRequired]);

    const price = Number(part.price || part.priceSar || 0);
    const displayPrice = formatPrice ? formatPrice(price) : `${price.toLocaleString()} SAR`;

    const stockColor = stock > 5 ? 'text-emerald-400' : stock > 0 ? 'text-amber-400' : 'text-red-400';
    const stockLabel = stock > 5
        ? (isRTL ? 'متوفر' : 'In Stock')
        : stock > 0
            ? (isRTL ? `${stock} متبقي` : `${stock} left`)
            : (isRTL ? 'نفد' : 'Out of Stock');

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (index % 4) * 0.06, duration: 0.35 }}
            className="group relative"
        >
            <div
                onClick={onClick}
                className="relative overflow-hidden rounded-2xl bg-black border border-white/8 hover:border-amber-400/30 transition-all duration-400 cursor-pointer shadow-lg hover:shadow-xl hover:shadow-amber-400/5"
            >
                {/* ── صورة القطعة ── */}
                <div className="relative aspect-square bg-white/3 overflow-hidden">
                    {!imgError && imageSrc ? (
                        <Image
                            src={imageSrc}
                            alt={name || ''}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-600"
                            onError={() => setImgError(true)}
                            unoptimized
                            referrerPolicy="no-referrer"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Wrench className="w-10 h-10 text-white/10" />
                        </div>
                    )}

                    {/* تدرج */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* ── شارة الحالة ── */}
                    <div className="absolute top-2.5 left-2.5">
                        <span className="bg-black/70 backdrop-blur-md border border-white/10 px-2 py-0.5 rounded-full text-[8px] font-black uppercase tracking-widest text-white/60">
                            {part.condition || 'NEW'}
                        </span>
                    </div>

                    {/* ── أزرار القلب والسلة ── */}
                    <div className="absolute top-2.5 right-2.5 flex flex-col gap-1.5">
                        <motion.button
                            whileTap={{ scale: 0.85 }}
                            onClick={toggleFav}
                            className={cn(
                                "w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md border transition-all duration-300",
                                isFav
                                    ? "bg-red-500/90 border-red-400/50"
                                    : "bg-black/60 border-white/15 hover:bg-red-500/20 hover:border-red-400/40"
                            )}
                        >
                            <Heart className={cn("w-3.5 h-3.5", isFav ? "fill-white text-white" : "text-white/50")} />
                        </motion.button>

                        <motion.button
                            whileTap={{ scale: 0.85 }}
                            onClick={addToCart}
                            disabled={stock === 0}
                            className={cn(
                                "w-8 h-8 rounded-full flex items-center justify-center backdrop-blur-md border transition-all duration-300",
                                inCart
                                    ? "bg-emerald-500/90 border-emerald-400/50"
                                    : stock === 0
                                        ? "bg-black/40 border-white/5 opacity-40 cursor-not-allowed"
                                        : "bg-black/60 border-white/15 hover:bg-amber-500/20 hover:border-amber-400/40"
                            )}
                        >
                            {cartAdded || inCart
                                ? <Check className="w-3.5 h-3.5 text-white" />
                                : <ShoppingCart className="w-3.5 h-3.5 text-white/50" />
                            }
                        </motion.button>
                    </div>
                </div>

                {/* ── معلومات القطعة ── */}
                <div className="p-4 space-y-3">
                    {/* الماركة */}
                    <p className="text-[8px] font-black text-amber-400/60 tracking-[0.3em] uppercase">
                        {part.brand || part.brandName || ''}
                    </p>

                    {/* الاسم */}
                    <h3 className="text-sm font-black leading-tight line-clamp-2 group-hover:text-amber-400 transition-colors duration-300 min-h-[2.5rem]">
                        {name}
                    </h3>

                    {/* الفئة */}
                    <p className="text-[9px] text-white/30 uppercase tracking-widest font-bold">
                        {part.categoryAr || part.category || ''}
                    </p>

                    {/* السعر والمخزون */}
                    <div className="flex items-center justify-between pt-2 border-t border-white/6">
                        <p className="text-lg font-black text-amber-400 leading-none">
                            {displayPrice}
                        </p>
                        <div className={cn("flex items-center gap-1 text-[9px] font-black uppercase tracking-widest", stockColor)}>
                            <Package className="w-3 h-3" />
                            {stockLabel}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
