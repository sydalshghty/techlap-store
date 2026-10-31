import { useState } from "react";
import { Search, ShoppingCart, Heart, User , Menu, X , ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
export default function Header() {
    const { t } = useTranslation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [search, setSearch] = useState("");

    return (
        <div className="main-header w-full bg-white border-b border-gray-100">
            <div className="container">
                {/* Desktop Header */}
                <div className="hidden lg:flex items-center justify-between gap-8 h-18.25 pt-3 pb-3">
                    {/* Logo */}
                    <Link to={'/'} className="col-logo">
                        <img src={t("mainheader.logo")} alt="logo" className="w-fit h-fit object-contain" />
                    </Link>
                    {/* Search */}
                    <div className="flex-1 max-w-162.5">
                        <div className="flex items-center gap-2 h-10 border-2 border-sky-600 rounded-lg overflow-hidden">
                            <button className="allcategories-btn cursor-pointer w-33.25 h-full bg-(--bgbtn) border-l border-(--bordercolor) flex justify-center gap-5 items-center pt-2.5 pb-2.5 pl-3 pr-3 m-auto">
                                <p className="text-[12px] font-medium text-[#334155]">{t("mainheader.categories")}</p>
                                <ChevronDown className="text-[#334155] " size={18}/>
                            </button>
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder={t("mainheader.search")}
                                className="flex-1 min-w-0 h-full  text-[13px] text-[#94A3B8] font-extralight outline-none placeholder:text-gray-400 pl-20"
                            />
                            <button
                                aria-label="Search"
                                className="cursor-pointer h-full w-12 bg-sky-600 hover:bg-sky-700 text-white flex items-center justify-center transition-colors"
                            >
                                <Search size={17} />
                            </button>
                        </div>
                    </div>
                    {/* Actions */}
                    <div className="flex items-center gap-5 shrink-0">
                        {/* Account */}
                        <button className="flex items-center gap-2 cursor-pointer">
                            <div className="w-9 h-9 bg-slate-100 rounded-full flex items-center justify-center">
                                    <User size={18} className="text-[#475569]"/>
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
                            <Heart size={20} className="text-[#334155]"/>

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
                    <div className="flex items-center justify-between gap-3 h-13">

                        {/* Logo */}
                        <Link to={'/'} className="col-logo w-30">
                            <img src={t("mainheader.logo")} alt="logo" className="w-full h-full object-contain" />
                        </Link>

                        {/* Mobile Actions */}
                        <div className="flex items-center gap-4">

                            <button aria-label="Wishlist" className="relative cursor-pointer">
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

                            <button

                                aria-label="Toggle menu"
                                onClick={() =>
                                    setMobileMenuOpen(!mobileMenuOpen)
                                }
                            >
                                {mobileMenuOpen ? (
                                    <X size={20} className="cursor-pointer"/>
                                ) : (
                                    <Menu size={20} className="cursor-pointer"/>
                                )}
                            </button>

                        </div>
                    </div>

                    {/* Mobile Search */}
                    <div className="mobile-search mt-4 flex h-10 border border-[#0284C7] rounded-lg overflow-hidden">

                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            type="text"
                            placeholder={t("mainheader.search")}
                            className="flex-1 min-w-0 px-3 text-[13px] font-medium   text-[#94A3B8] outline-none"
                        />

                        <button
                            aria-label="Search"
                            className="w-12 cursor-pointer bg-[#0284C7] flex items-center justify-center text-white"
                        >
                            <Search size={18} />
                        </button>
                    </div>
         
                </div>
            </div>
        </div>
    );
}