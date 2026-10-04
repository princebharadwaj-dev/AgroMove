import React from 'react'
import { ShieldCheck, Leaf, TrendingUp, HeartHandshake } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: <ShieldCheck className='w-6 h-6 text-green-600' />,
      title: 'Trusted & Verified',
      description: 'Every transporter undergoes strict verification to ensure safety, reliability, and security for your farm produce.'
    },
    {
      icon: <TrendingUp className='w-6 h-6 text-[#b86c0b]' />,
      title: 'Fair Pricing',
      description: 'Transparent fare estimation with zero hidden middleman charges, maximizing profits for hardworking farmers.'
    },
    {
      icon: <HeartHandshake className='w-6 h-6 text-green-600' />,
      title: 'Empowering Communities',
      description: 'Bridging the gap between rural agricultural hubs and urban markets to build a sustainable food supply chain.'
    }
  ]

  return (
    <section id="about" className='py-20 bg-white overflow-hidden'>
      <div className='max-w-7xl mx-auto px-6 md:px-12'>
        
        {/* Main Grid: Left Text, Right Highlights */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          
          {/* Left Column: Story & Mission */}
          <div className='flex flex-col gap-6'>
            <div className='inline-flex items-center gap-2 px-3.5 py-1.5 bg-green-100/80 border border-green-200 rounded-full w-fit'>
              <Leaf className='w-4 h-4 text-green-700' />
              <span className='text-xs md:text-sm font-semibold tracking-wide text-green-900'>
                ABOUT AGROMOVE
              </span>
            </div>

            <h2 className='text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.2]'>
              Reinventing How India Moves Its <span className='text-green-600'>Harvest</span>
            </h2>

            <p className='text-base md:text-lg text-gray-600 leading-relaxed'>
              At AgroMove, we understand the challenges farmers face in transporting perishable goods to the right markets on time. Our digital-first logistics platform cuts out complex negotiations and unnecessary delays, connecting you directly with trusted local transporters.
            </p>

            <p className='text-sm md:text-base text-gray-500 leading-relaxed'>
              Whether you are an independent farmer with a seasonal harvest or a transporter looking for steady loads, we make logistics seamless, efficient, and profitable for everyone involved.
            </p>

            {/* Quick Stats/Badge Row */}
            <div className='flex items-center gap-6 pt-4 border-t border-gray-100'>
              <div>
                <h4 className='text-2xl font-black text-gray-950'>100%</h4>
                <p className='text-xs text-gray-500 font-medium'>Transparent Process</p>
              </div>
              <div className='w-px h-10 bg-gray-200'></div>
              <div>
                <h4 className='text-2xl font-black text-gray-950'>Pan-India</h4>
                <p className='text-xs text-gray-500 font-medium'>Logistics Network</p>
              </div>
            </div>
          </div>

          {/* Right Column: Feature Cards */}
          <div className='flex flex-col gap-5'>
            {features.map((item, index) => (
              <div 
                key={index} 
                className='flex items-start gap-5 p-6 md:p-7 rounded-3xl bg-gray-50/70 border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300 group'
              >
                <div className='p-3.5 bg-white rounded-2xl shadow-sm border border-gray-100 group-hover:scale-110 transition-transform flex-shrink-0'>
                  {item.icon}
                </div>
                <div>
                  <h3 className='text-lg font-bold text-gray-900 mb-1.5'>
                    {item.title}
                  </h3>
                  <p className='text-sm text-gray-600 leading-relaxed'>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}