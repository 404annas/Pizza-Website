import React from 'react';

import icon1 from "@/assets/icon1.svg"
import icon2 from "@/assets/icon2.svg"
import icon3 from "@/assets/icon3.svg"
import icon4 from "@/assets/icon4.svg"
import icon5 from "@/assets/icon5.svg"
import icon6 from "@/assets/icon6.svg"

import shimla from "@/assets/shimla.webp"

export default function FoodCategories() {
    const categories = [
        { label: "PIZZA", img: icon1, count: "25" },
        { label: "BURGERS", img: icon2, count: "20" },
        { label: "SALAD", img: icon3, count: "35" },
        { label: "FRIES", img: icon4, count: "08" },
        { label: "DRINKS", img: icon5, count: "10" },
        { label: "CHICKEN", img: icon6, count: "20" },
    ];

    return (
        <section className="relative bg-white py-10">
            {/* Left Decoration Image */}
            <div className="absolute -translate-x-30 top-20 -translate-y-1/4 z-10">
                <img
                    src={shimla.src}
                    alt="Decoration"
                    className="w-full h-70 object-cover shadow-none transform -scale-x-100"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-center text-3xl md:text-5xl font-black tracking-tight mb-16 text-[#232323]">
                    THE TRUE TASTE OF ITALY
                </h2>

                {/* Categories Row - Reduced Gap */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 max-w-4xl mx-auto gap-10">
                    {categories.map((cat, index) => (
                        <div
                            key={cat.label}
                            className="relative flex flex-col items-center group cursor-pointer min-w-fit hover:-translate-y-1 transition-all duration-300"
                        >
                            {/* Vertical Divider */}
                            {index !== categories.length - 1 && (
                                <span className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 h-20 w-[1px] bg-gray-200" />
                            )}

                            {/* Image Container */}
                            <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-2">
                                {/* Badge on Hover */}
                                <div className="absolute -top-3 -right-1 bg-[#232323] text-white text-xs font-medium w-7 h-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-30">
                                    {cat.count}
                                </div>

                                {/* Icon */}
                                <img
                                    loading="lazy"
                                    src={cat.img.src}
                                    alt={cat.label}
                                    className="w-full h-full object-contain transition-all duration-300 group-hover:opacity-80 group-hover:scale-95"
                                />
                            </div>

                            {/* Label */}
                            <div className="relative flex flex-col items-center">
                                <span className="text-xs md:text-sm font-bold tracking-tight text-[#232323] uppercase">
                                    {cat.label}
                                </span>
                                <span className="absolute -bottom-0.5 w-0 h-[1.5px] bg-black transition-all duration-300 group-hover:w-full"></span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}