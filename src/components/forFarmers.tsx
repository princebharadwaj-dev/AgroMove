import React from 'react'
import { Tractor, ShieldCheck, Clock, Coins, CheckCircle2, ArrowRight } from 'lucide-react'

export default function ForFarmers() {
  const benefits = [
    {
      title: 'Zero Middlemen, Better Profits',
      description: 'Connect directly with reliable transporters and keep 100% of your hard-earned revenue.'
    },
    {
      title: 'Instant Transporter Matching',
      description: 'Find verified trucks in your local area within minutes without endless phone calls or bargaining.'
    },
    {
      title: 'Safe & Timely Delivery',
      description: 'Ensure your perishable produce reaches mandis or markets fresh and right on schedule.'
    },
    {
      title: 'Transparent Pricing',
      description: 'No hidden fees or surprise charges. Know your logistics cost upfront before booking.'
    }
  ]

  return (
    <section id="farmers" className='py-20 bg-gradient-to-b from-white to-green-50/40'>
      <div className='max-w-7xl mx-auto px-6 md:px-12'>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          
          {/* Left Side: Info & Benefits */}
          <div className='flex flex-col gap-6'>
            <div className='inline-flex items-center gap-2 px-3.5 py-1.5 bg-green-100 text-green-800 text-xs font-bold tracking-wider uppercase rounded-full w-fit'>
              <Tractor className='w-4 h-4' />
              <span>For Farmers</span>
            </div>

            <h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.2]'>
              Maximize Your Harvest Earnings with <span className='text-green-600'>Smart Logistics</span>
            </h2>

            <p className='text-base md:text-lg text-gray-600 leading-relaxed'>
              Stop stressing over transport delays and unfair freight pricing. AgroMove empowers you to move your crops effortlessly from farm gates to destination markets.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2'>
              {benefits.map((item, index) => (
                <div key={index} className='p-5 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-2'>
                  <div className='flex items-center gap-2 text-green-700 font-bold text-base'>
                    <CheckCircle2 className='w-5 h-5 text-green-600 flex-shrink-0' />
                    {item.title}
                  </div>
                  <p className='text-xs md:text-sm text-gray-600 leading-relaxed'>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className='pt-4'>
              <button className='flex items-center gap-3 px-8 py-4 text-base font-bold text-white bg-green-600 hover:bg-green-700 rounded-2xl shadow-lg shadow-green-600/20 transition-all duration-200 active:scale-95 group'>
                <span>Get Started as a Farmer</span>
                <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
              </button>
            </div>
          </div>

          {/* Right Side: Visual Card Box */}
          <div className='relative'>
            <div className='p-8 md:p-10 bg-green-900 text-white rounded-3xl shadow-xl flex flex-col gap-6 relative overflow-hidden'>
              <div className='absolute -right-10 -bottom-10 w-60 h-60 bg-green-800/50 rounded-full blur-2xl pointer-events-none'></div>
              
              <h3 className='text-2xl md:text-3xl font-extrabold tracking-tight'>
                Ready to transport your next harvest?
              </h3>
              
              <p className='text-green-100 text-sm md:text-base leading-relaxed'>
                Join thousands of Indian farmers who trust AgroMove for secure, timely, and budget-friendly agricultural transport.
              </p>

              <div className='space-y-4 pt-2 border-t border-green-800'>
                <div className='flex items-center gap-3'>
                  <div className='p-2 bg-green-800 rounded-xl text-green-400 font-bold'>01</div>
                  <p className='text-sm font-medium'>Create your free farmer profile</p>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='p-2 bg-green-800 rounded-xl text-green-400 font-bold'>02</div>
                  <p className='text-sm font-medium'>Enter pickup location & load details</p>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='p-2 bg-green-800 rounded-xl text-green-400 font-bold'>03</div>
                  <p className='text-sm font-medium'>Get matched with verified trucks instantly</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}