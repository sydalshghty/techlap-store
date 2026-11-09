import  { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode, Autoplay } from 'swiper/modules';
import { Menu } from 'lucide-react';
import DailyDealsIcon from "../assets/daily-deals-icon.svg";
import { useTranslation } from 'react-i18next';

const categories = [
    "Gaming Laptops",
    "Business Laptops",
    "144Hz+ Gaming Monitors",
    "Keyboards & Mice",
    "Backpacks & Cases",
    "SSDs & RAM Memory",
    "GaN Fast Chargers",
    "Graphic Cards",
    "Motherboards"
];
const CategoryNavbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const currentLanguage = i18n.language;
    const isArabic = currentLanguage.startsWith('ar');

    const categoriesList = t('categories', { returnObjects: true }) || [];

    // Prevent background scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
        document.body.style.overflow = 'hidden';
        } else {
        document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);
    
    return (
        <>
            <nav className="category-navbar  w-full bg-white border-b border-(--bordercolor)">
                <div className='container'>
                    <div className="flex items-center justify-between  max-w-[1600px] h-12.25 mx-auto gap-4 md:gap-6">

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="allcategories-btn shrink-0 w-32 h-7 flex justify-center items-center gap-2 bg-[var(--maincolor)] text-white rounded-md text-[14px] font-semibold transition-colors cursor-pointer"
                        >
                            <Menu size={18} />
                            <span>{t("btncategories")}</span>
                        </button>

                        <div className="flex-1 min-w-0 relative">

                            <div className="absolute right-0 top-0 bottom-0 w-8 bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>

                            <Swiper
                                key={currentLanguage}
                                dir={isArabic ? "rtl" : "ltr"}
                                slidesPerView="auto"
                                spaceBetween={24}
                                freeMode={true}
                                loop={true}
                                observer={true}
                                observeParents={true}
                                watchOverflow={true}
                                modules={[FreeMode, Autoplay]}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                className="w-full"
                            >
                            {categoriesList.map((category) => (
                                <SwiperSlide
                                    key={category.id}
                                    className="!w-auto flex items-center"
                                >
                                    <a
                                        href="#"
                                        className="text-[12px] font-medium text-[var(--textcolor2)] hover:text-[var(--maincolor)] whitespace-nowrap transition-colors py-2 block cursor-pointer"
                                    >
                                        {category.name}
                                    </a>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        </div>

                        <a
                            href="#"
                            className="shrink-0 flex items-center gap-1.5 text-[#D97706]  text-[12px]  font-semibold  transition-colors cursor-pointer"
                        >
                            <img src={DailyDealsIcon} alt='daily-icon' fetchPriority='high' loading='eager'/>
                            <span className="hidden sm:inline-block">{t("dailydeals")}</span>
                        </a>

                    </div>
                </div>
            </nav>
        </>
    );
};

export default CategoryNavbar;