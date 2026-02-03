import React, { useState } from 'react';
import { ZapIcon } from 'lucide-react';

import slice from "@/assets/slice.png"
import fullPizza from "@/assets/fullPizza.png"
import Image from 'next/image';

// Replace these with your actual assets
const sliceImg = slice;
const fullPieImg = fullPizza;

const PieTypes = () => {
    const [selection, setSelection] = useState('slice'); // 'slice' or 'pie'

    return (
        <section className="w-full py-10 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-10">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">

                    {/* LEFT SIDE: Content & Toggle */}
                    <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <span className="flex items-center gap-2 text-[#bd1f17] font-bold uppercase text-sm mb-4">
                            <ZapIcon size={16} fill="currentColor" /> Choose Your Size
                        </span>

                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-yellow-400 tracking-tighter uppercase leading-none mb-6">
                            How much <br />
                            <span className="text-[#bd1f17]">Hunger?</span>
                        </h2>

                        <p className="text-gray-500 max-w-md mb-6 font-normal">
                            Whether you're looking for a quick snack on the go or a full feast for the family, we've got the perfect portion for you.
                        </p>

                        {/* CUSTOM TOGGLE SELECTOR */}
                        <div className="relative flex p-1 bg-yellow-400 rounded-full w-full max-w-sm mb-10 border-2 border-transparent">
                            {/* Sliding Background */}
                            <div
                                className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-[#bd1f17] rounded-full transition-all duration-500 ease-in-out shadow-lg ${selection === 'pie' ? "translate-x-full" : "translate-x-0"
                                    }`}
                            />

                            <button
                                onClick={() => setSelection('slice')}
                                className={`relative z-10 flex-1 py-4 text-base font-black uppercase transition-colors duration-300 cursor-pointer ${selection === 'slice' ? "text-white" : "text-black"
                                    }`}
                            >
                                $5.00 Per Slice
                            </button>

                            <button
                                onClick={() => setSelection('pie')}
                                className={`relative z-10 flex-1 py-4 text-base font-black uppercase transition-colors duration-300 cursor-pointer ${selection === 'pie' ? "text-white" : "text-black"
                                    }`}
                            >
                                $20.00 Full Pie
                            </button>
                        </div>
                    </div>

                    {/* RIGHT SIDE: Image Display */}
                    <div className="w-full lg:w-1/2 relative flex items-center justify-center min-h-[400px]">

                        {/* Background Decorative Circle */}
                        <div className={`absolute w-64 h-64 md:w-[450px] md:h-[450px] rounded-full transition-colors duration-700 ${selection === 'slice' ? 'bg-yellow-400' : 'bg-white'
                            }`} />

                        {/* Large Background Text */}
                        <h3 className="absolute text-[120px] md:text-[200px] font-black text-gray-100 italic select-none leading-none -z-10 tracking-tighter">
                            {selection === 'slice' ? 'SLICE' : 'FULL'}
                        </h3>

                        {/* The Image */}
                        <div className="relative z-10 group transition-all duration-700 transform hover:rotate-6">
                            <Image
                                priority={true}
                                src={selection === 'slice' ? sliceImg : fullPieImg}
                                alt="Pizza Selection"
                                className={`w-64 md:w-[450px] object-cover transition-all duration-700 ease-in-out drop-shadow-[0_10px_10px_rgba(0,0,0,0.25)] ${selection === 'pie' ? 'scale-110' : 'scale-100 rotate-12'
                                    }`}
                            />

                            {/* Floating Price Badge */}
                            <div className="absolute -top-4 -right-4 bg-yellow-400 border-4 border-[#bd1f17] w-20 h-20 md:w-24 md:h-24 rounded-full flex flex-col items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                                <span className="text-xs font-black uppercase leading-none">Only</span>
                                <span className="text-xl md:text-4xl font-black">{selection === 'slice' ? '$5' : '$20'}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PieTypes;