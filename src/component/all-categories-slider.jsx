import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const categories = [
    { id: 1, name: 'Gaming Laptops', image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=150&auto=format&fit=crop' },
    { id: 2, name: 'Business Laptops', image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=150&auto=format&fit=crop' },
    { id: 3, name: 'Gaming Displays', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=150&auto=format&fit=crop' },
    { id: 4, name: 'Mouse & Keyboards', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=150&auto=format&fit=crop' },
    { id: 5, name: 'Cases & Bags', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=150&auto=format&fit=crop' },
    { id: 6, name: 'SSD & RAM', image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=150&auto=format&fit=crop' },
    { id: 7, name: 'Laptop Stands', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=150&auto=format&fit=crop' },
    { id: 8, name: 'GaN Chargers', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=150&auto=format&fit=crop' },
    { id: 9, name: 'GaN Chargers', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=150&auto=format&fit=crop' },
    { id: 10, name: 'GaN Chargers', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=150&auto=format&fit=crop' },
];

export default function AllCategoriesSlider({ isRTL = false }) {
    const swiperRef = useRef(null);

    // تحديث اتجاه السلايدر وحل مشكلة الفراغ فور تغيير اللغة بدون تدمير المكون
    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const swiper = swiperRef.current.swiper;
            swiper.changeLanguageDirection(isRTL ? 'rtl' : 'ltr');
            swiper.update();
        }
    }, [isRTL]);

    return (
        <div
            dir={isRTL ? "rtl" : "ltr"}
            className="relative w-full px-10 py-6 mx-auto overflow-hidden bg-white border shadow-xs max-w-7xl border-slate-200 rounded-2xl"
        >
            {/* زر السابق - يتحكم مباشرة عبر onClick */}
            <button
                onClick={() => swiperRef.current?.swiper?.slidePrev()}
                className="absolute z-10 flex items-center justify-center transition-all -translate-y-1/2 bg-white border rounded-full shadow-md start-2 top-1/2 h-9 w-9 border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 active:scale-95"
                aria-label="Previous"
            >
                <svg className="w-5 h-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            {/* السلايدر */}
            <Swiper
                ref={swiperRef}
                modules={[Navigation, Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                spaceBetween={16}
                slidesPerView={2}
                dir={isRTL ? "rtl" : "ltr"}
                breakpoints={{
                    480: { slidesPerView: 3, spaceBetween: 16 },
                    640: { slidesPerView: 4, spaceBetween: 20 },
                    768: { slidesPerView: 5, spaceBetween: 20 },
                    1024: { slidesPerView: 7, spaceBetween: 24 },
                    1280: { slidesPerView: 8, spaceBetween: 24 },
                }}
                className="w-full"
            >
                {categories.map((cat) => (
                    <SwiperSlide key={cat.id}>
                        <a href="#" className="flex flex-col items-center justify-center text-center select-none group">
                            <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-slate-200 bg-white p-0.5 transition-all duration-200 group-hover:-translate-y-1 group-hover:border-blue-500">
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="object-cover w-full h-full rounded-full"
                                />
                            </div>
                            <span className="mt-3 text-xs font-medium transition-colors whitespace-nowrap text-slate-700 group-hover:text-blue-600">
                                {cat.name}
                            </span>
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* زر التالي - يتحكم مباشرة عبر onClick */}
            <button
                onClick={() => swiperRef.current?.swiper?.slideNext()}
                className="absolute z-10 flex items-center justify-center transition-all -translate-y-1/2 bg-white border rounded-full shadow-md end-2 top-1/2 h-9 w-9 border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900 active:scale-95"
                aria-label="Next"
            >
                <svg className="w-5 h-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
}