import { useRef, useState, useEffect } from "react"; // Added useState and useEffect
import PizzaCard from "./PizzaCard";
import pizza1 from "@/assets/Pizza1.webp";
import pizza2 from "@/assets/Pizza2.webp";
import pizza3 from "@/assets/Pizza3.webp";
import pizza4 from "@/assets/Pizza4.webp";

import sprite from "@/assets/sprite.png";
import fanta from "@/assets/fanta.png";
import dietCoke from "@/assets/dietCoke3.png";
import zeroSugar from "@/assets/cokeSugar.png";
import drPepper from "@/assets/drPepper2.png";
import minuteMaid from "@/assets/minuteMaid2.png"
import dasani from "@/assets/dasani.png"
import power from "@/assets/power.png"
import coffee from "@/assets/coffee1.png"
import monster from "@/assets/monster.png"
import throatle from "@/assets/throatle.png"

import DrinksCard from "./DrinksCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const pizzas = [
    { name: "K2 classic", image: pizza1, rating: "5.0", oldPrice: "$25.00", newPrice: "$19.00" },
    { name: "Beef pepproni", image: pizza2, rating: "4.9", oldPrice: "$24.00", newPrice: "$18.00" },
    { name: "Cheese", image: pizza3, rating: "5.0", oldPrice: "$22.00", newPrice: "$20.00" },
    { name: "Veggie", image: pizza4, rating: "4.3", oldPrice: "$20.00", newPrice: "$16.00" },
];

const drinks = [
    { name: "Sprite", image: sprite, rating: "5.0", oldPrice: "$5.00", newPrice: "$3.00" },
    { name: "Fanta", image: fanta, rating: "4.9", oldPrice: "$6.00", newPrice: "$4.00" },
    { name: "Diet Coke", image: dietCoke, rating: "5.0", oldPrice: "$4.00", newPrice: "$2.00" },
    { name: "Coke Zero Sugar", image: zeroSugar, rating: "4.3", oldPrice: "$8.00", newPrice: "$6.00" },
    { name: "Dr Pepper", image: drPepper, rating: "4.3", oldPrice: "$8.00", newPrice: "$6.00" },
    { name: "Minute Maid", image: minuteMaid, rating: "4.3", oldPrice: "$8.00", newPrice: "$6.00" },
    { name: "Dasani", image: dasani, rating: "4.3", oldPrice: "$8.00", newPrice: "$6.00" },
    { name: "Powerade", image: power, rating: "4.3", oldPrice: "$8.00", newPrice: "$6.00" },
    { name: "Monster", image: monster, rating: "4.3", oldPrice: "$8.00", newPrice: "$6.00" },
    { name: "Full Throatle", image: throatle, rating: "4.3", oldPrice: "$8.00", newPrice: "$6.00" },
    { name: "Gold Peak", image: coffee, rating: "4.3", oldPrice: "$8.00", newPrice: "$6.00" },
];

export default function PopularPizza({ activeCategory }) {
    const scrollRef = useRef(null);

    // States to track if buttons should be disabled
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const items = activeCategory === "PIZZA" ? pizzas : drinks;

    // Function to calculate if scrolling is possible in either direction
    const checkScrollButtons = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            // We use a 1px threshold to account for sub-pixel rounding
            setCanScrollLeft(scrollLeft > 1);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
        }
    };

    // Check scroll status on load and when category changes
    useEffect(() => {
        checkScrollButtons();
        // Reset scroll position to start when category changes
        if (scrollRef.current) {
            scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
    }, [activeCategory]);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current;

            // Calculate width of one card (1 card on mobile, 4 on desktop)
            const cardWidth = clientWidth / (window.innerWidth < 768 ? 1 : 4);

            scrollRef.current.scrollBy({
                left: direction === "left" ? -cardWidth : cardWidth,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="w-full pt-10 relative overflow-hidden">
            <div className="flex md:flex-row flex-col items-center justify-center gap-2 sm:gap-4 md:gap-6 mb-10">
                <span className="text-[#bd1f17] text-lg sm:text-xl md:text-2xl tracking-tighter uppercase">
                    Our Signature
                </span>
                <span className="h-20 w-px bg-gray-200 md:block hidden"></span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter uppercase text-[#232323]">
                    Popular {activeCategory === "PIZZA" ? "Pizza" : "Drinks"}
                </h2>
            </div>

            {/* Scroll Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 mb-10 md:mb-0 relative">
                <div
                    ref={scrollRef}
                    onScroll={checkScrollButtons}
                    className="flex overflow-x-auto gap-10 scrollbar-hide snap-x snap-mandatory transition-all duration-500 py-10"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {items.map((item, index) => (
                        <div key={index} className="min-w-full md:min-w-[calc(33.33%-27px)] lg:min-w-[calc(25%-30px)] snap-start">
                            {activeCategory === "PIZZA" ? (
                                <PizzaCard pizza={item} />
                            ) : (
                                <DrinksCard drink={item} />
                            )}
                        </div>
                    ))}
                </div>

                {/* Arrows: Only show if items > 4 */}
                {items.length > 4 && (
                    <div className="flex justify-center gap-4 mt-2 mb-16">
                        <button
                            disabled={!canScrollLeft}
                            onClick={() => scroll("left")}
                            className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-colors duration-300 
                                ${!canScrollLeft
                                    ? "border-gray-300 text-gray-300 cursor-not-allowed"
                                    : "border-[#bd1f17] text-[#bd1f17] hover:bg-[#bd1f17] hover:text-white cursor-pointer"
                                }`}
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <button
                            disabled={!canScrollRight}
                            onClick={() => scroll("right")}
                            className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-colors duration-300 
                                ${!canScrollRight
                                    ? "border-gray-300 text-gray-300 cursor-not-allowed"
                                    : "border-[#bd1f17] text-[#bd1f17] hover:bg-[#bd1f17] hover:text-white cursor-pointer"
                                }`}
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                )}
            </div>

            {/* Explore Menu Button */}
            <div className="absolute left-1/2 bottom-24 md:bottom-30 -translate-x-1/2 z-10 pointer-events-none">
                <button className="w-28 h-28 rounded-full bg-yellow-400 border-[10px] border-[#bd1f17] text-black text-sm uppercase font-medium tracking-tight hover:scale-105 transition-all duration-300 leading-none cursor-pointer pointer-events-auto">
                    Explore <br /> Menu
                </button>
            </div>

            <h1 className="text-center text-[100px] md:text-[130px] font-black tracking-tighter text-black pointer-events-none uppercase">
                {activeCategory}
            </h1>
        </section>
    );
}