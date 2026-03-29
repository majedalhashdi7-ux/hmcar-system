'use client';

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { Car, Gavel, Wrench } from "lucide-react";
import CinematicVideoBackground from "@/components/CinematicVideoBackground";
import Navbar from "@/components/Navbar";
import { api } from "@/lib/api";

export default function CarXHome() {
    const { isRTL } = useLanguage();
    const [marqueeItems, setMarqueeItems] = useState<string[]>([]);

    useEffect(() => {
        api.cars.list({ limit: 12, status: 'available' })
            .then(res => {
                const cars = res?.data || res?.cars;
                if (cars && Array.isArray(cars) && cars.length > 0) {
                    const labels = cars.map((c: any) => {
                        const make = (isRTL && c.makeAr) ? c.makeAr : c.make;
                        const model = (isRTL && c.modelAr) ? c.modelAr : c.model;
                        const priceStr = c.price ? ` (${c.price.toLocaleString()} ${isRTL ? 'ر.س' : 'SAR'})` : '';
                        return `${make} ${model} ${c.year}${priceStr}`;
                    });
                    setMarqueeItems(labels);
                }
            }).catch(() => {});
    }, [isRTL]);

    const displayItems = marqueeItems.length > 0 
        ? marqueeItems 
        : [isRTL ? 'CAR X — المعرض · المزاد · قطع الغيار' : 'CAR X — SHOWROOM · AUCTIONS · PARTS'];
    
    // Create an endless loop array
    const repeatedItems = Array(16).fill(0).map((_, i) => displayItems[i % displayItems.length]);

    // الأقسام الثلاثة المدمجة (المعارض + المزاد + قطع الغيار)
    const mainSections = [
        {
            title: isRTL ? 'المعارض' : 'Showrooms',
            desc: isRTL ? 'معرض CAR X المحلي ومعرض السيارات المستوردة' : 'Local CAR X & Imported Car Showrooms',
            icon: Car,
            href: '/showroom',
            gradient: 'from-red-900/80 via-red-700/60 to-black/80',
            glowColor: 'rgba(220,38,38,0.6)',
        },
        {
            title: isRTL ? 'المزادات المباشرة' : 'Live Auctions',
            desc: isRTL ? 'مزادات حصرية داخلية أو استيراد مزادات عالمية' : 'Exclusive auctions or import global auction links',
            icon: Gavel,
            href: '/auctions',
            gradient: 'from-zinc-900/80 via-zinc-700/60 to-black/80',
            glowColor: 'rgba(220,38,38,0.3)',
        },
        {
            title: isRTL ? 'قطع الغيار' : 'Spare Parts',
            desc: isRTL ? 'قطع غيار أصلية محلية وقطع مستوردة' : 'Genuine local & imported spare parts',
            icon: Wrench,
            href: '/parts',
            gradient: 'from-zinc-900/80 via-zinc-700/60 to-black/80',
            glowColor: 'rgba(220,38,38,0.3)',
        }
    ];

    return (
        <main
            className="relative min-h-screen overflow-x-hidden bg-black text-white"
            dir={isRTL ? "rtl" : "ltr"}
        >
            {/* ── شريط التنقل الخاص بـ CAR X ── */}
            <Navbar />

            {/* ── فيديو الخلفية الخاص بـ CAR X ── */}
            <CinematicVideoBackground
                videoSrc="/videos/CAR_X.mp4"
                fallbackImage="/images/photo_2026-02-07_22-24-18.jpg"
                mobileImage="/images/hmcar.jpg"
                overlayOpacity={0.68}
                height="85vh"
            />

            {/* ── الشريط الإعلاني الدائري Marquee ── */}
            <div className="relative z-20 w-full mt-4 mb-24 px-6 flex justify-center">
                <div
                    className="w-full max-w-5xl overflow-hidden rounded-full border border-red-600/40 bg-black/50 backdrop-blur-xl py-3 shadow-[0_0_40px_rgba(200,0,0,0.25)]"
                >
                    <div className="flex animate-carx-marquee whitespace-nowrap items-center gap-0">
                        {repeatedItems.map((text, i) => (
                            <span key={i} className="inline-flex items-center gap-5 mx-8 shrink-0">
                                <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_12px_rgba(255,0,0,1)] animate-pulse" />
                                <span className="text-sm md:text-base font-black text-white italic tracking-[0.15em] uppercase">
                                    {text}
                                </span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── الأقسام الثلاثة المدمجة ── */}
            <section className="relative z-10 py-12 px-4">
                <div className="max-w-7xl mx-auto">

                    {/* عنوان القسم */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-widest drop-shadow-[0_0_20px_rgba(220,38,38,0.7)]">
                            {isRTL ? 'اختر قسمك' : 'CHOOSE YOUR SECTION'}
                        </h2>
                        <p className="text-white/40 mt-4 text-sm font-bold tracking-widest uppercase">
                            {isRTL ? 'كل ما تحتاجه في مكان واحد' : 'Everything you need in one place'}
                        </p>
                    </motion.div>

                    {/* كروت الأقسام */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {mainSections.map((section, idx) => {
                            const Icon = section.icon;
                            return (
                                <Link href={section.href} key={idx} prefetch={false}>
                                    <motion.div
                                        initial={{ opacity: 0, y: 60 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.7, delay: idx * 0.15 }}
                                        whileHover={{ y: -12, scale: 1.03 }}
                                        className={`relative overflow-hidden min-h-[320px] rounded-[2.5rem] flex flex-col justify-end p-8 cursor-pointer group border border-white/5 hover:border-red-600/50 transition-all duration-500 bg-gradient-to-br ${section.gradient}`}
                                        style={{
                                            boxShadow: `0 0 0px ${section.glowColor}`,
                                        }}
                                        onMouseEnter={(e) => {
                                            (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px ${section.glowColor}`;
                                        }}
                                        onMouseLeave={(e) => {
                                            (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0px ${section.glowColor}`;
                                        }}
                                    >
                                        {/* أيقونة الزاوية */}
                                        <div className="absolute top-7 end-7 w-16 h-16 rounded-2xl bg-black/60 backdrop-blur-md flex items-center justify-center border border-white/10 group-hover:bg-red-600/20 group-hover:border-red-500/50 transition-all duration-500">
                                            <Icon className="w-8 h-8 text-white/70 group-hover:text-red-400 transition-colors duration-300" />
                                        </div>

                                        {/* خط أحمر متحرك أسفل البطاقة */}
                                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                                        {/* النص */}
                                        <div className="relative z-10">
                                            <h3 className="text-2xl md:text-3xl font-black text-white mb-3 uppercase tracking-tight">
                                                {section.title}
                                            </h3>
                                            <p className="text-white/50 text-sm font-semibold leading-relaxed">
                                                {section.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── Footer ── */}
            <footer className="relative z-10 mt-24 py-10 text-center border-t border-red-900/20 bg-black">
                <p className="text-white/30 text-xs font-bold tracking-[0.3em] uppercase">
                    © 2026 CAR X. {isRTL ? 'جميع الحقوق محفوظة.' : 'All Rights Reserved.'}
                </p>
            </footer>

            {/* ── CSS الخاص بالشريط الدائري ── */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes carx-marquee {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-carx-marquee {
                    animation: carx-marquee 25s linear infinite;
                }
                .animate-carx-marquee:hover {
                    animation-play-state: paused;
                }
            `}} />
        </main>
    );
}
