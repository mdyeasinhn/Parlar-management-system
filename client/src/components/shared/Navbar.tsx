"use client";
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#FFF8F6] border-t-4 border-[#1CA1F2] px-6 py-4 md:px-12 lg:px-24 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* LOGO SECTION */}
        <div className="flex items-center space-x-3 cursor-pointer">
          {/* Custom SVG Flower Logo matching the image */}
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
          
          {/* Brand Name */}
          <div className="flex flex-col leading-tight">
            <span className="font-serif font-black text-xl text-[#1F1F1F]">Jerin's</span>
            <span className="font-serif font-normal text-sm text-[#4A4A4A] tracking-wide -mt-1">Parlour</span>
          </div>
        </div>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
          <a href="#home" className="text-sm font-semibold text-[#1F1F1F] hover:text-[#F63E7B] transition-colors">Home</a>
          <a href="#portfolio" className="text-sm font-medium text-[#4A4A4A] hover:text-[#F63E7B] transition-colors">Our Portfolio</a>
          <a href="#team" className="text-sm font-medium text-[#4A4A4A] hover:text-[#F63E7B] transition-colors">Our Team</a>
          <a href="#contact" className="text-sm font-medium text-[#4A4A4A] hover:text-[#F63E7B] transition-colors">Contact Us</a>
          
          <button className="bg-[#F63E7B] text-white px-9 py-2.5 rounded-lg font-medium text-sm hover:bg-[#e0306c] transition-all transform active:scale-95 shadow-sm">
            Login
          </button>
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
        <div className="md:hidden mt-4 pb-4 space-y-3 flex flex-col border-t border-gray-100 pt-4 animate-fadeIn">
          <a href="#home" className="text-sm font-semibold text-[#1F1F1F] px-2 py-1 rounded hover:bg-orange-50">Home</a>
          <a href="#portfolio" className="text-sm font-medium text-[#4A4A4A] px-2 py-1 rounded hover:bg-orange-50">Our Portfolio</a>
          <a href="#team" className="text-sm font-medium text-[#4A4A4A] px-2 py-1 rounded hover:bg-orange-50">Our Team</a>
          <a href="#contact" className="text-sm font-medium text-[#4A4A4A] px-2 py-1 rounded hover:bg-orange-50">Contact Us</a>
          <button className="w-full bg-[#F63E7B] text-white py-2.5 rounded-lg font-medium text-sm hover:bg-[#e0306c] transition-colors mt-2">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;