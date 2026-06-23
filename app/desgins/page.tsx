// app/(site)/designs/page.tsx
import DesignCard from '@/components/designs/DesignCard';
import DesignFilters from '@/components/designs/DesignFilters';
import { designs } from '@/lib/contants';

export default function DesignsPage() {
  return (
    <div className="pt-12 pb-24 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif tracking-tight mb-4">Design Gallery</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our exclusive collection of premium embroidery designs
          </p>
        </div>

        <DesignFilters />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {designs.map((design) => (
            <DesignCard key={design.id} design={design} />
          ))}
        </div>
      </div>
    </div>
  );
}