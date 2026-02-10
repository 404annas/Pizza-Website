import React, { useState } from 'react';
import { ZapIcon } from 'lucide-react';
import Image from 'next/image';

// Replace these with your actual assets
import slice from "@/assets/slice.png"
import fullPizza from "@/assets/fullPizza.png"

const PieTypes = () => {
    const [selection, setSelection] = useState('slice'); // 'slice' or 'pie'

    return (
        <section className="w-full py-10 bg-white overflow-hidden">
            <div className="max-w-4xl mx-auto px-6">

                {/* 1. TEXT SECTION (Centered) */}
                <div className="flex flex-col items-center text-center mb-12">
                    <span className="flex items-center gap-2 text-[#bd1f17] font-bold uppercase text-sm mb-4 tracking-wider">
                        <ZapIcon size={16} fill="currentColor" /> Choose Your Size
                    </span>

                    <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-gray-900 tracking-tighter uppercase leading-none mb-6">
                        How much <span className="text-[#bd1f17]">Hunger?</span>
                    </h2>

                    <p className="text-gray-500 max-w-2xl font-medium text-base mb-8">
                        Whether you're looking for a quick snack on the go or a full feast for the family, we've got the perfect portion for you.
                    </p>

                    {/* CUSTOM TOGGLE SELECTOR */}
                    <div className="relative flex bg-yellow-400 rounded-full w-full max-w-sm p-1 border border-gray-200 shadow-inner">
                        {/* Sliding Background */}
                        <div
                            className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-[#bd1f17] rounded-full transition-transform duration-300 ease-out shadow-md ${selection === 'pie' ? "translate-x-[100%]" : "translate-x-0"
                                }`}
                        />

                        <button
                            onClick={() => setSelection('slice')}
                            className={`relative z-10 flex-1 py-3 text-base font-bold cursor-pointer uppercase transition-colors duration-300 ${selection === 'slice' ? "text-white" : "text-black hover:text-black"
                                }`}
                        >
                            Slice ($5)
                        </button>

                        <button
                            onClick={() => setSelection('pie')}
                            className={`relative z-10 flex-1 py-3 text-base font-bold cursor-pointer uppercase transition-colors duration-300 ${selection === 'pie' ? "text-white" : "text-black hover:text-black"
                                }`}
                        >
                            Full Pie ($20)
                        </button>
                    </div>
                </div>

                {/* 2. IMAGE SECTION (Instant Switching) */}
                <div className="relative w-full flex items-center justify-center min-h-[200px] md:min-h-[500px]">

                    {/* Background Decorative Circle */}
                    <div className={`absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full transition-colors duration-500 ${selection === 'slice' ? 'bg-yellow-400/50' : 'bg-[#bd1f17]/50'
                        }`} />

                    {/* Images Container - Using Stacked Images for Instant Switch */}
                    <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">

                        {/* IMAGE 1: SLICE */}
                        <div className={`absolute inset-0 transition-all duration-500 ease-out transform ${selection === 'slice'
                            ? 'opacity-100 scale-100 rotate-0'
                            : 'opacity-0 scale-90 rotate-12 pointer-events-none'
                            }`}>
                            <Image
                                priority
                                src={slice}
                                alt="Pizza Slice"
                                className="w-full h-full object-contain drop-shadow-2xl"
                            />
                        </div>

                        {/* IMAGE 2: FULL PIE */}
                        <div className={`absolute inset-0 transition-all duration-500 ease-out transform ${selection === 'pie'
                            ? 'opacity-100 scale-100 rotate-0'
                            : 'opacity-0 scale-90 -rotate-12 pointer-events-none'
                            }`}>
                            <Image
                                priority
                                src={fullPizza}
                                alt="Full Pizza"
                                className="w-full h-full object-contain drop-shadow-2xl"
                            />
                        </div>

                        {/* Floating Price Badge (Changes based on state) */}
                        <div className="absolute -top-0 -right-0 md:top-4 md:right-4 z-20">
                            <div className="bg-yellow-400 border-4 border-[#bd1f17] w-24 h-24 rounded-full flex flex-col items-center justify-center shadow-xl animate-bounce-slow">
                                <span className="text-xs font-bold uppercase leading-none text-[#bd1f17]">Only</span>
                                <span className="text-3xl font-black text-[#bd1f17]">
                                    {selection === 'slice' ? '$5' : '$20'}
                                </span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default PieTypes;