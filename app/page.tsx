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
      <section className="relative overflow-hidden bg-[#f8f3eb] text-[#1a120b]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(212,175,55,0.20),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(155,44,44,0.08),_transparent_30%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-20 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d9c27e] bg-[#fffaf0] px-4 py-2 text-sm font-medium text-[#5d4413] shadow-sm">
                <Star className="h-4 w-4 fill-[#d4af37] text-[#d4af37]" />
                Rated 98% satisfaction · 30,000+ designs delivered
              </div>

              <h1 className="max-w-2xl text-4xl font-serif tracking-tight text-[#1a120b] md:text-5xl lg:text-6xl">
                High-quality, machine-ready designs at unbeatable rates
              </h1>

              <p className="mt-6 max-w-xl text-lg text-[#4a3b2a] md:text-xl">
                Premium custom embroidery digitizing and vector art, punched by hand in Wilcom and Tajima, checked stitch by stitch, and back in your inbox within 12–24 hours — from <span className="font-semibold text-[#1a120b]">$3.00 per 1,000 stitches</span>.
              </p>

              <ul className="mt-8 space-y-3 text-base text-[#2d241c]">
                {[
                  'Zero thread breaks',
                  'Free unlimited edits',
                  'Lifetime file backup',
                  'Flat, honest rates',
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f3e7bd] text-[#5d4413]">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link href="https://digitizingzone.com/order" target="_blank" rel="noreferrer">
                  <Button size="lg" className="rounded-none bg-[#d4af37] px-8 py-6 text-base font-semibold text-black hover:bg-[#b98d1b]">
                    Get a free quote
                  </Button>
                </Link>
                <Link href="https://digitizingzone.com/pricing" target="_blank" rel="noreferrer">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-none border-2 border-[#d4af37] bg-white px-8 py-6 text-base font-semibold text-[#1a120b] hover:bg-[#d4af37] hover:text-black"
                  >
                    See our rates
                  </Button>
                </Link>
              </div>

              <p className="mt-6 text-sm font-medium text-[#4a3b2a]">
                $15 minimum order · Same-day rush at no surcharge · 24/7 across USA, UK &amp; Pakistan
              </p>
            </div>

            <div className="relative">
              <div className="rounded-[30px] border border-[#e9d7a3] bg-white p-5 shadow-[0_30px_80px_rgba(26,18,11,0.12)]">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[24px] border border-[#e8dcc0] bg-[#f8f4ec] p-4">
                    <div className="mb-3 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8a6a1b]">
                      <span>Before</span>
                      <span className="rounded-full bg-[#f1e3b0] px-2 py-1 text-[#5d4413]">Artwork</span>
                    </div>
                    <div className="flex h-52 items-center justify-center rounded-[18px] border border-dashed border-[#d8c894] bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.18),_transparent_35%),linear-gradient(135deg,#f9f6ef,#ede6d7)] p-4">
                      <div className="flex h-32 w-32 items-center justify-center rounded-full border-2 border-dashed border-[#d4af37] text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7a5b10]">
                        Logo
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-[#e8dcc0] bg-[#1c1a1a] p-4 text-white">
                    <div className="mb-3 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f3d77a]">
                      <span>After</span>
                      <span className="rounded-full bg-[#332d29] px-2 py-1 text-[#f0d77a]">Sew-out</span>
                    </div>
                    <div className="flex h-52 items-center justify-center rounded-[18px] border border-[#3b342d] bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.12),_transparent_40%),linear-gradient(135deg,#171412,#2a2724)] p-4">
                      <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-2 border-[#d4af37] bg-[#2b2218] shadow-[0_0_25px_rgba(212,175,55,0.25)]">
                        <div className="absolute inset-2 rounded-full border border-dashed border-[#d4af37]/80" />
                        <div className="absolute h-16 w-16 rounded-full border border-[#d4af37]/80" />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f2d974]">Stitch</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-[#f0e7d4] pt-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f1e3b0] text-lg text-[#5d4413]">✓</span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-[#8a6a1b]">Zero thread breaks</p>
                      <p className="mt-1 text-sm font-medium text-[#1a120b]">Delivered in 12–24 hrs</p>
                    </div>
                  </div>
                  <div className="text-right text-sm text-[#4a3b2a]">
                    <p className="font-semibold text-[#1a120b]">Same file, two states</p>
                    <p>Artwork left, sew-out right</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-4">
                {[
                  ['30K+', 'Designs delivered'],
                  ['20+', 'Years punching stitches'],
                  ['300+', 'Logos every day'],
                  ['12–24 hr', 'Standard turnaround'],
                ].map(([value, label]) => (
                  <div key={value} className="rounded-2xl border border-[#eadfb3] bg-[#fffaf0] p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-[#1a120b]">{value}</div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-[#5d4413]">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

        <section className="bg-[#f7f0e3] py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-10 text-center md:text-left">
              <p className="text-sm uppercase tracking-[0.28em] text-[#8a6a1b] font-medium">File formats</p>
              <h2 className="mt-4 text-3xl md:text-5xl font-serif tracking-tight text-[#1a120b]">
                Every format your production workflow needs
              </h2>
              <p className="mt-4 max-w-3xl text-base md:text-lg text-[#4a3b2a]">
                Every commercial embroidery format, plus the vector files print and signage need. Ask for three at once if it helps — file types are never charged for.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-2xl border border-[#e9d7a3] bg-white p-6 shadow-sm">
                <div className="mb-5 flex items-center justify-between gap-3 border-b border-[#f0e7d4] pb-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#8a6a1b]">Embroidery</p>
                    <h3 className="mt-2 text-2xl font-serif text-[#1a120b]">Machine formats</h3>
                  </div>
                  <span className="rounded-full bg-[#f5e9c8] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#5d4413]">
                    20+ formats
                  </span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    ['.DST', 'Tajima'],
                    ['.PES', 'Brother / Babylock'],
                    ['.JEF', 'Janome'],
                    ['.EXP', 'Melco'],
                    ['.HUS', 'Husqvarna / Viking'],
                    ['.EMB', 'Wilcom native'],
                    ['.SEW', 'Janome / Elna'],
                    ['.OFM', 'Barudan'],
                    ['.DAT', 'Toyota / Barudan'],
                    ['.CSD', 'Singer / Poem'],
                    ['.VIP', 'Viking / Husqvarna'],
                    ['.VP3', 'Viking / Husqvarna'],
                  ].map(([ext, name]) => (
                    <div key={ext} className="rounded-xl border border-[#f0e7d4] bg-[#fffdf9] p-3">
                      <div className="text-xs uppercase tracking-[0.2em] text-[#8a6a1b]">{ext}</div>
                      <div className="mt-2 text-sm font-medium text-[#221b13]">{name}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-[#e9d7a3] bg-white p-6 shadow-sm">
                <div className="mb-5 flex items-center justify-between gap-3 border-b border-[#f0e7d4] pb-3">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#8a6a1b]">Vector art</p>
                    <h3 className="mt-2 text-2xl font-serif text-[#1a120b]">Print & signage</h3>
                  </div>
                  <span className="rounded-full bg-[#f5e9c8] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#5d4413]">
                    Free
                  </span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    ['.AI', 'Adobe Illustrator'],
                    ['.EPS', 'Print & screen'],
                    ['.SVG', 'Web & cutters'],
                    ['.PDF', 'Universal proof'],
                    ['.CDR', 'CorelDRAW'],
                    ['.PNG', 'High-resolution export'],
                    ['.JPG', 'Image delivery'],
                    ['.PSD', 'Photoshop layered'],
                  ].map(([ext, name]) => (
                    <div key={ext} className="rounded-xl border border-[#f0e7d4] bg-[#fffdf9] p-3">
                      <div className="text-xs uppercase tracking-[0.2em] text-[#8a6a1b]">{ext}</div>
                      <div className="mt-2 text-sm font-medium text-[#221b13]">{name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
            <Link href="/desgins" className="text-gold hover:underline flex items-center gap-2 mt-6 md:mt-0">
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