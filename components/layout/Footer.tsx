'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Camera} from 'lucide-react';
export default function Footer() {
  return (
    <footer className="bg-dark-bg text-white pt-16 pb-8 border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-dark-bg font-bold text-3xl">E</div>
              <span className="text-3xl font-serif tracking-widest">EMBROIDERY</span>
            </div>
            <p className="text-gray-400 max-w-xs">
              Crafting timeless embroidery with precision, passion, and premium quality since 2015.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-medium mb-6 text-lg">Explore</h4>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/designs" className="hover:text-gold transition-colors">Design Gallery</Link></li>
              <li><Link href="/badges" className="hover:text-gold transition-colors">Badge Collection</Link></li>
              <li><Link href="/about" className="hover:text-gold transition-colors">Our Story</Link></li>
              <li><Link href="/business-proposals" className="hover:text-gold transition-colors">For Business</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gold font-medium mb-6 text-lg">Services</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Custom Embroidery</li>
              <li>Corporate Uniforms</li>
              <li>School & Sports Badges</li>
              <li>Bulk Orders</li>
              <li>Design Consultation</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-medium mb-6 text-lg">Get In Touch</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 text-gold" />
                <div>
                  123 Craft Street<br />
                  Lahore, Pakistan
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold" />
                <a href="tel:+923001234567" className="hover:text-gold">+92 300 1234567</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold" />
                <a href="mailto:hello@artisanembroidery.com" className="hover:text-gold">hello@artisanembroidery.com</a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              
              <a href="#" className="p-3 border border-gold/30 rounded-full hover:bg-gold hover:text-black transition-all">
                <Camera className="w-5 h-5" />
              </a>
             
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Artisan Embroidery. All Rights Reserved. 
          <span className="mx-2">•</span>
          Crafted with ❤️ in Pakistan
        </div>
      </div>
    </footer>
  );
}