import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode, Autoplay } from 'swiper/modules';
import { Menu } from 'lucide-react';
import DailyDealsIcon from "../assets/daily-deals-icon.svg";

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
    return (
        <nav className="category-navbar  w-full bg-white border-b border-(--bordercolor)">
            <div className='container'>
                <div className="flex items-center justify-between  max-w-[1600px] h-12.25 mx-auto gap-4 md:gap-6">

                    <button className="allcategories-btn w-32 h-7 flex justify-center items-center gap-2 bg-(--maincolor)  text-white  rounded-md text-[14px] font-semibold  transition-colors cursor-pointer">
                        <Menu size={18} />
                        <span className="sm:inline-block">All Categories</span>
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
                            {categories.map((category, index) => (
                                <SwiperSlide key={index} className="w-auto! flex items-center">
                                    <a
                                        href="#"
                                        className="text-[12px]  font-medium text-(--textcolor2) hover:text-(--maincolor) whitespace-nowrap transition-colors py-2 block cursor-pointer"
                                    >
                                        {category}
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
                        <span className="hidden sm:inline-block">Daily Deals</span>
                    </a>

                </div>
            </div>
        </nav>
    );
};

export default CategoryNavbar;