import  { useState, useEffect } from 'react';
import {  X, Zap, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode, Autoplay } from 'swiper/modules';
import { Menu } from 'lucide-react';
import DailyDealsIcon from "../assets/daily-deals-icon.svg";
import { useTranslation, I18nContext } from 'react-i18next';

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
    const { t } = useTranslation();
    const categoriesList = t('categories', { returnObjects: true }) || [];
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
                            onClick={() => {
                                setIsMobileMenuOpen(!isMobileMenuOpen);
                            }}
                        className="allcategories-btn w-32 h-7 flex justify-center items-center gap-2 bg-(--maincolor)  text-white  rounded-md text-[14px] font-semibold  transition-colors cursor-pointer">
                            <Menu size={18} />
                            <span className="sm:inline-block">{t("btncategories")}</span>
                        </button>

                        <div className="flex-1 min-w-0 relative">

                            <div className="absolute right-0 top-0 bottom-0 w-8 bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>

                            <Swiper
                                slidesPerView="auto"
                                spaceBetween={24}
                                freeMode={true}
                                loop={true}
                                modules={[FreeMode, Autoplay]}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                className="w-full"
                            >
                                {categoriesList.map((category, index) => (
                                    <SwiperSlide key={category.id} className="w-auto! flex items-center">                           
                                        <a
                                            href="#"
                                            className="text-[12px]  font-medium text-(--textcolor2) hover:text-(--maincolor) whitespace-nowrap transition-colors py-2 block cursor-pointer"
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
                            <img src={DailyDealsIcon} alt='daily-icon' />
                            <span className="hidden sm:inline-block">{t("dailydeals")}</span>
                        </a>

                    </div>
                </div>
            </nav>
            <nav className="w-full">  
                  {/* Overlay Backdrop */}
                  <div
                    className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
                      isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  />
            
                  {/* Drawer Panel */}
                  <aside
                    className={`fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-white z-50 shadow-2xl transition-transform duration-300 ease-in-out transform flex flex-col ${
                      isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                  >
                    {/* Drawer Header */}
                    <div className="flex items-center justify-between bg-[#007bc4] text-white p-4">
                      <span className="font-bold text-lg">{t("btncategories")}</span>
                      <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="p-1 hover:bg-white/10 rounded-full transition-colors"
                        aria-label="Close Menu"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </div>
            
                    {/* Drawer Categories List */}
                    <div className="overflow-y-auto flex-1 py-2 divide-y divide-gray-100">
                      {categoriesList.map((category,index) => (
                        <a
                          key={category.id}
                          href={category.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex items-center justify-between px-5 py-3 text-sm font-medium transition-colors`}
                        >
                          <span className="flex items-center gap-2">
                            {category.name}
                          </span>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </a>
                      ))}
                    </div>
                  </aside>
            </nav>
        </>
    );
};

export default CategoryNavbar;