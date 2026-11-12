import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/free-mode';

// Brand Data
const brands = [
    "ASUS ROG", "LEGION", "MSI", "HP OMEN",
    "DELL", "RAZER", "LOGITECH", "KINGSTON",
    "CORSAIR", "GIGABYTE", "ACER PREDATOR"
];

// Translations Dictionary
const translations = {
    en: {
        title: "AUTHORIZED BRAND PARTNERS",
        link: "View All Brands"
    },
    ar: {
        title: "شركاء العلامات التجارية المعتمدين",
        link: "عرض جميع العلامات"
    }
};

export default function Brands({ isRTL = false }) {
    const lang = isRTL ? 'ar' : 'en';
    const t = translations[lang];
    const swiperRef = useRef(null);

    // Safely update Swiper direction when language changes
    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const swiper = swiperRef.current.swiper;
            swiper.changeLanguageDirection(isRTL ? 'rtl' : 'ltr');
            swiper.update();
        }
    }, [isRTL]);

    return (
        // Main Container
        <div
            dir={isRTL ? 'rtl' : 'ltr'}
            className="w-full max-w-[1400px] mx-auto bg-white border border-slate-200 rounded-xl p-4 shadow-sm"
        >
            {/* Header Section */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">

                {/* Title & Badge Icon */}
                <div className="flex items-center gap-2">
                    {/* Blue Badge SVG */}
                    <svg className="w-4 h-4 text-sky-600" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l2.4 2.4 3.2-.8.8 3.2 2.4 2.4-2.4 2.4-.8 3.2-3.2-.8-2.4 2.4-2.4-2.4-3.2.8-.8-3.2-2.4-2.4 2.4-2.4.8-3.2 3.2.8L12 2z" />
                    </svg>
                    <h2 className="text-slate-600 font-bold text-[13px] tracking-wide uppercase">
                        {t.title}
                    </h2>
                </div>

                {/* View All Link */}
                <a
                    href="#"
                    className="group flex items-center gap-1 text-sky-600 text-[13px] font-semibold hover:text-sky-800 transition-colors"
                >
                    {t.link}
                    {/* Arrow SVG: Flips automatically in Arabic using rtl:-scale-x-100 */}
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

            {/* Swiper Slider Section */}
            <div className="w-full overflow-hidden">
                <Swiper
                    ref={swiperRef}
                    modules={[Autoplay, FreeMode]}
                    dir={isRTL ? 'rtl' : 'ltr'}
                    spaceBetween={12}
                    freeMode={true} // Allows smooth drag without snapping strictly to one slide
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    breakpoints={{
                        320: { slidesPerView: 2.5 },
                        480: { slidesPerView: 3.5 },
                        640: { slidesPerView: 4.5 },
                        768: { slidesPerView: 6 },
                        1024: { slidesPerView: 7 },
                        1280: { slidesPerView: 8 },
                    }}
                    className="w-full"
                >
                    {brands.map((brand, index) => (
                        <SwiperSlide key={index}>
                            {/* Brand Button/Card */}
                            <div className="flex items-center justify-center w-full h-10 text-xs font-bold transition-all border rounded cursor-pointer select-none bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300">
                                {brand}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}