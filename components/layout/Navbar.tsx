// components/layout/Navbar.tsx
'use client';

import Link from 'next/link';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-dark-bg text-black sticky top-0 z-50 border-b border-gold/30">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-11 h-11 bg-gold rounded-full flex items-center justify-center text-dark-bg font-bold text-3xl">E</div>
          <div>
            <span className="text-2xl font-serif tracking-widest">Skill Edge</span>
            <p className="text-[10px] text-gold -mt-1">EMBROIDERY</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-widest font-medium">
          <Link href="/desgins" className="hover:text-gold transition">Designs</Link>
          <Link href="/badges" className="hover:text-gold transition">Badges</Link>
          <Link href="/about" className="hover:text-gold transition">About</Link>
          <Link href="/business-proposals" className="hover:text-gold transition">Business</Link>
          <Link href="/contact" className="hover:text-gold transition">Contact</Link>
        </div>

        <div className="flex items-center gap-6">
          <Link href="/badges" className="hover:text-gold transition">
            <ShoppingCart className="w-6 h-6" />
          </Link>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-2xl"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-bg border-t border-gold/20 px-6 py-8 space-y-6 text-lg">
          <Link href="/designs" className="block">Designs</Link>
          <Link href="/badges" className="block">Badges</Link>
          <Link href="/about" className="block">About</Link>
          <Link href="/business-proposals" className="block">For Business</Link>
          <Link href="/contact" className="block">Contact</Link>
        </div>
      )}
    </nav>
  );
}