import React, { useState, useEffect } from 'react';
import { PhoneCall, ShoppingBag, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = ['Home', 'About', 'Menu', 'Chefs', 'Franchise', 'Contact'];
    const navLinksLeft = ['Home', 'About', 'Menu'];
    const navLinksRight = ['Chefs', 'Franchise', 'Contact'];

    // Handle Body Scroll Lock
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const Logo = () => (
        <div className="flex items-center gap-2 group cursor-pointer">
            <div className="relative">
                <svg width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="transition-transform duration-500 group-hover:rotate-12 lg:w-10 lg:h-10">
                    <path d="M15 11L15.5 11.5M12 15L12.5 15.5M10 10L10.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" />
                    <path d="M12 3L12 21M3 12L21 12" className='opacity-30' />
                    <path d="M12 3C12 3 16 5 19 8L12 12" stroke="yellow" strokeWidth="2" />
                </svg>
            </div>
            <h1 className="text-2xl lg:text-4xl font-black tracking-tighter italic text-white">
                K2<span className="text-yellow-400"> Pie</span>
            </h1>
        </div>
    );

    return (
        <>
            <nav className="sticky top-0 z-50 flex items-center justify-between px-4 md:px-10 py-4 bg-[#911a1c] text-white shadow-md border-b border-white/5">

                {/* LEFT SIDE: Phone (Desktop) / Order Button (Mobile) */}
                <div className="flex items-center">
                    {/* Desktop Phone Info */}
                    <div className="hidden lg:flex items-center gap-3 group cursor-pointer">
                        <div className="bg-[#701416] p-2.5 rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#bc2528]">
                            <PhoneCall size={18} fill="currentColor" />
                        </div>
                        <span className="font-semibold tracking-tighter text-lg lg:text-xl">1 800 222 000</span>
                    </div>

                    {/* Mobile Order Button */}
                    <button className="lg:hidden flex items-center gap-2 bg-[#701416] hover:bg-white hover:text-[#701416] px-4 py-2 rounded-full font-black text-xs tracking-widest transition-all duration-300 shadow-inner">
                        ORDER
                        <ShoppingBag size={14} />
                    </button>
                </div>

                {/* CENTER: Logo (Mobile) or Desktop Menu */}
                <div className="lg:hidden">
                    <Logo />
                </div>

                <div className="hidden lg:flex items-center gap-4">
                    <div className="flex items-center gap-8">
                        {navLinksLeft.map((item) => (
                            <NavLink key={item} item={item} />
                        ))}
                    </div>
                    <div className="mx-4">
                        <Logo />
                    </div>
                    <div className="flex items-center gap-8">
                        {navLinksRight.map((item) => (
                            <NavLink key={item} item={item} />
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDE: Order (Desktop) / Menu Icon (Mobile) */}
                <div className="flex items-center">
                    <button className="hidden lg:flex items-center gap-3 bg-[#701416] hover:bg-white hover:text-[#701416] px-6 py-3 rounded-full font-black text-sm tracking-widest transition-all duration-300 shadow-inner cursor-pointer">
                        ORDER ONLINE
                        <ShoppingBag size={18} />
                    </button>

                    {/* Hamburger Menu Icon */}
                    <button
                        onClick={() => setIsOpen(true)}
                        className="lg:hidden p-2 ml-2 hover:bg-[#701416] rounded-lg transition-colors"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </nav>

            {/* MOBILE SIDEBAR OVERLAY */}
            <div
                className={`fixed inset-0 z-[60] transition-all duration-500 lg:hidden ${isOpen ? "visible" : "invisible"
                    }`}
            >
                {/* Backdrop Blur */}
                <div
                    className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"
                        }`}
                    onClick={() => setIsOpen(false)}
                />

                {/* Sidebar Content */}
                <div
                    className={`absolute right-0 top-0 h-full w-[80%] bg-[#911a1c] p-6 shadow-2xl transition-transform duration-500 ease-in-out flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-10">
                        <Logo />
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 bg-[#701416] rounded-full text-white"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col gap-6">
                        {navLinks.map((item) => (
                            <div
                                key={item}
                                onClick={() => setIsOpen(false)}
                                className="border-b border-white/10 pb-4"
                            >
                                <NavLink item={item} mobile />
                            </div>
                        ))}
                    </div>

                    {/* Footer Contact Info */}
                    <div className="mt-auto bg-[#701416] p-5 rounded-2xl flex items-center gap-4">
                        <div className="bg-[#911a1c] p-3 rounded-full">
                            <PhoneCall size={20} fill="currentColor" className='text-yellow-400' />
                        </div>
                        <div>
                            <p className="text-xs text-white uppercase font-bold tracking-widest">Call for delivery</p>
                            <p className="text-lg text-yellow-400 font-bold">1 800 222 000</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const NavLink = ({ item, mobile }) => (
    <p className={`relative cursor-pointer group font-bold uppercase transition-colors duration-300 
        ${mobile ? "text-lg text-white" : "text-sm text-white hover:text-yellow-400"}
    `}>
        {item}
        {!mobile && (
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
        )}
    </p>
);

export default Navbar;