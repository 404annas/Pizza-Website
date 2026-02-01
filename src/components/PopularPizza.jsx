import PizzaCard from "./PizzaCard";
import pizza1 from "@/assets/Pizza1.webp";
import pizza2 from "@/assets/Pizza2.webp";
import pizza3 from "@/assets/Pizza3.webp";
import pizza4 from "@/assets/Pizza4.webp";

import sprite from "@/assets/sprite.png"
import fanta from "@/assets/fanta.png"

import DrinksCard from "./DrinksCard";

const pizzas = [
    { name: "K2 classic", image: pizza1, rating: "5.0", oldPrice: "$25.00", newPrice: "$19.00" },
    { name: "Beef pepproni", image: pizza2, rating: "4.9", oldPrice: "$24.00", newPrice: "$18.00" },
    { name: "Cheese", image: pizza3, rating: "5.0", oldPrice: "$22.00", newPrice: "$20.00" },
    { name: "Veggie", image: pizza4, rating: "4.3", oldPrice: "$20.00", newPrice: "$16.00" },
];

const drinks = [
    { name: "Sprite", image: sprite, rating: "5.0", oldPrice: "$5.00", newPrice: "$3.00" },
    { name: "Fanta", image: fanta, rating: "4.9", oldPrice: "$6.00", newPrice: "$4.00" },
    { name: "Fresh Lime", image: pizza3, rating: "5.0", oldPrice: "$4.00", newPrice: "$2.00" },
    { name: "Mocktail", image: pizza4, rating: "4.3", oldPrice: "$8.00", newPrice: "$6.00" },
];

export default function PopularPizza({ activeCategory }) {
    return (
        <section className="w-full pt-10 relative overflow-hidden">
            <div className="flex items-center justify-center gap-6 mb-10">
                <span className="text-[#bd1f17] text-2xl tracking-tighter uppercase">
                    Our Signature
                </span>
                <span className="h-20 w-px bg-gray-200"></span>
                <h2 className="text-5xl font-bold tracking-tighter uppercase text-[#232323]">
                    Popular {activeCategory === "PIZZA" ? "Pizza" : "Drinks"}
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
                {/* Conditional Rendering Logic */}
                {activeCategory === "PIZZA"
                    ? pizzas.map((pizza, index) => <PizzaCard key={index} pizza={pizza} />)
                    : drinks.map((drink, index) => <DrinksCard key={index} drink={drink} />)
                }
            </div>

            <div className="absolute left-1/2 bottom-28 -translate-x-1/2 z-10">
                <button className="w-28 h-28 rounded-full bg-yellow-400 border-10 border-[#bd1f17] text-black text-sm uppercase font-medium tracking-tight hover:scale-105 transition-all duration-300 leading-none cursor-pointer">
                    Explore <br /> Menu
                </button>
            </div>

            <h1 className="text-center text-[130px] font-black tracking-tighter text-black pointer-events-none">
                {activeCategory}
            </h1>
        </section>
    );
}