import React from 'react';
import { Phone, PhoneCall, ShoppingBag } from 'lucide-react'; // Make sure to install lucide-react

const Navbar = () => {
    const navLinksLeft = ['Home', 'About', 'Menu'];
    const navLinksRight = ['Chefs', 'Franchise', 'Contact'];

    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between px-10 py-4 bg-[#911a1c] text-white shadow-md border-b border-white/5">

            {/* LEFT SIDE: Phone Info */}
            <div className="flex items-center gap-3 group cursor-pointer">
                <div className="bg-[#701416] p-2.5 rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#bc2528]">
                    <PhoneCall size={18} fill="currentColor" />
                </div>
                <span className="font-semibold tracking-tighter text-lg lg:text-xl">1 800 222 000</span>
            </div>

            {/* CENTER: Links + Logo + Links */}
            <div className="hidden lg:flex items-center gap-4">
                {/* Left Menu */}
                <div className="flex items-center gap-8">
                    {navLinksLeft.map((item) => (
                        <NavLink key={item} item={item} />
                    ))}
                </div>

                {/* Logo */}
                <div className="flex items-center gap-2 mx-4 group cursor-pointer">
                    <div className="relative">
                        {/* Simple SVG Pizza Logo to match the image */}
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform duration-500 group-hover:rotate-12">
                            <path d="M15 11L15.5 11.5M12 15L12.5 15.5M10 10L10.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" />
                            <path d="M12 3L12 21M3 12L21 12" className='opacity-30' />
                            <path d="M12 3C12 3 16 5 19 8L12 12" stroke="yellow" strokeWidth="2" />
                        </svg>
                    </div>
                    <h1 className="text-4xl font-black tracking-tighter italic">
                        K2<span className="text-yellow-400"> Pie</span>
                    </h1>
                </div>

                {/* Right Menu */}
                <div className="flex items-center gap-8">
                    {navLinksRight.map((item) => (
                        <NavLink key={item} item={item} />
                    ))}
                </div>
            </div>

            {/* RIGHT SIDE: Order Button */}
            <button className="flex items-center gap-3 bg-[#701416] hover:bg-white hover:text-[#701416] px-6 py-3 rounded-full font-black text-sm tracking-widest transition-all duration-300 shadow-inner cursor-pointer">
                ORDER ONLINE
                <ShoppingBag size={18} />
            </button>
        </nav>
    );
};

const NavLink = ({ item }) => (
    <p className="relative cursor-pointer group font-medium text-sm uppercase text-white hover:text-yellow-400 transition-colors duration-300">
        {item}
        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
    </p>
);

export default Navbar;