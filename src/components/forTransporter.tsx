import React from 'react'
import { Truck, ShieldCheck, Banknote, CalendarCheck, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function ForTransporters() {
  const benefits = [
    {
      title: 'Consistent Load Availability',
      description: 'Never run empty return trips. Get regular farm loads directly from verified local farmers.'
    },
    {
      title: 'Guaranteed Timely Payments',
      description: 'Experience secure payment processing with zero hassle upon successful delivery.'
    },
    {
      title: 'Flexible Route Selection',
      description: 'Choose loads that fit your vehicle capacity, route preferences, and schedule.'
    },
    {
      title: 'Grow Your Logistics Business',
      description: 'Expand your client network and build a trusted reputation across agricultural markets.'
    }
  ]

  return (
    <section id="transporters" className='py-20 bg-white'>
      <div className='max-w-7xl mx-auto px-6 md:px-12'>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          
          {/* Left Side: Visual Card Box */}
          <div className='order-2 lg:order-1 relative'>
            <div className='p-8 md:p-10 bg-gray-900 text-white rounded-3xl shadow-xl flex flex-col gap-6 relative overflow-hidden border border-gray-800'>
              <div className='absolute -left-10 -bottom-10 w-60 h-60 bg-amber-600/20 rounded-full blur-2xl pointer-events-none'></div>
              
              <h3 className='text-2xl md:text-3xl font-extrabold tracking-tight'>
                Got trucks ready for deployment?
              </h3>
              
              <p className='text-gray-300 text-sm md:text-base leading-relaxed'>
                Maximize your vehicle utilization and boost your monthly earnings by partnering with AgroMove's verified farm network.
              </p>

              <div className='space-y-4 pt-2 border-t border-gray-800'>
                <div className='flex items-center gap-3'>
                  <div className='p-2 bg-gray-800 rounded-xl text-[#b86c0b] font-bold'>01</div>
                  <p className='text-sm font-medium'>Register your transport vehicle & documents</p>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='p-2 bg-gray-800 rounded-xl text-[#b86c0b] font-bold'>02</div>
                  <p className='text-sm font-medium'>Browse available farm loads in your area</p>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='p-2 bg-gray-800 rounded-xl text-[#b86c0b] font-bold'>03</div>
                  <p className='text-sm font-medium'>Accept loads & earn guaranteed payouts</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Info & Benefits */}
          <div className='order-1 lg:order-2 flex flex-col gap-6'>
            <div className='inline-flex items-center gap-2 px-3.5 py-1.5 bg-amber-50 text-[#b86c0b] border border-amber-200 text-xs font-bold tracking-wider uppercase rounded-full w-fit'>
              <Truck className='w-4 h-4' />
              <span>For Transporters</span>
            </div>

            <h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.2]'>
              Keep Your Wheels Turning with <span className='text-[#b86c0b]'>Steady Farm Loads</span>
            </h2>

            <p className='text-base md:text-lg text-gray-600 leading-relaxed'>
              Tired of idle trucks and payment follow-ups? AgroMove connects truck owners directly with agricultural producers for reliable, high-demand logistics jobs.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2'>
              {benefits.map((item, index) => (
                <div key={index} className='p-5 bg-gray-50/70 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-2'>
                  <div className='flex items-center gap-2 text-gray-900 font-bold text-base'>
                    <CheckCircle2 className='w-5 h-5 text-[#b86c0b] flex-shrink-0' />
                    {item.title}
                  </div>
                  <p className='text-xs md:text-sm text-gray-600 leading-relaxed'>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className='pt-4'>
              <button className='flex items-center gap-3 px-8 py-4 text-base font-bold text-white bg-[#b86c0b] hover:bg-[#a15e0a] rounded-2xl shadow-lg shadow-[#b86c0b]/20 transition-all duration-200 active:scale-95 group'>
                <span>Join as a Transporter</span>
                <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}