import React from 'react'
import { ClipboardEdit, UserCheck, Truck } from 'lucide-react'

interface Step {
  stepNumber: string
  title: string
  description: string
  icon: React.ReactNode
}

export default function Works() {
  const steps: Step[] = [
    {
      stepNumber: '01',
      title: 'Post Your Load',
      description: 'Farmers enter their produce details, pickup location, destination, and expected delivery date in minutes.',
      icon: <ClipboardEdit className='w-6 h-6 text-green-600' />,
    },
    {
      stepNumber: '02',
      title: 'Match with Transporters',
      description: 'Get instant matches with verified local transporters offering transparent pricing with zero hidden costs.',
      icon: <UserCheck className='w-6 h-6 text-[#b86c0b]' />,
    },
    {
      stepNumber: '03',
      title: 'Move & Track',
      description: 'Watch your fresh produce get picked up and safely delivered to the right market, right on time.',
      icon: <Truck className='w-6 h-6 text-green-600' />,
    },
  ]

  return (
    <section id="how-it-works" className='py-20 bg-gray-50/50'>
      <div className='max-w-7xl mx-auto px-6 md:px-12'>
        
        {/* Section Header */}
        <div className='text-center max-w-2xl mx-auto mb-16'>
          <span className='px-3.5 py-1.5 bg-green-100 text-green-800 text-xs font-bold tracking-wider uppercase rounded-full'>
            Simple Process
          </span>
          <h2 className='text-3xl md:text-4xl font-black text-gray-900 mt-4 tracking-tight'>
            From Farm to Market in 3 Easy Steps
          </h2>
          <p className='text-base md:text-lg text-gray-600 mt-3 font-normal'>
            No complicated calls or negotiations. Just post, match, and move.
          </p>
        </div>

        {/* Steps Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {steps.map((item, index) => (
            <div 
              key={index} 
              className='relative bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between'
            >
              <div>
                {/* Top Row: Icon & Step Number */}
                <div className='flex items-center justify-between mb-6'>
                  <div className='p-3.5 bg-green-50 rounded-2xl group-hover:bg-green-100 transition-colors'>
                    {item.icon}
                  </div>
                  <span className='text-3xl font-black text-gray-200 group-hover:text-green-600/30 transition-colors'>
                    {item.stepNumber}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className='text-xl font-bold text-gray-900 mb-3'>
                  {item.title}
                </h3>
                <p className='text-sm text-gray-600 leading-relaxed'>
                  {item.description}
                </p>
              </div>

              {/* Bottom Accent line */}
              <div className='w-full h-1 bg-gray-100 rounded-full mt-6 overflow-hidden'>
                <div className='w-0 h-full bg-green-600 group-hover:w-full transition-all duration-500'></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}