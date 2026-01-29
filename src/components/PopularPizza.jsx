import PizzaCard from "./PizzaCard";
import pizza1 from "@/assets/Pizza1.webp";
import pizza2 from "@/assets/Pizza2.webp";
import pizza3 from "@/assets/Pizza3.webp";
import pizza4 from "@/assets/Pizza4.webp";

const pizzas = [
    {
        name: "MEXICAN GREEN WAVE",
        image: pizza1,
        rating: "5.0",
        oldPrice: "$25.00",
        newPrice: "$19.00",
    },
    {
        name: "INDI TANDOORI PANEER",
        image: pizza2,
        rating: "4.9",
        oldPrice: "$24.00",
        newPrice: "$18.00",
    },
    {
        name: "DOUBLE CHICKEN SAUSAGE",
        image: pizza3,
        rating: "5.0",
        oldPrice: "$22.00",
        newPrice: "$20.00",
    },
    {
        name: "GRILLED VEAL COOKED",
        image: pizza4,
        rating: "4.3",
        oldPrice: "$20.00",
        newPrice: "$16.00",
    },
];

export default function PopularPizza() {
    return (
        <section
            className="
        w-full
        pt-10
        relative
        overflow-hidden
      "
        >
            {/* Heading */}
            <div className="flex items-center justify-center gap-6 mb-10">
                <span className="text-[#bd1f17] text-2xl tracking-tighter uppercase">
                    Our Signature
                </span>

                <span className="h-20 w-px bg-gray-200"></span>

                <h2 className="text-5xl font-bold tracking-tighter uppercase text-[#232323]">
                    Popular Pizza
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
                {pizzas.map((pizza, index) => (
                    <PizzaCard key={index} pizza={pizza} />
                ))}
            </div>

            {/* Explore Menu Button */}
            <div className="absolute left-1/2 bottom-28 -translate-x-1/2 z-10">
                <button className="w-28 h-28 rounded-full bg-yellow-400 border-10 border-[#bd1f17] text-black text-sm uppercase font-medium tracking-tight hover:scale-105 transition-all duration-300 leading-none cursor-pointer">
                    Explore <br /> Menu
                </button>
            </div>

            {/* Background Text */}
            <h1
                className="
                text-center
          text-[130px]
          font-black
          tracking-tighter
          text-black
          pointer-events-none
        "
            >
                SIGNATURE
            </h1>
        </section>
    );
}