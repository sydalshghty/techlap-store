import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { useTranslation } from 'react-i18next';

const categories = [
    { id: 1, name_en: 'Gaming Laptops', name_ar: 'لابتوبات الألعاب', image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=150&auto=format&fit=crop' },
    { id: 2, name_en: 'Business Laptops', name_ar: 'لابتوبات الأعمال', image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=150&auto=format&fit=crop' },
    { id: 3, name_en: 'Gaming Displays', name_ar: 'شاشات الألعاب', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=150&auto=format&fit=crop' },
    { id: 4, name_en: 'Mouse & Keyboards', name_ar: 'الفأرات ولوحات المفاتيح', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=150&auto=format&fit=crop' },
    { id: 5, name_en: 'Cases & Bags', name_ar: 'حقائب وجرابات', image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=150&auto=format&fit=crop' },
    { id: 6, name_en: 'SSD & RAM', name_ar: 'وحدات التخزين والرامات', image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=150&auto=format&fit=crop' },
    { id: 7, name_en: 'Laptop Stands', name_ar: 'حوامل اللابتوب', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=150&auto=format&fit=crop' },
    { id: 8, name_en: 'GaN Chargers', name_ar: 'شواحن GaN', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=150&auto=format&fit=crop' },
    { id: 9, name_en: 'GaN Chargers', name_ar: 'شواحن GaN', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=150&auto=format&fit=crop' },
    { id: 10, name_en: 'GaN Chargers', name_ar: 'شواحن GaN', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=150&auto=format&fit=crop' },
];

export default function AllCategoriesSlider({ isRTL = false }) {
    const swiperRef = useRef(null);

    const { i18n } = useTranslation();
    const language = i18n.resolvedLanguage;

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const swiper = swiperRef.current.swiper;
            swiper.changeLanguageDirection(isRTL ? 'rtl' : 'ltr');
            swiper.update();
        }
    }, [isRTL, language]);

    return (
        <section className='pt-2 pb-2 allcategories-slider'>
            <div
                dir={isRTL ? "rtl" : "ltr"}
                className="container relative w-full overflow-hidden bg-white"
            >
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation, Autoplay]}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    spaceBetween={16}
                    slidesPerView={3}
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
                                <div className="flex items-center justify-center w-16 h-16 p-0.5 bg-white border rounded-full border-slate-200">
                                    <img
                                        src={cat.image}
                                        alt={cat.name}
                                        className="object-cover w-full h-full rounded-full"
                                    />
                                </div>
                                {language == 'en' ?
                                    < span className="mt-3 text-xs font-medium  text-[#334155]">
                                        {cat.name_en}
                                    </span>
                                    :
                                    <span className="mt-3 text-xs font-medium  text-[#334155]">
                                        {cat.name_ar}
                                    </span>
                                }
                                <span className="mt-3 text-xs font-medium  text-[#334155]">

                                </span>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}