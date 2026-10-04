'use client'
import { Leaf, ArrowRight, Truck, Tractor } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import HeroImage from "../assets/hero.png"
import Numbers from './numbers'

export default function Home() {
  return (
    <section className='relative overflow-hidden bg-gradient-to-b from-green-50/50 via-white to-white py-12 md:py-20'>
      <div className='max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8'>
        
        {/* Left Content Section */}
        <div className='w-full lg:w-[55%] flex flex-col gap-6 text-left'>
          
          {/* Badge */}
          <div className='inline-flex items-center gap-2 px-3.5 py-1.5 bg-green-100/80 border border-green-200 rounded-full w-fit'>
            <Leaf className='w-4 h-4 text-green-700' />
            <span className='text-xs md:text-sm font-semibold tracking-wide text-green-900'>
              INDIA’S TRUSTED FARM LOGISTICS NETWORK
            </span>
          </div>

          {/* Main Headline */}
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.15]'>
            Move Your Farm Produce <span className='text-green-600'>Smarter</span>
          </h1>

          {/* Description */}
          <p className='text-base md:text-lg text-gray-600 font-normal leading-relaxed max-w-xl'>
            AgroMove connects farmers with verified local transporters—so fresh produce reaches the right market, on time and at a fair price.
          </p>

          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2'>
            <button className='flex items-center justify-center gap-3 px-7 py-4 text-base font-bold text-white bg-green-600 hover:bg-green-700 rounded-2xl shadow-lg shadow-green-600/20 hover:shadow-xl hover:shadow-green-600/30 transition-all duration-200 active:scale-95 group'>
              <Tractor className='w-5 h-5' />
              <span>I am a Farmer</span>
              <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
            </button>

            <button className='flex items-center justify-center gap-3 px-7 py-4 text-base font-bold text-gray-800 bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-2xl shadow-sm transition-all duration-200 active:scale-95 group'>
              <Truck className='w-5 h-5 text-[#b86c0b]' />
              <span>I am a Transporter</span>
            </button>
          </div>

          {/* Trust Highlights / Mini Stats */}
          <div className='grid grid-cols-3 gap-4 pt-6 border-t border-gray-100 mt-2'>
            <div>
              <h3 className='text-xl md:text-2xl font-extrabold text-gray-900'>100%</h3>
              <p className='text-xs md:text-sm text-gray-500 font-medium'>Verified Transporters</p>
            </div>
            <div>
              <h3 className='text-xl md:text-2xl font-extrabold text-gray-900'>0%</h3>
              <p className='text-xs md:text-sm text-gray-500 font-medium'>Hidden Charges</p>
            </div>
            <div>
              <h3 className='text-xl md:text-2xl font-extrabold text-gray-900'>24/7</h3>
              <p className='text-xs md:text-sm text-gray-500 font-medium'>Support Available</p>
            </div>
          </div>

        </div>

        {/* Right Image Section */}
        <div className='w-full lg:w-[45%] flex justify-center'>
          {/* Parent div mein 'relative' properly configured hai */}
          <div className='relative w-full h-[350px] sm:h-[450px] lg:h-[500px] bg-gradient-to-tr from-green-100 to-green-50 rounded-3xl border border-green-200/60 shadow-xl overflow-hidden'>
            
            {/* Next.js Image with fill & sizes prop to fix performance warning */}
            <Image 
              src={HeroImage} 
              alt="AgroMove Farm Logistics" 
              fill 
              sizes="(max-width: 1024px) 100vw, 45vw"
              className='object-cover' 
              priority
            />
            
          </div>
        </div>

      </div>
    </section>
  )
}