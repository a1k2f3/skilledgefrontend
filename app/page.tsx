// app/(site)/page.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, Clock, Star } from 'lucide-react';
import DesignCard from '@/components/designs/DesignCard';
import BadgeCard from '@/components/badges/BadgeCard';
import { designs } from '@/lib/contants';
import { badges } from '@/lib/contants';

export default function Home() {
  const featuredDesigns = designs.slice(0, 3);
  const featuredBadges = badges.slice(0, 3);

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-bg h-screen flex items-center justify-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full mb-6">
            <span className="text-gold">✦</span>
            <span className="uppercase tracking-[4px] text-sm font-medium">Handcrafted Excellence</span>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif tracking-tighter leading-none mb-8">
            ARTISTRY IN<br />EVERY THREAD
          </h1>

          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-gray-200">
            Premium custom embroidery designs and luxury badges for brands, schools, 
            uniforms &amp; special occasions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/designs">
              <Button size="lg" className="text-lg px-12 py-7 rounded-none bg-gold hover:bg-white text-black">
                Explore Designs
              </Button>
            </Link>
            
            <Link href="/badges">
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-12 py-7 rounded-none border-2 border-gold hover:bg-gold hover:text-black"
              >
                Shop Badges
              </Button>
            </Link>
          </div>

          <div className="mt-16 flex justify-center gap-10 text-sm uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-gold" /> Premium Quality
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-gold" /> Fast Delivery
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-gold" /> 500+ Happy Clients
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowRight className="w-6 h-6 rotate-90" />
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="bg-white py-6 border-b">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-x-12 gap-y-6 opacity-75">
          <img src="/images/clients/brand1.png" alt="Client" className="h-8" />
          <img src="/images/clients/brand2.png" alt="Client" className="h-8" />
          <img src="/images/clients/brand3.png" alt="Client" className="h-8" />
          <img src="/images/clients/brand4.png" alt="Client" className="h-8" />
        </div>
      </div>

      {/* FEATURED DESIGNS */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-5xl font-serif tracking-tight">Featured Designs</h2>
              <p className="text-xl text-gray-600 mt-3">Handpicked masterpieces</p>
            </div>
            <Link href="/designs" className="text-gold hover:underline flex items-center gap-2 mt-6 md:mt-0">
              View All Designs <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDesigns.map((design) => (
              <DesignCard key={design.id} design={design} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 bg-dark-bg text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif mb-4">Why Choose Artisan Embroidery?</h2>
            <p className="text-xl text-gray-400">Crafted with passion, delivered with pride</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: Star, title: "Premium Materials", desc: "Highest quality threads and fabrics from around the world" },
              { icon: Award, title: "Expert Craftsmanship", desc: "20+ years of combined experience in embroidery art" },
              { icon: Clock, title: "Quick Turnaround", desc: "Fast production without compromising quality" },
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="mx-auto w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                  <item.icon className="w-10 h-10 text-gold" />
                </div>
                <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED BADGES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-5xl font-serif tracking-tight">Popular Badges</h2>
              <p className="text-xl text-gray-600 mt-3">Ready to ship • Premium quality</p>
            </div>
            <Link href="/badges" className="text-gold hover:underline flex items-center gap-2 mt-6 md:mt-0">
              Browse All Badges <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBadges.map((badge) => (
              <BadgeCard key={badge.id} badge={badge} />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-serif mb-12">What Our Clients Say</h2>
          
          <div className="bg-white p-12 rounded-2xl shadow-xl">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-7 h-7 text-gold fill-gold" />
              ))}
            </div>
            <p className="text-2xl italic leading-relaxed mb-8">
              "The quality of their embroidery exceeded our expectations. 
              Our school badges look absolutely premium. Highly recommended!"
            </p>
            <div>
              <p className="font-medium">Principal Sarah Ahmed</p>
              <p className="text-sm text-gray-500">Beaconhouse School System</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-dark-bg text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-5xl font-serif mb-6">Ready to Bring Your Vision to Life?</h2>
          <p className="text-xl text-gray-400 mb-10">
            Whether you need custom designs or bulk badges, we're here to help.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button size="lg" className="text-lg px-12 py-7 bg-gold text-black hover:bg-white">
                Start Your Project
              </Button>
            </Link>
            
            <Link href="/business-proposals">
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-12 py-7 border-gold hover:bg-gold hover:text-black"
              >
                Business Inquiry
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}