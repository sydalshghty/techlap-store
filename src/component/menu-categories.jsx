import { X, ChevronRight, ChevronLeft } from "lucide-react";
import { useTranslation } from "react-i18next";
function MenuCategories({ onClose }) {
    const { t } = useTranslation();
    const language = localStorage.getItem("language");

    return (
        <section className="fixed top-0 left-0 z-50 w-full h-full menu-categories bg-black/20">
            <div className="all-main-categories w-full sm:w-[324px] h-full bg-white shadow">
                <div className="flex items-center justify-between h-12 border col-heading">
                    <h1 className="pl-3 pr-3  text-[14px] font-semibold text-[#000000] capitalize">{t("btncategories")}</h1>
                    <X className="pr-3 pl-3 text-[#57595B] cursor-pointer" size={44} onClick={onClose} />
                </div>
                <div className="all-categories">
                    <ul className="flex flex-col">
                        <li className="flex items-center justify-between h-12 cursor-pointer" onClick={onClose}>
                            <p className="pl-3 pr-3 text-[14px] font-normal text-[#0C0D0D] capitalize">{t("titlecategory")}</p>
                            {
                                language == "en" ?
                                    <ChevronRight className="pr-3 text-[#57595B]" size={32} />
                                    :
                                    <ChevronLeft className="pl-3 text-[#57595B]" size={32} />
                            }
                        </li>
                        <li className="flex items-center justify-between h-12 cursor-pointer" onClick={onClose}>
                            <p className="pl-3 pr-3 text-[14px] font-normal text-[#0C0D0D] capitalize">{t("titlecategory")}</p>
                            {
                                language == "en" ?
                                    <ChevronRight className="pr-3 text-[#57595B]" size={32} />
                                    :
                                    <ChevronLeft className="pl-3 text-[#57595B]" size={32} />
                            }
                        </li>
                        <li className="flex items-center justify-between h-12 cursor-pointer" onClick={onClose}>
                            <p className="pl-3 pr-3 text-[14px] font-normal text-[#0C0D0D] capitalize">{t("titlecategory")}</p>
                            {
                                language == "en" ?
                                    <ChevronRight className="pr-3 text-[#57595B]" size={32} />
                                    :
                                    <ChevronLeft className="pl-3 text-[#57595B]" size={32} />
                            }
                        </li>
                        <li className="flex items-center justify-between h-12 cursor-pointer" onClick={onClose}>
                            <p className="pl-3 pr-3 text-[14px] font-normal text-[#0C0D0D] capitalize">{t("titlecategory")}</p>
                            {
                                language == "en" ?
                                    <ChevronRight className="pr-3 text-[#57595B]" size={32} />
                                    :
                                    <ChevronLeft className="pl-3 text-[#57595B]" size={32} />
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
export default MenuCategories;