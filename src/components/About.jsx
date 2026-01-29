import React from 'react';
import { Truck, ShoppingBag, Clock } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative px-6 md:px-16 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          
          {/* Left Side - Pizza Image with LUS text */}
          <div className="relative w-full flex justify-start items-center -translate-x-25">
            
            {/* LUS Background Text */}
            <div className="absolute -left-24 md:-left-32 top-1/2 -translate-y-1/2 text-yellow-400 font-black opacity-20 text-[14rem] md:text-[16rem] flex -z-10">
              <span>L</span>
              <span>US</span>
            </div>

            {/* Pizza Image */}
            <img
              src="/pizza.jpg"
              alt="Italian Pizza"
              className=" h-auto object-contain -translate-x- md:-translate-x-24"
            />
          </div>

          {/* Right Side - Content */}
          <div className="flex flex-col justify-center mt-12 md:mt-0 relative">
            {/* Red line and subtitle */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-1 bg-red-600"></div>
              <p className="text-red-600 font-semibold text-sm tracking-wider">
                BEST ITALIAN FOOD FOR YOUR FAMILY
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl font-black text-black mb-6 leading-tight">
              THE AMAZING PASTA AND PIZZA PARLOR
            </h1>

            {/* Tomato Image */}
            <div className="absolute -top-4 -right-10 md:right-0 hidden md:block">
              <img
                src="/tomato.webp"
                alt="Fresh Tomato"
                className="w-32 h-auto"
              />
            </div>

            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-md">
              All about quality you can trust. As one of the original founding pizza brands and the 3rd largest pizza chain, our sole mission is making the freshest, tastiest.
            </p>

            {/* Button and Phone */}
            <div className="flex items-center gap-8 mb-8">
              <button className="bg-black text-white px-8 py-3 font-bold text-sm hover:bg-gray-800 transition">
                ABOUT RESTAURANT
              </button>
              <div className="flex items-center gap-2">
                <span className="text-red-600 text-2xl">📞</span>
                <p className="text-black font-bold text-lg">1 800 222 000</p>
              </div>
            </div>

            {/* Red dot */}
            <div className="w-3 h-3 bg-red-600 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 md:px-16 py-16 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Fast Delivery */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 p-4 bg-white rounded-lg shadow-md">
              <Truck className="w-12 h-12 text-gray-800" />
            </div>
            <h3 className="text-lg font-black text-black mb-2 tracking-wide">
              FAST DELIVERY
            </h3>
            <p className="text-gray-600 font-medium">Within 30 minutes</p>
          </div>

          {/* Pickup Delivery */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 p-4 bg-white rounded-lg shadow-md">
              <ShoppingBag className="w-12 h-12 text-gray-800" />
            </div>
            <h3 className="text-lg font-black text-black mb-2 tracking-wide">
              PICKUP DELIVERY
            </h3>
            <p className="text-gray-600 font-medium">Grab your food order</p>
          </div>

          {/* Absolute Dining */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 p-4 bg-white rounded-lg shadow-md">
              <Clock className="w-12 h-12 text-gray-800" />
            </div>
            <h3 className="text-lg font-black text-black mb-2 tracking-wide">
              ABSOLUTE DINING
            </h3>
            <p className="text-gray-600 font-medium">Best buffet restaurant</p>
          </div>

        </div>
      </section>

    </div>
  );
}
