import { Star } from "lucide-react";

export default function DrinksCard({ drink }) {
    return (
        <div
            className="
        group
        rounded
        text-center
        flex items-center flex-col gap-0
        transition-all
        duration-300
        ease-in-out
        hover:bg-white
        border border-black/50
        shadow-sm
        hover:shadow-md
        hover:-translate-y-2
      "
        >
            {/* Image INSIDE card */}
            <div className="pt-6 flex justify-center">
                <img
                    src={drink.image.src}
                    alt={drink.name}
                    className="
            w-full
            h-80
            transition-all
            duration-300
            group-hover:scale-105 cursor-pointer
          "
                />
            </div>

            {/* Content */}
            <div className="px-6 pb-6">
                {/* Rating */}
                <div className="flex justify-center items-center mb-3">
                    <div className="bg-yellow-400 flex items-center gap-1 text-white text-xl px-5 py-1.5 mt-4">
                        <Star size={20} />
                        <Star size={20} />
                        <Star size={20} />
                        <Star size={20} />
                        <Star size={20} />
                    </div>
                    <span className="bg-black text-white font-medium text-base px-2 py-1 mt-4">
                        {drink.rating}
                    </span>
                </div>

                {/* Name */}
                <h3 className="text-sm tracking-tight uppercase mb-3 md:text-xl font-bold">
                    {drink.name}
                </h3>

                {/* Price */}
                <div className="flex justify-center gap-2 text-sm -mt-4">
                    <span className="text-[#bd1f17] line-through font-bold text-lg md:text-xl">
                        {drink.oldPrice}
                    </span>
                    <span className="font-bold text-lg md:text-xl">
                        {drink.newPrice}
                    </span>
                </div>
            </div>
        </div>
    );
}