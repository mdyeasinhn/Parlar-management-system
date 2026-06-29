'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Our Portfolio', href: '/portfolio' },
  { name: 'Our Team', href: '/team' },
  { name: 'Contact Us', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  
  // Mock user state - replace with your actual auth logic
  const [user, setUser] = useState(null)
  // Example user object:
  // const [user, setUser] = useState({ 
  //   name: 'John Doe', 
  //   avatar: '/images/avatar.jpg' 
  // })

  const logout = () => {
    setUser(null)
    // Add your logout logic here
  }

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* LOGO SECTION */}
          <div className="flex items-center space-x-3 cursor-pointer">
            <svg
              className="w-10 h-10 text-[#F63E7B]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M12 2c1-1.5 3-1.5 4 0s.5 3.5-1.5 4.5" />
              <path d="M12 2c-1-1.5-3-1.5-4 0s-.5 3.5 1.5 4.5" />
              <path d="M12 22c1 1.5 3 1.5 4 0s.5-3.5-1.5-4.5" />
              <path d="M12 22c-1 1.5-3 1.5-4 0s-.5-3.5 1.5-4.5" />
              <path d="M22 12c1.5 1 1.5 3 0 4s-3.5.5-4.5-1.5" />
              <path d="M22 12c1.5-1 1.5-3 0-4s-3.5-.5-4.5 1.5" />
              <path d="M2 12c-1.5 1-1.5 3 0 4s3.5.5 4.5-1.5" />
              <path d="M2 12c-1.5-1-1.5-3 0-4s3.5-.5 4.5 1.5" />
            </svg>
            <div className="flex flex-col leading-tight">
              <span className="font-serif font-black text-xl text-[#1F1F1F]">Jerin&apos;s</span>
              <span className="font-serif font-normal text-sm text-[#4A4A4A] tracking-wide -mt-1">Parlour</span>
            </div>
          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium px-2 py-1 rounded hover:bg-orange-50 transition-colors ${
                  pathname === link.href ? 'text-[#F63E7B]' : 'text-[#4A4A4A]'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {!user ? (
              <Link href="/login">
                <button className="bg-[#F63E7B] text-white px-9 py-2.5 rounded-lg font-medium text-sm hover:bg-[#e0306c] transition-all transform active:scale-95 shadow-sm">
                  Login
                </button>
              </Link>
            ) : (
              <div className="flex items-center gap-3">
                <div className="relative h-9 w-9 rounded-full overflow-hidden">
                  <Image 
                    src={user.avatar} 
                    alt="avatar" 
                    fill
                    sizes="36px"
                    className="object-cover" 
                  />
                </div>
                <button onClick={logout} className="text-sm text-gray-600 hover:underline">
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1F1F1F] focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* MOBILE DROP-DOWN MENU */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 flex flex-col border-t border-gray-100 pt-4 animate-in slide-in-from-top duration-200">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium px-2 py-1 rounded hover:bg-orange-50 transition-colors ${
                  pathname === link.href ? 'text-[#F63E7B]' : 'text-[#4A4A4A]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/login">
              <button className="bg-[#F63E7B] text-white px-9 py-2.5 rounded-lg font-medium text-sm hover:bg-[#e0306c] transition-all transform active:scale-95 shadow-sm">
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}