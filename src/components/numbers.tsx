import React from 'react'
import { Users, Truck, PackageCheck, Star } from 'lucide-react'

interface StatItem {
  icon: React.ReactNode
  value: string
  label: string
}

export default function Numbers() {
  const stats: StatItem[] = [
    {
      icon: <Users className='w-6 h-6 text-green-600' />,
      value: '12,000+',
      label: 'Registered Farmers',
    },
    {
      icon: <Truck className='w-6 h-6 text-[#b86c0b]' />,
      value: '4,500+',
      label: 'Verified Transporters',
    },
    {
      icon: <PackageCheck className='w-6 h-6 text-green-600' />,
      value: '28,000+',
      label: 'Successful Deliveries',
    },
    {
      icon: <Star className='w-6 h-6 text-amber-500 fill-amber-500' />,
      value: '4.8/5',
      label: 'Average Rating',
    },
  ]

  return (
    <section className='bg-white py-12 border-y border-gray-100 shadow-sm'>
      <div className='max-w-7xl mx-auto px-6 md:px-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className='flex items-center gap-4 p-6 rounded-2xl bg-gray-50/70 border border-gray-100 hover:bg-white hover:shadow-md transition-all duration-300 group'
            >
              {/* Icon Container */}
              <div className='p-3.5 bg-white rounded-xl shadow-sm border border-gray-100 group-hover:scale-110 transition-transform'>
                {stat.icon}
              </div>

              {/* Text Info */}
              <div>
                <h3 className='text-2xl md:text-3xl font-black text-gray-900 tracking-tight'>
                  {stat.value}
                </h3>
                <p className='text-sm text-gray-600 font-medium mt-0.5'>
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}