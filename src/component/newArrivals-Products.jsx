import React from 'react';

// --- TRANSLATIONS & STATIC DATA ---
const uiTranslations = {
    en: {
        title: "New Arrivals",
        subtitle: "The newest high-performance laptops available for direct shipping",
        viewAll: "View All",
        whatsappBtn: "Order via WhatsApp",
        cartBtn: "Add to Cart"
    },
    ar: {
        title: "وصل حديثاً",
        subtitle: "أحدث أجهزة اللابتوب عالية الأداء المتاحة للشحن المباشر",
        viewAll: "عرض الكل",
        whatsappBtn: "اطلب عبر واتساب",
        cartBtn: "أضف للسلة"
    }
};

const products = [
    {
        id: 1,
        badge: { type: 'new', en: 'NEW', ar: 'جديد' },
        brand: { en: 'Lenovo • Legion Series', ar: 'لينوفو • سلسلة ليجون' },
        title: {
            en: 'Lenovo Legion Pro 5i (Core i7-14700HX / RTX 4070 / 32GB RAM / 1TB SSD)',
            ar: 'لينوفو ليجون برو 5i (كور i7-14700HX / RTX 4070 / 32 جيجابايت / 1 تيرابايت)'
        },
        tags: [{ en: '16" 240Hz', ar: '16" 240Hz' }, { en: 'QHD+ 500nits', ar: 'QHD+ 500 شمعة' }],
        price: '6,799',
        oldPrice: '7,499',
        currency: { en: 'SAR', ar: 'ر.س' },
        image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&auto=format&fit=crop'
    },
    {
        id: 2,
        badge: { type: 'new', en: 'NEW', ar: 'جديد' },
        brand: { en: 'ASUS • ROG Gaming', ar: 'اسوس • روج جيمنج' },
        title: {
            en: 'ASUS ROG Strix G16 (Core i9-13980HX / RTX 4060 / 16GB RAM / 1TB SSD)',
            ar: 'اسوس روج ستريكس G16 (كور i9-13980HX / RTX 4060 / 16 جيجابايت / 1 تيرابايت)'
        },
        tags: [{ en: '165Hz FHD', ar: '165Hz FHD' }, { en: 'RGB Keyboard', ar: 'لوحة مفاتيح RGB' }],
        price: '5,899',
        oldPrice: '6,299',
        currency: { en: 'SAR', ar: 'ر.س' },
        image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=500&auto=format&fit=crop'
    },
    {
        id: 3,
        badge: { type: 'pro', en: 'PRO', ar: 'برو' },
        brand: { en: 'HP • Omen Series', ar: 'اتش بي • سلسلة اومين' },
        title: {
            en: 'HP Omen Transcend 14 OLED (Ultra 7 155H / RTX 4060 / 16GB / 1TB)',
            ar: 'اتش بي اومين ترانسيند 14 اوليد (الترا 7 155H / RTX 4060 / 16 جيجابايت / 1 تيرابايت)'
        },
        tags: [{ en: 'OLED 2.8K', ar: 'OLED 2.8K' }, { en: 'Ultra Light 1.6kg', ar: 'وزن خفيف 1.6 كجم' }],
        price: '6,199',
        oldPrice: '6,899',
        currency: { en: 'SAR', ar: 'ر.س' },
        image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&auto=format&fit=crop'
    },
    {
        id: 4,
        badge: { type: 'new', en: 'NEW', ar: 'جديد' },
        brand: { en: 'MSI • Katana Series', ar: 'ام اس اي • سلسلة كاتانا' },
        title: {
            en: 'MSI Katana 15 B13V (i7-13620H / RTX 4050 6GB / 16GB RAM / 512GB)',
            ar: 'ام اس اي كاتانا 15 B13V (i7-13620H / RTX 4050 / 16 جيجابايت / 512 جيجابايت)'
        },
        tags: [{ en: 'IPS 144Hz', ar: 'IPS 144Hz' }, { en: 'Optimized Cooling', ar: 'تبريد محسن' }],
        price: '3,999',
        oldPrice: '4,450',
        currency: { en: 'SAR', ar: 'ر.س' },
        image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&auto=format&fit=crop'
    }
];

export default function NewArrivalsProducts({ isRTL = false }) {
    const lang = isRTL ? 'ar' : 'en';
    const t = uiTranslations[lang];

    return (
        // Main Container with dir attribute for RTL support
        <div dir={isRTL ? 'rtl' : 'ltr'} className="w-full max-w-[1400px] mx-auto p-4 font-sans">

            {/* Header Section */}
            <div className="flex flex-col justify-between gap-4 mb-6 sm:flex-row sm:items-end">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        {/* Green Dot */}
                        <span className="w-2.5 h-2.5 rounded-full bg-[#0fa368]"></span>
                        <h2 className="text-2xl font-bold text-slate-900">{t.title}</h2>
                    </div>
                    <p className="text-sm text-slate-500">{t.subtitle}</p>
                </div>

                {/* View All Link */}
                <a href="#" className="group flex items-center gap-1 text-[#0066cc] font-semibold text-sm hover:underline">
                    {t.viewAll}
                    <svg
                        className="w-4 h-4 transition-transform rtl:-scale-x-100 group-hover:translate-x-1 rtl:group-hover:-translate-x-1"
                        fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {products.map((product) => (

                    /* Product Card */
                    <div key={product.id} className="flex flex-col overflow-hidden transition-shadow duration-300 bg-white border border-slate-200 rounded-xl hover:shadow-lg">

                        {/* Image & Badge Area */}
                        <div className="relative aspect-[4/3] bg-slate-50 border-b border-slate-100 p-4">
                            <img
                                src={product.image}
                                alt={product.title[lang]}
                                className="object-contain w-full h-full mix-blend-multiply"
                            />

                            {/* Badge: uses start-2 to automatically switch sides based on RTL/LTR */}
                            <span className={`absolute top-2 start-2 text-[10px] font-bold px-2 py-0.5 text-white rounded-sm uppercase tracking-wider
                ${product.badge.type === 'new' ? 'bg-[#0fa368]' : 'bg-[#0066cc]'}`
                            }>
                                {product.badge[lang]}
                            </span>
                        </div>

                        {/* Content Area */}
                        <div className="flex flex-col flex-1 p-4">

                            {/* Brand & Title */}
                            <span className="text-[11px] text-slate-500 mb-1.5">{product.brand[lang]}</span>
                            <h3 className="mb-3 text-sm font-bold leading-snug text-slate-900 line-clamp-2" title={product.title[lang]}>
                                {product.title[lang]}
                            </h3>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-1.5 mb-4">
                                {product.tags.map((tag, idx) => (
                                    <span key={idx} className="bg-slate-100 text-slate-600 text-[10px] px-2 py-1 rounded-md font-medium">
                                        {tag[lang]}
                                    </span>
                                ))}
                            </div>

                            {/* Spacer to push pricing and buttons to bottom */}
                            <div className="mt-auto"></div>

                            {/* Pricing */}
                            <div className="flex items-baseline gap-1 mb-4">
                                <span className="text-xl font-bold text-slate-900">{product.price}</span>
                                <span className="text-xs text-slate-500">{product.currency[lang]}</span>
                                {/* ms-auto acts as margin-left in LTR and margin-right in RTL */}
                                <span className="text-[11px] text-slate-400 line-through ms-auto">{product.oldPrice} {product.currency[lang]}</span>
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col gap-2">
                                {/* WhatsApp Button */}
                                <button className="w-full bg-[#0fa368] hover:bg-[#0c8a57] text-white transition-colors rounded-md py-2 flex items-center justify-center gap-1.5 text-sm font-semibold">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                                    </svg>
                                    {t.whatsappBtn}
                                </button>

                                {/* Add to Cart Button */}
                                <button className="w-full bg-white border border-[#0066cc] text-[#0066cc] hover:bg-slate-50 transition-colors rounded-md py-2 flex items-center justify-center gap-1.5 text-sm font-semibold">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    {t.cartBtn}
                                </button>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}