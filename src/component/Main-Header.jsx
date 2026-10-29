import { useState } from "react";
import { Search, ShoppingCart, Heart, UserRound, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import TechLogo from "../assets/techlap-logo-ar.svg";
export default function Header() {
    const { t } = useTranslation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [search, setSearch] = useState("");

    return (
        <div className="main-header w-full bg-white border-b border-gray-100">
            <div className="container">
                {/* Desktop Header */}
                <div className="hidden lg:flex items-center justify-between gap-8 h-18.75">
                    {/* Logo */}
                    <Link to={'/'} className="col-logo">
                        <img src={TechLogo} alt="logo" className="w-fit h-fit object-contain" />
                    </Link>
                    {/* Search */}
                    <div className="flex-1 max-w-162.5">
                        <div className="flex items-center h-10 border-2 border-sky-600 rounded-lg overflow-hidden">

                            <select
                                className="h-full w-33.25 pl-3 pr-10 flex justify-center items-center  text-sm text-gray-700 bg-gray-50 outline-none border-l border-gray-200 cursor-pointer"
                            >
                                <option value="all" >{t("mainheader.categories")}</option>
                            </select>
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder={t("mainheader.search")}
                                className="flex-1 min-w-0 h-full px-4 text-sm outline-none placeholder:text-gray-400"
                            />
                            <button
                                aria-label="Search"
                                className="h-full w-12 bg-sky-600 hover:bg-sky-700 text-white flex items-center justify-center transition-colors"
                            >
                                <Search size={19} />
                            </button>
                        </div>
                    </div>
                    {/* Actions */}
                    <div className="flex items-center gap-5 shrink-0">
                        {/* Account */}
                        <button className="flex items-center gap-2">
                            <div className="w-9 h-9 bg-slate-100 rounded-full flex items-center justify-center">
                                <UserRound size={18} className="text-slate-600" />
                            </div>

                            <div className="text-start">
                                <p className="text-[11px] text-gray-400">
                                    {t("mainheader.welcome")}
                                </p>
                                <p className="text-sm font-semibold text-slate-800">
                                    {t("mainheader.account")}
                                </p>
                            </div>
                        </button>

                        {/* Wishlist */}
                        <button
                            aria-label="Wishlist"
                            className="relative text-slate-700"
                        >
                            <Heart size={23} />

                            <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                                3
                            </span>
                        </button>

                        {/* Cart */}
                        <button className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2">

                            <div className="relative">
                                <ShoppingCart
                                    size={23}
                                    className="text-sky-700"
                                />

                                <span className="absolute -top-2 -right-2 bg-sky-700 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                                    4
                                </span>
                            </div>

                            <div className="text-start">
                                <p className="text-[10px] text-sky-700">
                                    {t("mainheader.cart")}
                                </p>

                                <p className="text-xs font-bold text-slate-900">
                                    4,890 {t("mainheader.currency")}
                                </p>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile / Tablet Header */}
                <div className="lg:hidden">

                    {/* Top Row */}
                    <div className="flex items-center justify-between gap-3">

                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <div className="w-9 h-9 bg-gradient-to-br from-sky-400 to-blue-700 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold">T</span>
                            </div>

                            <div>
                                <h2 className="text-lg font-bold leading-tight">
                                    تك لاب
                                </h2>
                                <p className="text-[8px] text-gray-500">
                                    TECHLAP STORE
                                </p>
                            </div>
                        </div>

                        {/* Mobile Actions */}
                        <div className="flex items-center gap-4">

                            <button aria-label="Wishlist" className="relative">
                                <Heart size={21} />

                                <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
                                    3
                                </span>
                            </button>

                            <button aria-label="Cart" className="relative">
                                <ShoppingCart size={22} />

                                <span className="absolute -top-2 -right-2 bg-sky-600 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
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
                                    <X size={24} />
                                ) : (
                                    <Menu size={24} />
                                )}
                            </button>

                        </div>
                    </div>

                    {/* Mobile Search */}
                    <div className="mt-4 flex h-11 border-2 border-sky-600 rounded-lg overflow-hidden">

                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            type="text"
                            placeholder={t("mainheader.search")}
                            className="flex-1 min-w-0 px-3 text-sm outline-none"
                        />

                        <button
                            aria-label="Search"
                            className="w-12 bg-sky-600 flex items-center justify-center text-white"
                        >
                            <Search size={20} />
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="mt-4 p-4 bg-gray-50 rounded-lg space-y-4">

                            <button className="flex items-center gap-3 text-sm font-medium">
                                <UserRound size={19} />
                                {t("mainheader.account")}
                            </button>

                            <button className="flex items-center gap-3 text-sm font-medium">
                                <ShoppingCart size={19} />
                                {t("mainheader.cart")} - 4,890 {t("mainheader.currency")}
                            </button>

                            <select className="w-full border border-gray-200 rounded-md p-2 text-sm bg-white">
                                <option>{t("mainheader.categories")}</option>
                            </select>

                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}