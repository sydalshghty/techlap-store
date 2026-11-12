import { useState } from "react";
import { Search, ShoppingCart, Heart, User, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import techlapIcon from "../assets/techlap-logo-icon.svg";
export default function MainHeader() {
    const { t } = useTranslation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [search, setSearch] = useState("");

    return (
        <>
            <div className="w-full bg-white border-b border-gray-100 main-header">
                <div className="container">
                    {/* Desktop Header */}
                    <div className="hidden lg:flex items-center justify-between gap-8 h-18.25 pt-3 pb-3">
                        {/* Logo */}
                        <Link to={'/'} className="col-logo flex items-center gap-2.5">
                            <img src={techlapIcon} alt="logo" fetchPriority="high" loading="eager" className="object-contain w-fit h-fit" />
                            <div className="col-text-logo">
                                <h1 className="text-[20px] lg:text-[24px]  font-extrabold font-cairo">
                                    <span className="text-[#0F172A]">{t("mainheader.logotext1")}</span>
                                    <span className="text-[#0284C7]">{t("mainheader.logotext2")}</span>
                                </h1>
                                <p className="text-[10px] font-semibold text-[#64748B]">TECHLAP STORE</p>
                            </div>
                        </Link>
                        {/* Search */}
                        <div className="flex-1 max-w-162.5">
                            <div className="flex items-center h-10 gap-2 overflow-hidden border-2 rounded-lg border-sky-600">
                                <button className="allcategories-btn cursor-pointer w-33.25 h-full bg-[#F8FAFC] border-l border-[#E2E8F0] flex justify-center gap-5 items-center pt-2.5 pb-2.5 pl-3 pr-3 m-auto">
                                    <p className="text-[12px] font-medium text-[#334155]">{t("mainheader.categories")}</p>
                                    <ChevronDown className="text-[#334155] " size={18} />
                                </button>
                                <input
                                    type="text"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder={t("mainheader.search")}
                                    className="flex-1 min-w-0 h-full  text-[13px] text-[#94A3B8] font-extralight outline-none placeholder:text-gray-400"
                                />
                                <button
                                    aria-label="Search"
                                    className="flex items-center justify-center w-12 h-full text-white transition-colors cursor-pointer bg-sky-600 hover:bg-sky-700"
                                >
                                    <Search size={17} />
                                </button>
                            </div>
                        </div>
                        {/* Actions */}
                        <div className="flex items-center gap-5 shrink-0">
                            {/* Account */}
                            <button className="flex items-center gap-2 cursor-pointer">
                                <div className="flex items-center justify-center rounded-full w-9 h-9 bg-slate-100">
                                    <User size={18} className="text-[#475569]" />
                                </div>

                                <div className="text-start">
                                    <p className="text-[10px] font-medium text-[#94A3B8]">
                                        {t("mainheader.welcome")}
                                    </p>
                                    <p className="text-[12px] font-bold text-[#1E293B]">
                                        {t("mainheader.account")}
                                    </p>
                                </div>
                            </button>

                            {/* Wishlist */}
                            <button
                                aria-label="Wishlist"
                                className="relative cursor-pointer"
                            >
                                <Heart size={20} className="text-[#334155]" />

                                <span className="absolute -top-2 -right-2 bg-[#F43F5E] text-white text-[10px] font-medium font-sans w-4 h-4 rounded-full flex items-center justify-center">
                                    3
                                </span>
                            </button>

                            {/* Cart */}
                            <button className="cursor-pointer flex justify-center items-center gap-2 pl-3.5 pr-3.5 pt-1.5 pb-1.5 bg-[#F0F9FF] w-27.75 h-11.75 rounded-lg border border-[#E5E7EB]">

                                <div className="relative">
                                    <ShoppingCart
                                        size={20}
                                        className="text-[#0369A1]"
                                    />

                                    <span className="absolute -top-2 -right-2 bg-[#0369A1] text-white text-[10px] font-sans w-4 h-4 rounded-full flex items-center justify-center">
                                        4
                                    </span>
                                </div>

                                <div className="text-start">
                                    <p className="text-[10px] text-[#0369A1] font-medium">
                                        {t("mainheader.cart")}
                                    </p>

                                    <p className="text-[14px] font-bold text-[#0F172A]">
                                        4,890 {t("mainheader.currency")}
                                    </p>
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Mobile / Tablet Header */}
                    <div className="lg:hidden">

                        {/* Top Row */}
                        <div className="flex items-center justify-between gap-3 pt-2 pb-2 h-13">

                            {/* Logo */}
                            <Link to={'/'} className="flex items-center gap-1 col-logo">
                                <img src={techlapIcon} alt="logo" className="object-contain w-8 md:w-10" />
                                <div className="col-text-logo">
                                    <h1 className="text-[18px] lg:text-[24px]  font-extrabold">
                                        <span className="text-[#0F172A]">{t("mainheader.logotext1")}</span>
                                        <span className="text-[#0284C7]">{t("mainheader.logotext2")}</span>
                                    </h1>
                                    <p className="text-[10px] font-semibold text-[#64748B]">TECHLAP STORE</p>
                                </div>
                            </Link>

                            {/* Search */}
                            <div className="w-[50%]">
                                <div className="flex items-center gap-2 overflow-hidden border-2 rounded-lg h-9 border-sky-600">
                                    <input
                                        type="text"
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        placeholder={t("mainheader.search")}
                                        className="flex-1 min-w-0 h-full pr-2 pl-2 text-[13px] text-[#94A3B8] font-extralight outline-none placeholder:text-gray-400"
                                    />
                                    <button
                                        aria-label="Search"
                                        className="flex items-center justify-center w-10 h-full text-white transition-colors cursor-pointer bg-sky-600 hover:bg-sky-700"
                                    >
                                        <Search size={17} />
                                    </button>
                                </div>
                            </div>

                            {/* Mobile Actions */}
                            <div className="flex items-center gap-4">
                                <button aria-label="Wishlist" className="relative hidden cursor-pointer sm:flex">
                                    <Heart size={20} />

                                    <span className="absolute -top-2 -right-2 bg-rose-500 text-white font-sans text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                                        3
                                    </span>
                                </button>

                                <button aria-label="Cart" className="relative cursor-pointer">
                                    <ShoppingCart size={20} />

                                    <span className="absolute -top-2 -right-2 bg-sky-600 text-white font-sans text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                                        4
                                    </span>
                                </button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}