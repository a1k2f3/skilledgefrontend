// components/designs/DesignFilters.tsx
'use client';

import { useState } from 'react';

const categories = ['All', 'Heraldic', 'Floral', 'Abstract', 'Islamic', 'Corporate'];

export default function DesignFilters() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  return (
    <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
      {/* Search */}
      <div className="w-full md:w-96">
        <input
          type="text"
          placeholder="Search designs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 px-6 py-4 focus:outline-none focus:border-gold text-lg"
        />
      </div>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-3 text-sm uppercase tracking-widest transition-all ${
              activeCategory === cat 
                ? 'bg-gold text-black' 
                : 'bg-white border border-gray-300 hover:border-gold'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}