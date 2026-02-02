import React from 'react';
import { MapPin, Phone, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';

const FooterBottom = () => {
    return (
        <section className="w-full px-6 md:px-10 py-10 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-10 md:gap-0">

                {/* LEFT SIDE: Address & Contact */}
                <div className="flex flex-col items-start md:items-start gap-4 order-2 md:order-1">
                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="p-3 bg-yellow-300 rounded-full text-[#bd1f17] group-hover:bg-[#bd1f17] group-hover:text-white transition-colors duration-300">
                            <MapPin size={20} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs uppercase font-bold text-[#bd1f17]">Location</span>
                            <p className="text-sm font-bold text-black">123 Pizza Street, New York</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 group cursor-pointer">
                        <div className="p-3 bg-yellow-300 rounded-full text-[#bd1f17] group-hover:bg-[#bd1f17] group-hover:text-white transition-colors duration-300">
                            <Phone size={20} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs uppercase font-bold text-[#bd1f17] tracking-widest">Contact Us</span>
                            <p className="text-sm font-bold text-black">+1 800 222 000</p>
                        </div>
                    </div>
                </div>

                {/* CENTER: Logo & Button */}
                <div className="relative flex items-center justify-center order-1 md:order-2">
                    {/* The Large Background Text */}
                    <div className="shrink-0">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#bd1f17"
                            strokeWidth="1.5"
                            className="w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28 transition-transform duration-700 group-hover:rotate-[360deg]"
                        >
                            <path d="M15 11L15.5 11.5M12 15L12.5 15.5M10 10L10.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" />
                            <path d="M12 3L12 21M3 12L21 12" className='opacity-20' />
                            <path d="M12 3C12 3 16 5 19 8L12 12" stroke="#facc15" strokeWidth="2.5" />
                        </svg>
                    </div>
                    <h1 className="text-[80px] lg:text-[100px] font-black tracking-tighter text-black leading-none italic select-none">
                        K2 <span className="text-yellow-400">Pie</span>
                    </h1>
                </div>

                {/* RIGHT SIDE: Social Icons */}
                <div className="flex flex-col items-center md:items-end gap-4 order-3 md:order-3">
                    <span className="text-xs uppercase font-bold text-[#bd1f17]">Follow Our Taste</span>
                    <div className="flex items-center gap-3">
                        <SocialIcon icon={<Instagram size={20} />} />
                        <SocialIcon icon={<Facebook size={20} />} />
                        <SocialIcon icon={<Twitter size={20} />} />
                        <SocialIcon icon={<Youtube size={20} />} />
                    </div>
                </div>

            </div>
        </section>
    );
};

const SocialIcon = ({ icon }) => (
    <a href="#" className="w-10 h-10 rounded-full bg-yellow-300 flex items-center justify-center text-[#bd1f17] hover:bg-[#bd1f17] hover:text-white hover:-translate-y-1 transition-all duration-300">
        {icon}
    </a>
);

export default FooterBottom;