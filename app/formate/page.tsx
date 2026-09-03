"use client"

import Pricing from '@/components/forms/Pricing'
import { FormEvent } from 'react'





function page() {
  return (
    <div>
      <section className="bg-[#f7f0e3] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 text-center md:text-left">
            <p className="text-sm uppercase tracking-[0.28em] text-[#8a6a1b] font-medium">File formats</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-serif tracking-tight text-[#1a120b]">
              Name your machine. We will name the file.
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
                  ['.PES', 'Brother'],
                  ['.JEF', 'Janome'],
                  ['.EXP', 'Melco'],
                  ['.HUS', 'Viking'],
                  ['.EMB', 'Wilcom'],
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
                  Always included free
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  ['.AI', 'Illustrator'],
                  ['.EPS', 'Print'],
                  ['.SVG', 'Vector'],
                ].map(([ext, name]) => (
                  <div key={ext} className="rounded-xl border border-[#f0e7d4] bg-[#fffdf9] p-3">
                    <div className="text-xs uppercase tracking-[0.2em] text-[#8a6a1b]">{ext}</div>
                    <div className="mt-2 text-sm font-medium text-[#221b13]">{name}</div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-3 text-sm text-[#4a3b2a]">
                <span className="rounded-full border border-[#e9d7a3] bg-[#fffdf9] px-3 py-1.5">20+ machine formats</span>
                <span className="rounded-full border border-[#e9d7a3] bg-[#fffdf9] px-3 py-1.5">Vector on request</span>
                <span className="rounded-full border border-[#e9d7a3] bg-[#fffdf9] px-3 py-1.5">Always included free</span>
              </div>
            </div>
          </div>
        </div>
      </section>
 <section className="bg-[#f7f0e3] py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <div className="rounded-[30px] border border-[#ead19a] bg-white px-6 py-10 shadow-sm md:px-10 md:py-12">
            <p className="text-sm uppercase tracking-[0.28em] text-[#8a6a1b] font-medium">What you send us</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-serif tracking-tight text-[#1a120b]">
              Send whatever you have.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base md:text-lg text-[#4a3b2a]">
              A crisp vector is ideal, but it is not required. A phone photo of a hand-drawn sketch is enough for a digitizer to work from — and if the artwork will not stitch as drawn, we tell you before we start, not after.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-[#2d2118]">
              {['JPG', 'PNG', 'PDF', 'AI', 'EPS', 'TIFF', 'BMP', 'GIF', 'Hand-drawn sketch'].map((type) => (
                <span key={type} className="rounded-full border border-[#e9d7a3] bg-[#fffdf9] px-3 py-2">
                  {type}
                </span>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-dashed border-[#d3b266] bg-[#fff9ef] p-6 text-center">
              <h3 className="text-xl md:text-2xl font-serif text-[#1a120b]">Machine not listed?</h3>
              <p className="mt-3 text-base text-[#4a3b2a]">
                Tell us the make and model when you order and we will supply that format. If it is anything unusual, our team confirms it before starting work.
              </p>
              <a
                href="https://digitizingzone.com/contact"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-[#1a120b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2a2118]"
              >
                Ask about your machine
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#fffaf3] py-16 md:py-20">
        <Pricing/>
      </section>

     
    </div>
  )
}

export default page
