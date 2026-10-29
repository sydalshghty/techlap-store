import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const isArabic = i18n.resolvedLanguage === "ar";

    const toggleLanguage = () => {
        const newLanguage = isArabic ? "en" : "ar";

        i18n.changeLanguage(newLanguage);
    };

    return (
        <button
            onClick={toggleLanguage}
            type="button"
            className="
                flex items-center gap-1  text-(--textcolor) text-[12px]  font-medium  transition hover:text-(--maincolor) cursor-pointer
      "
        >
            <Languages size={13} />

            <span className="text-sm font-medium">
                {isArabic ? "English" : "العربية"}
            </span>
        </button>
    );
}