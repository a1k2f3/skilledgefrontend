// app/(site)/badges/page.tsx
import BadgeCard from '@/components/badges/BadgeCard';
import { badges } from '@/lib/contants';

export default function BadgesPage() {
  return (
    <div className="pt-12 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif tracking-tight mb-4">Premium Badges</h1>
          <p className="text-xl text-gray-600">Ready-to-ship embroidered badges & patches</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {badges.map((badge) => (
            <BadgeCard key={badge.id} badge={badge} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-sm uppercase tracking-widest text-gold mb-4">Want Custom Badges?</p>
          <a href="/contact" className="inline-block bg-deep-red text-white px-10 py-4 text-lg hover:bg-black transition-colors">
            Request Custom Order
          </a>
        </div>
      </div>
    </div>
  );
}