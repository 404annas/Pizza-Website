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
import leaf from "@/assets/leaf.webp"
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    // Premium Easing Curve for a high-end feel
    const premiumEase = [0.16, 1, 0.3, 1];

    return (
        <section className="relative w-full h-screen overflow-hidden bg-[#a02422]">

            {/* 1. BACKGROUND LAYERS (z-0) */}
            <div className="absolute inset-0 z-0">
                <Image src={RedBg} alt="bg" fill className="object-cover" priority />
                <div className="absolute inset-0 opacity-40 mix-blend-multiply">
                    <Image src={Lines} alt="lines" fill className="object-cover" />
                </div>
                <div className='absolute inset-0 bg-[#b6261c]/40' />
                <div className='absolute inset-0 bg-black/10' />
            </div>

            {/* 2. TEXT LAYER (z-10) */}
            <div className="absolute top-[25%] md:-top-[5%] left-1/2 -translate-x-1/2 z-10 flex flex-col items-center w-full z-30">
                <motion.div
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: premiumEase, delay: 0.2 }}
                    style={{ willChange: "transform, opacity" }}
                >
                    <Image src={OriginalText} alt="Original" className="w-[180px] md:w-[350px] h-auto -mt-45 md:-mt-0" />
                </motion.div>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.2, ease: premiumEase }}
                    style={{ willChange: "transform, opacity" }}
                >
                    <Image src={ItalianText} alt="ITALIAN" className="w-[380px] md:w-[700px] lg:w-[700px] -mt-35 h-auto" />
                </motion.div>
            </div>

            {/* 3. PIZZA LAYER (z-20) */}
            <div className="absolute top-[30%] md:top-[10%] left-1/2 -translate-x-1/2 z-20">
                <motion.div
                    initial={{ y: 600, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.4, ease: premiumEase }}
                    style={{ willChange: "transform, opacity" }}
                >
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                        className="w-[450px] md:w-[750px] lg:w-[1200px]"
                        style={{ willChange: "transform" }} // Forces GPU acceleration for the rotation
                    >
                        <Image
                            src={MainPizza}
                            alt="Main Pizza"
                            className="w-full h-auto drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)]"
                        />
                    </motion.div>
                </motion.div>

                {/* Today Offer Badge */}
                <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 1.5, type: "spring", stiffness: 60, damping: 15 }}
                    className="absolute top-[5%] right-[5%] md:right-[0%] z-30 w-32 h-32 md:w-84 md:h-84"
                    style={{ willChange: "transform" }}
                >
                    <div className="relative w-full h-full md:block hidden">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 2, duration: 1, ease: premiumEase }}
                            className="absolute -bottom-[7%] -right-[10%] w-20 md:w-80 z-0 pointer-events-none"
                            style={{ willChange: "transform, opacity" }}
                        >
                            <Image src={leaf} alt="basil leaf" className="w-full h-auto drop-shadow-xl rotate-[-10deg]" />
                        </motion.div>

                        <div className="absolute inset-0 z-10">
                            <Image src={YellowCircle} alt="Offer" fill className="object-cover" />
                        </div>

                        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-black font-bold tracking-tighter">
                            <span className="text-sm md:text-xl uppercase font-bold">Today</span>
                            <span className="text-sm md:text-xl -mt-2 uppercase font-bold">Offer</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* 4. SIDE ITEMS (z-10) */}
            <motion.div
                initial={{ x: -300, rotate: -45, opacity: 0 }}
                animate={{ x: 0, rotate: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: premiumEase, delay: 0.5 }}
                className="absolute -left-[20%] md:-left-[10%] top-[25%] w-40 md:w-60 z-10"
                style={{ willChange: "transform, opacity" }}
            >
                <Image src={Tomato} alt="tomato" className="w-full h-auto drop-shadow-2xl" />
            </motion.div>

            <motion.div
                initial={{ x: 300, rotate: 45, opacity: 0 }}
                animate={{ x: 0, rotate: 0, opacity: 1 }}
                transition={{ duration: 1.5, ease: premiumEase, delay: 0.5 }}
                className="absolute -right-[20%] md:-right-[11%] top-[10%] w-40 md:w-70 z-10 scale-x-[1]"
                style={{ willChange: "transform, opacity" }}
            >
                <Image src={shimla} alt="pepper" className="w-full h-auto drop-shadow-2xl" />
            </motion.div>

            {/* 5. BOTTOM BAR & SPECIAL ORDER BUTTON */}
            <div className="absolute bottom-0 w-full z-40">
                <div className="relative w-full flex flex-col items-center">
                    <svg
                        viewBox="0 0 1440 220"
                        fill="white"
                        className="w-full h-auto translate-y-[2px]"
                        preserveAspectRatio="none"
                    >
                        <path d="M0,0 Q720,180 1440,0 V220 H0 Z" />
                    </svg>

                    <div className="absolute top-[45%] left-[18%] w-full -translate-x-15 md:-translate-x-60 pointer-events-none">
                        <Image src={BelowBar} alt="herb" className="w-full" />
                    </div>

                    <div className="absolute -top-[70px] md:-top-[55px] md:-top-[0%] flex items-center justify-center">
                        <div className="absolute w-[130px] h-[130px] md:w-[200px] md:h-[200px] bg-[#d5a81f] rounded-full shadow-lg"></div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: premiumEase, delay: 1.8 }}
                            className="relative w-[110px] h-[110px] md:w-[160px] md:h-[160px] bg-white rounded-full flex flex-col items-center justify-center shadow-md md:shadow-xl z-10 cursor-pointer"
                            style={{ willChange: "transform" }}
                        >
                            <div className="absolute -top-7 md:-top-9 w-12 h-12 md:w-15 md:h-15 bg-[#c41e12] rounded-full text-white flex items-center justify-center shadow-md">
                                <ArrowRight />
                            </div>

                            <div className="flex flex-col items-center justify-center leading-none -mt-0 md:mt-5">
                                <span className="text-black font-bold text-base md:text-3xl uppercase tracking-tighter">ORDER</span>
                                <span className="text-black font-bold text-base md:text-3xl -mt-2 uppercase tracking-tighter">PIZZA</span>
                            </div>
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;