"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Asset Imports
import RedBg from "@/assets/redbackground.webp";
import Lines from "@/assets/lines.webp";
import ItalianText from "@/assets/italian.png";
import OriginalText from "@/assets/original.png";
import MainPizza from "@/assets/mainPizza.webp";
import Tomato from "@/assets/tomato.webp";
import YellowCircle from "@/assets/yellowCircle.png";
import shimla from "@/assets/shimla.webp";
import BelowBar from "@/assets/belowBar.jpg";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-[#a02422]">

            {/* 1. BACKGROUND LAYERS (z-0) */}
            <div className="absolute inset-0 z-0">
                <Image src={RedBg} alt="bg" fill className="object-cover" priority />
                <div className="absolute inset-0 opacity-40 mix-blend-multiply">
                    <Image src={Lines} alt="lines" fill className="object-cover" />
                </div>
                {/* Overlay colors to match image depth */}
                <div className='absolute inset-0 bg-[#b6261c]/40' />
                <div className='absolute inset-0 bg-black/10' />
            </div>

            {/* 2. TEXT LAYER (z-10) - Positioned higher up */}
            <div className="absolute top-[12%] md:-top-[5%] left-1/2 -translate-x-1/2 z-10 flex flex-col items-center w-full z-30">
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Image src={OriginalText} alt="Original" className="w-[180px] md:w-[350px] h-auto" />
                </motion.div>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <Image src={ItalianText} alt="ITALIAN" className="w-[380px] md:w-[700px] lg:w-[700px] -mt-35 h-auto" />
                </motion.div>
            </div>

            {/* 3. PIZZA LAYER (z-20) - Positioned to overlap the bottom of the text */}
            <div className="absolute top-[38%] md:top-[10%] left-1/2 -translate-x-1/2 z-20">
                <motion.div
                    initial={{ y: 600, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* Infinite Rotation */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                        className="w-[450px] md:w-[750px] lg:w-[1200px]"
                    >
                        <Image
                            src={MainPizza}
                            alt="Main Pizza"
                            className="w-full h-auto drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)]"
                        />
                    </motion.div>
                </motion.div>

                {/* Today Offer Badge - Attached to the Pizza Container */}
                <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 1.5, type: "spring" }}
                    className="absolute top-[20%] right-[0%] md:right-[5%] z-30 w-24 h-24 md:w-36 md:h-36"
                >
                    <Image src={YellowCircle} alt="Offer" fill className="object-contain" />
                    <div className="absolute inset-0 flex items-center justify-center text-center text-black font-black uppercase text-[10px] md:text-[14px]">
                        Today<br />Offer
                    </div>
                </motion.div>
            </div>

            {/* 4. SIDE ITEMS (z-10) */}
            <motion.div
                initial={{ x: -300, rotate: -45, opacity: 0 }}
                animate={{ x: 0, rotate: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute -left-[10%] top-[25%] w-32 md:w-60 z-10"
            >
                <Image src={Tomato} alt="tomato" className="w-full h-auto drop-shadow-2xl" />
            </motion.div>

            <motion.div
                initial={{ x: 300, rotate: 45, opacity: 0 }}
                animate={{ x: 0, rotate: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="absolute -right-[11%] top-[10%] w-32 md:w-70 z-10 scale-x-[1]"
            >
                <Image src={shimla} alt="pepper" className="w-full h-auto drop-shadow-2xl" />
            </motion.div>

            {/* 5. BOTTOM BAR & SPECIAL ORDER BUTTON (UPDATED) */}
            <div className="absolute bottom-0 w-full z-40">
                <div className="relative w-full flex flex-col items-center">
                    
                    {/* The Concave White Shape - replaces the simple image for a perfect dip */}
                    <svg 
                        viewBox="0 0 1440 220" 
                        fill="white" 
                        className="w-full h-auto translate-y-[2px]" 
                        preserveAspectRatio="none"
                    >
                        <path d="M0,0 Q720,180 1440,0 V220 H0 Z" />
                    </svg>

                    {/* Floating Herb Decorations in the white section */}
                    <div className="absolute top-[35%] left-[18%] w-10 md:w-24 opacity-80 pointer-events-none">
                        <Image src={Tomato} alt="herb" className="rotate-[25deg] scale-75" />
                    </div>
                    <div className="absolute top-[45%] right-[18%] w-8 md:w-20 opacity-80 pointer-events-none scale-x-[-1]">
                        <Image src={Tomato} alt="herb" className="-rotate-[15deg] scale-90" />
                    </div>

                    {/* Button Assembly - sits perfectly in the 'dip' */}
                    <div className="absolute -top-[55px] md:-top-[0%] flex items-center justify-center">
                        
                        {/* 1. Golden Base Circle */}
                        <div className="absolute w-[130px] h-[130px] md:w-[200px] md:h-[200px] bg-[#d5a81f] rounded-full shadow-lg"></div>

                        {/* 2. Main White Circle Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative w-[112px] h-[112px] md:w-[160px] md:h-[160px] bg-white rounded-full flex flex-col items-center justify-center shadow-xl z-10"
                        >
                            {/* 3. Red Arrow Icon Badge */}
                            <div className="absolute -top-3 md:-top-9 w-9 h-9 md:w-15 md:h-15 bg-[#c41e12] rounded-full text-white flex items-center justify-center shadow-md">
                                <ArrowRight />
                            </div>

                            {/* 4. Condensed High-Impact Typography */}
                            <div className="flex flex-col items-center justify-center leading-[0.8] md:leading-[0.75] mt-2 md:mt-5">
                                <span className="text-black font-black text-base md:text-lg uppercase tracking-tighter scale-y-[1.3]">
                                    ORDER
                                </span>
                                <span className="text-black font-black text-base md:text-lg uppercase tracking-tighter scale-y-[1.3]">
                                    PIZZA
                                </span>
                            </div>
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;