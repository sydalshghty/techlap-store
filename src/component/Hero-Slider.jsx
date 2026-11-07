import { useTranslation } from "react-i18next";
function HeroSlider(){
    const { t } = useTranslation();
    return(
        <div className="hero-slider w-full h-full mt-3 mb-3 cursor-pointer">
            <div className="container w-full h-full hidden lg:flex">
                <img src={t("herobanner")} alt="hero-banner" className="w-full h-full object-contain"/>
            </div>
            <img src={t("herobanner")} alt="hero-banner" className="w-full h-full object-contain flex lg:hidden"/>
        </div>
    )
}
export default HeroSlider;