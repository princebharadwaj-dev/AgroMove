'use client'
import React from 'react'
import Link from 'next/link'
import { Leaf, Mail, Phone, MapPin, ArrowRight} from 'lucide-react'

export default function Footer() {
  return (
    <footer className='bg-gray-950 text-gray-300 pt-16 pb-12 border-t border-gray-800'>
      <div className='max-w-7xl mx-auto px-6 md:px-12'>
        
        {/* Top Grid Section */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-800'>
          
          {/* Column 1 & 2: Brand Info */}
          <div className='lg:col-span-2 flex flex-col gap-6'>
            <Link href="/" className='flex items-center gap-2 group cursor-pointer w-fit'>
              <div className='p-2 bg-green-950 border border-green-800 rounded-xl'>
                <Leaf className='w-6 h-6 text-green-500' />
              </div>
              <h2 className='text-2xl font-extrabold tracking-tight text-white'>
                Agro<span className='text-[#b86c0b]'>Move</span>
              </h2>
            </Link>

            <p className='text-sm text-gray-400 leading-relaxed max-w-sm'>
              India’s trusted farm logistics network. Connecting farmers directly with verified local transporters for seamless, transparent, and timely agricultural deliveries.
            </p>

            {/* Newsletter Input */}
            <div className='flex items-center gap-2 max-w-sm pt-2'>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className='w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition-colors'
              />
              <button className='px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold transition-colors flex items-center justify-center'>
                <ArrowRight className='w-5 h-5' />
              </button>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className='flex flex-col gap-4'>
            <h4 className='text-white font-bold text-base tracking-wide'>Quick Links</h4>
            <ul className='flex flex-col gap-3 text-sm'>
              <li>
                <Link href="/" className='hover:text-green-500 transition-colors'>Home</Link>
              </li>
              <li>
                <Link href="#how-it-works" className='hover:text-green-500 transition-colors'>How It Works</Link>
              </li>
              <li>
                <Link href="#about" className='hover:text-green-500 transition-colors'>About Us</Link>
              </li>
              <li>
                <Link href="#farmers" className='hover:text-green-500 transition-colors'>For Farmers</Link>
              </li>
              <li>
                <Link href="#transporters" className='hover:text-green-500 transition-colors'>For Transporters</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal & Support */}
          <div className='flex flex-col gap-4'>
            <h4 className='text-white font-bold text-base tracking-wide'>Support & Legal</h4>
            <ul className='flex flex-col gap-3 text-sm'>
              <li>
                <Link href="/help" className='hover:text-green-500 transition-colors'>Help Center</Link>
              </li>
              <li>
                <Link href="/terms" className='hover:text-green-500 transition-colors'>Terms of Service</Link>
              </li>
              <li>
                <Link href="/privacy" className='hover:text-green-500 transition-colors'>Privacy Policy</Link>
              </li>
              <li>
                <Link href="/safety" className='hover:text-green-500 transition-colors'>Safety Guidelines</Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Info */}
          <div className='flex flex-col gap-4'>
            <h4 className='text-white font-bold text-base tracking-wide'>Contact Us</h4>
            <ul className='flex flex-col gap-3.5 text-sm text-gray-400'>
              <li className='flex items-start gap-3'>
                <MapPin className='w-5 h-5 text-green-500 flex-shrink-0 mt-0.5' />
                <span>AgroMove Logistics Hub, New Delhi, India</span>
              </li>
              <li className='flex items-center gap-3'>
                <Phone className='w-5 h-5 text-green-500 flex-shrink-0' />
                <span>+91 (987) 654-3210</span>
              </li>
              <li className='flex items-center gap-3'>
                <Mail className='w-5 h-5 text-green-500 flex-shrink-0' />
                <span>support@agromove.in</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className='pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500'>
          <p>© {new Date().getFullYear()} AgroMove Technologies Pvt. Ltd. All rights reserved.</p>
          
        
          </div>
        </div>


    </footer>
  )
}