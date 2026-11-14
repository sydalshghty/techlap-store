import HeroSlider from "../component/Hero-Slider";
import AllCategoriesSlider from "../component/all-categories-slider";
import PromoBanners from "../component/promo-banners";
import Brands from "../component/brands";
import NewArrivalsProducts from "../component/newArrivals-Products";
function Home() {
    return (
        <>
            <HeroSlider />
            <AllCategoriesSlider />
            {/* <PromoBanners />
            <Brands />
            <NewArrivalsProducts />*/}
        </>
    )
}
export default Home;