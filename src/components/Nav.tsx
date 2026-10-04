'use client'
import React, { useState } from 'react'
import { Leaf, Menu, X } from 'lucide-react'
import Link from 'next/link'

interface NavLink {
  name: string
  href: string
}

export default function Nav() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const navLinks: NavLink[] = [
    { name: 'Home', href: '/' },
    { name: 'How it works', href: '#how-it-works' },
    { name: 'For Farmers', href: '#farmers' },
    { name: 'For Transporters', href: '#transporters' },
    { name: 'About', href: '#about' },
  ]

  return (
    <nav className='w-full h-[75px] bg-white px-6 md:px-12 flex items-center justify-between shadow-sm border-b border-gray-100 sticky top-0 z-50'>
      
      {/* Logo Section */}
      <Link href="/" className='flex items-center gap-2 group cursor-pointer'>
        <div className='p-2 bg-green-50 rounded-xl group-hover:bg-green-100 transition-colors'>
          <Leaf className='w-6 h-6 text-green-600' />
        </div>
        <h2 className='text-xl font-extrabold tracking-tight text-gray-900'>
          Agro<span className='text-[#b86c0b]'>Move</span>
        </h2>
      </Link>

      {/* Desktop Navigation Links */}
      <div className='hidden md:block'>
        <ul className='flex items-center gap-8 font-medium text-gray-600 text-sm'>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href} 
                className='hover:text-green-600 transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-green-600 hover:after:w-full after:transition-all'
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Action Buttons */}
      <div className='hidden md:flex items-center gap-4'>
        <button className='px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-green-600 transition-colors'>
          Login
        </button>
        <button className='px-5 py-2.5 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 rounded-xl shadow-sm hover:shadow transition-all duration-200 active:scale-95'>
          Signup
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className='md:hidden flex items-center'>
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className='p-2 text-gray-700 hover:text-green-600 focus:outline-none transition-colors'
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className='absolute top-[75px] left-0 w-full bg-white border-b border-gray-100 shadow-lg py-6 px-6 flex flex-col gap-5 md:hidden animate-in fade-in slide-in-from-top-2'>
          <ul className='flex flex-col gap-4 font-medium text-gray-700'>
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className='block py-1 hover:text-green-600 transition-colors'
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className='flex flex-col gap-3 pt-4 border-t border-gray-100'>
            <button className='w-full py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 rounded-xl transition-colors border border-gray-200'>
              Login
            </button>
            <button className='w-full py-3 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 rounded-xl shadow-sm transition-all'>
              Signup
            </button>
          </div>
        </div>
      )}

    </nav>
  )
}