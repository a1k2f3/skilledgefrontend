'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

interface Design {
  id: string;
  name: string;
  image: string;
  category: string;
  price: number;
}

export default function DesignCard({ design }: { design: Design }) {
  return (
    <div className="group relative bg-white overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
      <div className="relative h-80 overflow-hidden">
        <Image
          src={design.image}
          alt={design.name}
          fill
          className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-0"
        />
        <div className="absolute inset-0 overflow-hidden bg-[#d8c9a5] [background-image:radial-gradient(rgba(92,68,35,0.16)_1px,transparent_1px),linear-gradient(135deg,#e8ddc2,#cbb98c)] [background-size:4px_4px,100%_100%] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <Image
            src={design.image}
            alt={`${design.name} embroidered logo preview`}
            fill
            className="object-contain p-8 grayscale contrast-200 brightness-90 opacity-95 mix-blend-multiply drop-shadow-[1px_1px_0_#d4af37] drop-shadow-[-1px_-1px_0_#fff3b0] transition-transform duration-700 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:repeating-linear-gradient(120deg,transparent_0,transparent_2px,rgba(92,68,35,0.35)_2px,rgba(92,68,35,0.35)_3px)] [background-size:6px_6px]" />
          <span className="absolute bottom-4 left-4 bg-[#3f321f]/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
            Embroidered logo
          </span>
        </div>
        <button className="absolute top-4 right-4 p-3 bg-white/80 rounded-full hover:bg-white transition-colors">
          <Heart className="w-5 h-5" />
        </button>
      </div>
      
      <div className="p-8">
        <div className="uppercase text-xs tracking-[3px] text-gold mb-2">{design.category}</div>
        <h3 className="text-2xl font-serif mb-4">{design.name}</h3>
        
        <div className="flex justify-between items-end">
          <div>
            <span className="text-sm opacity-70">Starting at</span>
            <p className="text-3xl font-medium">₹{design.price}</p>
          </div>
          <Button 
            onClick={() => alert('Contact admin for customization')} 
            className="bg-deep-red hover:bg-black"
          >
            Customize &amp; Order
          </Button>
        </div>
      </div>
    </div>
  );
}