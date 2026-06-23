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
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
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