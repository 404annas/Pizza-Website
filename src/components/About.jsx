import React from 'react';
import { Truck, ShoppingBag, Clock, PhoneOutgoing, Award, Package } from 'lucide-react';

export default function About() {
  const features = [
    {
      title: "FAST DELIVERY",
      desc: "Within 30 minutes",
      icon: <Package className="w-8 h-8 text-[#1a1a1a] stroke-[1.5]" />
    },
    {
      title: "PICKUP DELIVERY",
      desc: "Grab your food order",
      icon: <ShoppingBag className="w-8 h-8 text-[#1a1a1a] stroke-[1.5]" />
    },
    {
      title: "ABSOLUTE DINING",
      desc: "Best buffet restaurant",
      icon: <Award className="w-8 h-8 text-[#1a1a1a] stroke-[1.5]" />
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative px-6 md:px-16 py-10 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Left Side - Pizza Image with LUS text */}
          <div className="relative w-full flex justify-start items-center -translate-x-14">
            {/* Pizza Image */}
            <img
              loading='lazy'
              src="/pizza.jpg"
              alt="Italian Pizza"
              className="w-full scale-120 h-full object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col justify-center relative">
            {/* Red line and subtitle */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-0.5 bg-[#bd1f17]"></div>
              <p className="text-[#bd1f17] font-semibold text-base tracking-tight">
                BEST ITALIAN FOOD FOR YOUR FAMILY
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-black leading-none tracking-tighter z-10">
              THE AMAZING PASTA
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-none tracking-tighter z-10">
              AND PIZZA PARLOR.
            </h1>

            {/* Tomato Image */}
            <div className="absolute -top-20 -right-10 md:-right-50 z-0 hidden md:block">
              <img
                loading='lazy'
                src="/tomato.webp"
                alt="Fresh Tomato"
                className="w-80 h-auto transform -scale-x-100 shadow-none"
              />
            </div>

            {/* Description */}
            <p className="text-gray-500 text-base leading-normal mb-8 max-w-md">
              All about quality you can trust. As one of the original founding pizza brands and the 3rd largest pizza chain, our sole mission is making the freshest, tastiest.
            </p>

            {/* Button and Phone */}
            <div className="flex items-center gap-8 mb-8">
              <button className="relative overflow-hidden bg-[#232323] border border-[#232323] text-white tracking-tight px-6 py-3 font-semibold text-sm group cursor-pointer">

                {/* Sliding white background */}
                <span className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>

                {/* Button text */}
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#232323]">
                  ABOUT RESTAURANT
                </span>
              </button>
              <div className="flex items-center gap-2">
                <span className="text-[#bd1f17]"><PhoneOutgoing size={20} /></span>
                <p className="text-black font-semibold text-lg tracking-tighter">1 800 222 000</p>
              </div>
            </div>

            {/* Red dot */}
            <div className="w-3 h-3 bg-red-600 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 md:px-16 pb-10 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-10">
          {features.map((item, index) => (
            <div key={index} className="flex items-center gap-6 group">

              {/* 1. Circular Icon Container with Soft Shadow */}
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white shadow-lg flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:-translate-y-1">
                {item.icon}
              </div>

              {/* 2. Text Content Left-Aligned */}
              <div className="flex flex-col text-left">
                <h3 className="text-[#1a1a1a] font-semibold text-base md:text-lg tracking-tighter uppercase scale-y-110 origin-left leading-none mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm font-medium">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
