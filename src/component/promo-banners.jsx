import React from 'react';

// Data array containing both English and Arabic content
const promoData = [
    {
        id: 1,
        subtitleColor: 'text-amber-500',
        en: {
            subtitle: 'TOP PERFORMANCE',
            title: 'Extreme Gaming Laptops RTX 40',
            cta: 'Browse Collection',
        },
        ar: {
            subtitle: 'أداء فائق',
            title: 'لاب توب ألعاب خارق RTX 40',
            cta: 'تصفح التشكيلة',
        },
        image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=300&auto=format&fit=crop',
    },
    {
        id: 2,
        subtitleColor: 'text-sky-400',
        en: {
            subtitle: 'PRO GEAR',
            title: 'Armored Backpacks & Essential Gear',
            cta: 'Discover More',
        },
        ar: {
            subtitle: 'معدات احترافية',
            title: 'حقائب ظهر مدرعة ومعدات أساسية',
            cta: 'اكتشف المزيد',
        },
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&auto=format&fit=crop', // Backpack placeholder
    },
    {
        id: 3,
        subtitleColor: 'text-rose-400',
        en: {
            subtitle: 'UP TO 30% OFF',
            title: 'Display Monitors & SSD Upgrade Kits',
            cta: 'Shop Offers',
        },
        ar: {
            subtitle: 'خصم حتى 30%',
            title: 'شاشات عرض وحزم ترقية SSD',
            cta: 'تسوق العروض',
        },
        image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&auto=format&fit=crop', // Monitor placeholder
    },
];

export default function PromoBanners({ isRTL = false }) {
    // Determine language key based on direction prop
    const lang = isRTL ? 'ar' : 'en';

    return (
        // The dir attribute controls the document direction for this component
        <div dir={isRTL ? 'rtl' : 'ltr'} className="w-full max-w-[1400px] mx-auto p-4">

            {/* Responsive Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">

                {promoData.map((item) => (
                    <div
                        key={item.id}
                        // Dark navy background matching the design
                        className="bg-[#0f1523] rounded-xl p-5 flex items-center justify-between border border-slate-800/50 shadow-lg"
                    >

                        {/* Text Content (Left side in LTR, automatically Right side in RTL) */}
                        {/* pe-4 is padding-inline-end, creates space between text and image regardless of language */}
                        <div className="flex flex-col items-start flex-1 pe-4">
                            <span className={`text-[11px] font-bold tracking-wider uppercase mb-1.5 ${item.subtitleColor}`}>
                                {item[lang].subtitle}
                            </span>

                            <h3 className="text-white font-semibold text-[15px] sm:text-base leading-snug mb-4 line-clamp-2">
                                {item[lang].title}
                            </h3>

                            <a
                                href="#"
                                className="group flex items-center gap-1.5 text-sky-500 hover:text-sky-400 transition-colors text-xs sm:text-sm font-medium"
                            >
                                {item[lang].cta}
                                {/* 
                  Arrow Icon 
                  rtl:-scale-x-100 flips the arrow to point left when Arabic is active 
                */}
                                <svg
                                    className="w-3.5 h-3.5 rtl:-scale-x-100 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2.5"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>

                        {/* Image (Right side in LTR, automatically Left side in RTL) */}
                        <div className="w-[100px] h-[100px] shrink-0 rounded-lg overflow-hidden border border-slate-700/30">
                            <img
                                src={item.image}
                                alt={item[lang].title}
                                className="object-cover w-full h-full"
                            />
                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
}