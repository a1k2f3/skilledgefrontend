// components/badges/BadgeCard.tsx
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';

interface Badge {
  id: string;
  name: string;
  price: number;
  image: string;
  inStock: boolean;
}

export default function BadgeCard({ badge }: { badge: Badge }) {
  return (
    <div className="group bg-white border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500">
      <div className="relative h-72 bg-cream flex items-center justify-center p-8">
        <Image
          src={badge.image}
          alt={badge.name}
          width={220}
          height={220}
          className="group-hover:scale-110 transition-transform duration-700 drop-shadow-xl"
        />
        
        {badge.inStock && (
          <div className="absolute top-4 right-4 bg-green-600 text-white text-xs px-4 py-1 rounded-full">
            In Stock
          </div>
        )}
      </div>

      <div className="p-8">
        <h3 className="font-serif text-2xl mb-4">{badge.name}</h3>
        
        <div className="flex justify-between items-center">
          <div className="text-3xl font-medium">₹{badge.price}</div>
          
          <Button 
            onClick={() => alert(`Added ${badge.name} to cart!`)}
            className="bg-gold hover:bg-amber-600 text-black px-8 py-6 rounded-none flex items-center gap-2"
          >
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}