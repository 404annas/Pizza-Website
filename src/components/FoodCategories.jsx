import React from 'react';
import icon1 from "@/assets/icon1.svg"
import icon5 from "@/assets/icon5.svg"
import shimla from "@/assets/shimla.webp"

// Added activeCategory and onSelect props
export default function FoodCategories({ activeCategory, onSelectCategory }) {
    const categories = [
        { label: "PIZZA", img: icon1, count: "4" },
        { label: "DRINKS", img: icon5, count: "11" },
    ];

    return (
        <section className="relative bg-white py-10">
            <div className="absolute -translate-x-32 md:-translate-x-30 top-20 -translate-y-1/4 z-10">
                <img
                    src={shimla.src}
                    alt="Decoration"
                    className="w-full h-60 md:h-70 object-cover shadow-none transform -scale-x-100"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-center text-2xl sm:text-3xl md:text-5xl font-black tracking-tight mb-16 text-[#232323]">
                    THE TRUE TASTE OF ITALY
                </h2>

                <div className="grid grid-cols-2 w-60 md:max-w-xs mx-auto gap-6 md:gap-8">
                    {categories.map((cat, index) => {
                        const isSelected = activeCategory === cat.label;
                        return (
                            <div
                                key={cat.label}
                                onClick={() => onSelectCategory(cat.label)} // Trigger selection
                                className={`relative flex flex-col items-center group cursor-pointer min-w-fit transition-all duration-300 ${isSelected ? "-translate-y-1" : "hover:-translate-y-1"}`}
                            >
                                {index !== categories.length - 1 && (
                                    <span className="absolute -right-4 top-1/2 -translate-y-1/2 h-20 w-[1px] bg-gray-200" />
                                )}

                                <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-2">
                                    <div className={`absolute -top-3 -right-1 bg-[#232323] text-white text-xs font-medium w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 z-30 ${isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                                        {cat.count}
                                    </div>

                                    <img
                                        loading="lazy"
                                        src={cat.img.src}
                                        alt={cat.label}
                                        className={`w-full h-full object-contain transition-all duration-300 ${isSelected ? "scale-110" : "group-hover:opacity-80 group-hover:scale-95"}`}
                                    />
                                </div>

                                <div className="relative flex flex-col items-center">
                                    <span className={`text-xs md:text-sm font-bold tracking-tight uppercase transition-colors ${isSelected ? "text-[#bd1f17]" : "text-[#232323]"}`}>
                                        {cat.label}
                                    </span>
                                    {/* Underline logic */}
                                    <span className={`absolute -bottom-0.5 h-[1.5px] bg-black transition-all duration-300 ${isSelected ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}