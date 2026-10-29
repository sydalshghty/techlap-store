import { useTranslation } from "react-i18next";
import { Headphones, Truck } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

export default function TopHeader() {
    const { t } = useTranslation();

    return (
        <div className="top-header w-full bg-white font-sans text-[#17213c]">
            <div className="bg-[#111a30] text-white h-7.5 flex justify-center items-center">
                <div className="container mx-auto flex  items-center justify-between gap-3 px-4 py-2 text-[11px] sm:px-6 lg:px-8">
                    {/* Shipping & Support */}

                    <div className="flex items-center gap-4">
                        <div className="hidden items-center text-[#34D399]  gap-1.5 sm:flex">
                            <Truck size={16} />

                            <span className="text-[12px] font-medium">{t("topheader.shipping")}</span>
                        </div>

                        <span className="hidden text-gray-500 sm:block">|</span>

                        <div className="flex items-center gap-1">
                            <Headphones size={15} className="text-[#08a7e8]" />

                            <span className="text-[12px] text-(--textcolor)">{t("topheader.support")}</span>
                        </div>
                    </div>

                    {/* Language / Currency */}

                    <div className="flex items-center gap-3">
                        <span className="hidden text-(--textcolor) text-[12px]  md:block">
                            {t("topheader.currency")}
                        </span>

                        <span className="hidden text-gray-500 md:block">|</span>
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>
        </div>
    );
}


