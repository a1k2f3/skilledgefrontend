"use client"

import { FormEvent } from 'react'

const services = [
  'Embroidery Digitizing',
  'Cap & Hat Digitizing',
  '3D Puff Embroidery Digitizing',
  'Applique Embroidery Digitizing',
  'Chain Stitch Embroidery Digitizing',
  'Vector Art Conversion Services',
  'Photo Digitizing Services',
  'Patch & Badge Digitizing Services',
  'Jacket Back Embroidery Digitizing',
  'Monogram & Lettering Digitizing',
]

const machineFormats = [
  'DST — Tajima',
  'PES — Brother',
  'JEF — Janome',
  'EXP — Melco',
  'HUS — Husqvarna',
  'EMB — Wilcom',
  'AI / EPS / SVG (vector)',
  'Not sure — advise me',
]

const handleQuoteSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()

  const formData = new FormData(e.currentTarget)

  const firstName = formData.get('firstName')?.toString() || ''
  const lastName = formData.get('lastName')?.toString() || ''
  const email = formData.get('email')?.toString() || ''
  const phone = formData.get('phone')?.toString() || ''
  const company = formData.get('company')?.toString() || ''
  const service = formData.get('service')?.toString() || ''
  const machineFormat = formData.get('machineFormat')?.toString() || ''
  const notes = formData.get('notes')?.toString() || ''

  const message = `Hello, I would like to request a quote.

*Customer Details*
First Name: ${firstName}
Last Name: ${lastName}
Email: ${email}
Phone: ${phone || 'Not provided'}
Company: ${company || 'Not provided'}

*Project Details*
Service: ${service}
Machine Format: ${machineFormat}

*Additional Information*
${notes || 'No additional information provided.'}

Please provide the exact price, stitch estimate, and delivery time. Thank you!`

  const whatsappUrl = `https://wa.me/923445599332?text=${encodeURIComponent(message)}`

  window.open(whatsappUrl, '_blank')
}

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

      <section className="bg-[#fffaf3] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_1.35fr] lg:items-start">
            <div className="rounded-[28px] border border-[#ead19a] bg-[#f9f1df] p-7 shadow-sm md:p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-[#8a6a1b] font-medium">Start a job</p>
              <h2 className="mt-4 text-3xl md:text-5xl font-serif tracking-tight text-[#1a120b]">
                Send the artwork.
              </h2>
              <h3 className="mt-2 text-2xl md:text-3xl font-serif text-[#1a120b]">
                Get a price in minutes.
              </h3>

              <p className="mt-5 text-lg text-[#4a3b2a]">
                No account needed to ask. Tell us what you are stitching and we will come back with an exact quote, a stitch estimate and a delivery time — usually inside the hour.
              </p>

              <ul className="mt-6 space-y-3 text-base text-[#2d2118]">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#a67c2b]" />
                  <span>Exact price before any work starts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#a67c2b]" />
                  <span>Free unlimited revisions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#a67c2b]" />
                  <span>Same-day rush at no surcharge</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#a67c2b]" />
                  <span>Every machine format included</span>
                </li>
              </ul>

              <p className="mt-8 text-base text-[#3d2e22]">
                Prefer to talk? <a href="tel:+12063126446" className="font-semibold text-[#1a120b] underline decoration-[#a67c2b] underline-offset-4">+92 300 1234567</a> · 24/7
              </p>
            </div>

            <div className="rounded-[28px] border border-[#ead19a] bg-white p-6 shadow-[0_18px_55px_rgba(26,18,11,0.08)] md:p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-serif text-[#1a120b]">Request a quote</h3>
                <p className="mt-2 text-base text-[#4a3b2a]">
                  We reply to every enquiry within the hour, around the clock.
                </p>
              </div>

              <form className="space-y-5" onSubmit={handleQuoteSubmit}>
                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block text-sm font-medium text-[#2d2118]">
                    <span className="mb-2 block">First name</span>
                    <input name="firstName" type="text" className="w-full rounded-xl border border-[#e8dcc1] bg-[#fffdf9] px-4 py-3 text-base text-[#1a120b] outline-none transition focus:border-[#b98d2b] focus:ring-2 focus:ring-[#f0dfae]" />
                  </label>

                  <label className="block text-sm font-medium text-[#2d2118]">
                    <span className="mb-2 block">Last name</span>
                    <input name="lastName" type="text" className="w-full rounded-xl border border-[#e8dcc1] bg-[#fffdf9] px-4 py-3 text-base text-[#1a120b] outline-none transition focus:border-[#b98d2b] focus:ring-2 focus:ring-[#f0dfae]" />
                  </label>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <label className="block text-sm font-medium text-[#2d2118]">
                    <span className="mb-2 block">Email</span>
                    <input name="email" type="email" className="w-full rounded-xl border border-[#e8dcc1] bg-[#fffdf9] px-4 py-3 text-base text-[#1a120b] outline-none transition focus:border-[#b98d2b] focus:ring-2 focus:ring-[#f0dfae]" />
                  </label>

                  <label className="block text-sm font-medium text-[#2d2118]">
                    <span className="mb-2 block">Phone (optional)</span>
                    <input name="phone" type="tel" className="w-full rounded-xl border border-[#e8dcc1] bg-[#fffdf9] px-4 py-3 text-base text-[#1a120b] outline-none transition focus:border-[#b98d2b] focus:ring-2 focus:ring-[#f0dfae]" />
                  </label>
                </div>

                <label className="block text-sm font-medium text-[#2d2118]">
                  <span className="mb-2 block">Company (optional)</span>
                  <input name="company" type="text" className="w-full rounded-xl border border-[#e8dcc1] bg-[#fffdf9] px-4 py-3 text-base text-[#1a120b] outline-none transition focus:border-[#b98d2b] focus:ring-2 focus:ring-[#f0dfae]" />
                </label>

                <label className="block text-sm font-medium text-[#2d2118]">
                  <span className="mb-2 block">Service</span>
                  <select name="service" className="w-full rounded-xl border border-[#e8dcc1] bg-[#fffdf9] px-4 py-3 text-base text-[#1a120b] outline-none transition focus:border-[#b98d2b] focus:ring-2 focus:ring-[#f0dfae]">
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </label>

                <label className="block text-sm font-medium text-[#2d2118]">
                  <span className="mb-2 block">Machine format</span>
                  <select name="machineFormat" className="w-full rounded-xl border border-[#e8dcc1] bg-[#fffdf9] px-4 py-3 text-base text-[#1a120b] outline-none transition focus:border-[#b98d2b] focus:ring-2 focus:ring-[#f0dfae]">
                    {machineFormats.map((format) => (
                      <option key={format} value={format}>{format}</option>
                    ))}
                  </select>
                </label>

                <label className="block text-sm font-medium text-[#2d2118]">
                  <span className="mb-2 block">Anything we should know? (optional)</span>
                  <textarea name="notes" rows={5} className="w-full rounded-xl border border-[#e8dcc1] bg-[#fffdf9] px-4 py-3 text-base text-[#1a120b] outline-none transition focus:border-[#b98d2b] focus:ring-2 focus:ring-[#f0dfae]" />
                </label>

                <div className="pt-2">
                  <button type="submit" className="inline-flex w-full items-center justify-center rounded-xl bg-[#1a120b] px-6 py-3.5 text-base font-semibold text-white transition hover:bg-[#2a2118]">
                    Get my quote on WhatsApp
                  </button>

                  <p className="mt-3 text-center text-sm text-[#5b4c40]">
                    No account needed · We never share your artwork
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default page
