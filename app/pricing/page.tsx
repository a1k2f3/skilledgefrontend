import Pricing from '@/components/forms/Pricing'

const embroideryRates = [
	['Left Chest / Hat Logo', 'Standard logo placement, per logo', '$30', '$40'],
	['Jacket Back', 'Large-format back designs', '$80', '$100'],
]

const vectorRates = [
	['Simple', '1-2 colours, clean shapes', '$12', '$15'],
	['Medium Complexity', 'Multiple colours, text and elements', '$25', '$30'],
	['High Complexity Graphics', 'Detailed illustrations and artwork', '$80', '$100'],
]

const examples = [
	['Left-chest logo', 'Falls at the minimum', '4,800', '$15.00'],
	['Cap front', 'Centre-out sequencing', '9,200', '$27.60'],
	['Photo portrait', 'Blended shading', '28,400', '$85.20'],
	['Jacket back', 'Flat rate usually beats per-stitch', '46,000', '$138.00'],
]

const faqs = [
	['What exactly is embroidery digitizing?', 'It is the process of converting your artwork into a stitch file an embroidery machine can read. A digitizer decides every stitch type, angle, density, underlay and the order the needle travels - it is not a file conversion, it is a craft.'],
	['How much will my design cost?', 'Embroidery digitizing is $3.00 per 1,000 stitches with a $15 minimum. Vector art is $10.00 per hour. Common jobs are available flat: $30 for a left-chest or cap logo, and $80 for a jacket back.'],
	['How fast do I get the file?', 'Standard turnaround is 12-24 hours. Same-day rush is available with no surcharge. The studio runs 24/7 across the USA, UK and Pakistan.'],
	['Which formats do you deliver?', 'Every commercial machine format, including DST, PES, EXP, JEF, VP3, HUS, XXX, EMB, PXF, TBF, SEW, CSD and ART. Vector work is delivered as AI, EPS, SVG, PDF or CDR.'],
	['What if the sew-out is not right?', 'You get free unlimited revisions. Send a photo of the sew-out and the problem area is re-punched until it runs clean on your machine.'],
	['Do you use auto-digitizing software?', 'Never. Every file is punched manually by a digitizer using professional embroidery software.'],
	['Who owns the finished file?', 'You do, outright. A lifetime encrypted backup is also kept so you can re-download any design from your client portal at no cost.'],
	['How do I pay?', 'Securely by card through the client portal once your quote is approved. There are no setup fees, hidden charges or minimum monthly volume.'],
]

function RateTable({ rows }: { rows: string[][] }) {
	return (
		<div className="overflow-x-auto rounded-2xl border border-[#eadfca] bg-white">
			<table className="w-full min-w-[620px] text-left text-sm">
				<thead className="border-b border-[#eadfca] text-xs uppercase tracking-[0.16em] text-[#8a6a1b]">
					<tr><th className="px-5 py-4">Job</th><th className="px-5 py-4">Details</th><th className="px-5 py-4">Partner</th><th className="px-5 py-4">Standard</th></tr>
				</thead>
				<tbody className="divide-y divide-[#f0e7d4] text-[#3d2e22]">
					{rows.map(([job, detail, partner, standard]) => (
						<tr key={job}><th className="px-5 py-4 font-semibold text-[#1a120b]">{job}</th><td className="px-5 py-4">{detail}</td><td className="px-5 py-4 font-semibold">{partner}</td><td className="px-5 py-4 font-semibold">{standard}</td></tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default function PricingPage() {
	return (
		<div className="bg-[#fffaf3] text-[#1a120b]">
			<section className="border-b border-[#eadfca] bg-[#f7f0e3] px-6 py-16 md:py-24">
				<div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
					<div>
						<p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8a6a1b]">Transparent pricing</p>
						<h1 className="mt-4 max-w-3xl text-4xl font-serif tracking-tight md:text-6xl">One rate per job type. Nothing hidden after it.</h1>
						<p className="mt-6 max-w-2xl text-lg leading-8 text-[#5d4b38]">You are quoted before any work starts, and the number you approve is the number you pay. No setup fees, no rush surcharge, no charge for a format you forgot to ask for.</p>
						<div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
							{[['$3.00', 'per 1,000 stitches'], ['$15', 'minimum order'], ['$10.00', 'vector art / hour']].map(([value, label]) => <div key={label} className="border-l-2 border-[#b98d2b] pl-4"><strong className="block text-2xl">{value}</strong><span className="text-sm text-[#6e5c48]">{label}</span></div>)}
						</div>
					</div>
					<div className="overflow-hidden rounded-2xl border border-[#e5d3a4] bg-white shadow-xl">
						<img src="https://digitizingzone.com/images/theme/sewout-3-after.png" alt="Embroidered left-chest badge sew-out" className="aspect-[4/3] w-full object-cover" />
						<div className="grid grid-cols-2 gap-4 p-5 text-sm"><div><p className="font-semibold">Left-chest badge</p><p className="mt-1 text-[#6e5c48]">Twill - DST - PES</p></div><div><p className="font-semibold">Stitch count</p><p className="mt-1 text-[#6e5c48]">8,412</p></div><div><p className="font-semibold">Rate</p><p className="mt-1 text-[#6e5c48]">$3.00 / 1,000</p></div><div><p className="font-semibold">Total</p><p className="mt-1 text-[#8a6a1b]">$25.24</p></div></div>
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
				<div className="mb-10 max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#8a6a1b]">Transparent pricing</p><h2 className="mt-3 text-3xl font-serif md:text-4xl">One rate. No setup fees, no rush surcharge.</h2><p className="mt-4 leading-7 text-[#5d4b38]">Pay per stitch, or take a flat rate on the jobs you order most. Revisions never cost extra - a file is not finished until it runs clean on your machine.</p></div>
				<div className="grid gap-6 lg:grid-cols-2">
					{[['Embroidery Digitizing', '$3.00', 'per 1,000 stitches', '$4.00 standard - 25% off for partners', ['$15 minimum order', '12-24 hr standard turnaround', 'Free unlimited revisions', 'Every machine format included', 'Lifetime secure file backup']], ['Vector Art Conversion', '$10.00', 'per hour', '$12.00 standard - 17% off for partners', ['12-24 hr standard turnaround', 'Free unlimited revisions', 'AI, EPS, SVG, PDF, CDR', 'Lifetime secure file backup']]].map(([title, price, unit, note, features]) => <article key={title as string} className="relative rounded-2xl border border-[#e5d3a4] bg-white p-7 shadow-sm"><span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a6a1b]">{title as string}</span>{title === 'Embroidery Digitizing' && <span className="absolute right-6 top-6 rounded-full bg-[#f5e9c8] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#654b17]">Most ordered</span>}<div className="mt-5"><strong className="text-4xl">{price as string}</strong><span className="ml-2 text-sm text-[#6e5c48]">{unit as string}</span></div><p className="mt-2 text-sm text-[#6e5c48]">{note as string}</p><ul className="mt-6 space-y-3 border-t border-[#f0e7d4] pt-5 text-sm text-[#3d2e22]">{(features as string[]).map((feature) => <li key={feature}>+ {feature}</li>)}</ul><a href="https://digitizingzone.com/order" className="mt-7 inline-flex rounded-xl bg-[#1a120b] px-5 py-3 text-sm font-semibold text-white hover:bg-[#33261c]">Get a quote</a></article>)}
				</div>
			</section>

			<section className="border-y border-[#eadfca] bg-[#f7f0e3] px-6 py-16 md:py-20"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2"><div><p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8a6a1b]">Embroidery digitizing</p><h2 className="mt-3 text-3xl font-serif">Flat price by size</h2><p className="mt-3 text-[#5d4b38]">Know the cost before you order. Fixed price per logo, whatever the stitch count comes to.</p><div className="mt-6"><RateTable rows={embroideryRates} /></div></div><div><p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8a6a1b]">Vector art</p><h2 className="mt-3 text-3xl font-serif">Flat price by complexity</h2><p className="mt-3 text-[#5d4b38]">A fixed price per file, banded by how much detail the artwork carries.</p><div className="mt-6"><RateTable rows={vectorRates} /></div></div></div></section>

			<section className="mx-auto max-w-7xl px-6 py-16 md:py-20"><p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8a6a1b]">Worked examples</p><h2 className="mt-3 text-3xl font-serif md:text-4xl">What real jobs actually cost.</h2><p className="mt-4 max-w-2xl leading-7 text-[#5d4b38]">Stitch count decides the price, so a simple logo stays cheap and you only pay for what the machine runs. Anything under the minimum lands at the minimum.</p><div className="mt-8 overflow-x-auto rounded-2xl border border-[#eadfca] bg-white"><table className="w-full min-w-[600px] text-left text-sm"><thead className="border-b border-[#eadfca] text-xs uppercase tracking-[0.16em] text-[#8a6a1b]"><tr><th className="px-5 py-4">Job</th><th className="px-5 py-4">Stitches</th><th className="px-5 py-4">Price</th></tr></thead><tbody className="divide-y divide-[#f0e7d4]">{examples.map(([job, detail, stitches, price]) => <tr key={job}><td className="px-5 py-4"><strong className="block">{job}</strong><span className="text-[#6e5c48]">{detail}</span></td><td className="px-5 py-4">{stitches}</td><td className="px-5 py-4 font-semibold">{price}</td></tr>)}</tbody></table></div></section>

			<section className="border-y border-[#eadfca] bg-[#1a120b] px-6 py-16 text-white md:py-20"><div className="mx-auto max-w-7xl"><p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d4af37]">Never on the invoice</p><h2 className="mt-3 text-3xl font-serif md:text-4xl">Six things other studios charge for.</h2><div className="mt-8 grid gap-4 text-[#f7f0e3] sm:grid-cols-2 lg:grid-cols-3">{['Setup or artwork fees', 'Rush or same-day delivery', 'Extra machine formats', 'Revisions and re-punches', 'Stitch simulation preview', 'Lifetime file storage'].map((item) => <div key={item} className="border-t border-white/20 pt-4">+ {item}</div>)}</div></div></section>

			<section className="mx-auto max-w-4xl px-6 py-16 md:py-20"><p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#8a6a1b]">Questions</p><h2 className="mt-3 text-3xl font-serif md:text-4xl">Everything shops ask before the first file.</h2><p className="mt-4 text-[#5d4b38]">Still not answered? The studio is staffed around the clock - <a href="https://digitizingzone.com/contact" className="font-semibold underline decoration-[#b98d2b] underline-offset-4">talk to a digitizer</a>.</p><div className="mt-8 divide-y divide-[#eadfca] border-y border-[#eadfca]">{faqs.map(([question, answer]) => <details key={question} className="group py-5"><summary className="cursor-pointer list-none pr-8 font-semibold text-[#1a120b]">{question}<span className="float-right text-[#8a6a1b]">+</span></summary><p className="mt-3 max-w-3xl leading-7 text-[#5d4b38]">{answer}</p></details>)}</div></section>

			<section className="bg-[#fffaf3] px-6 pb-16 md:pb-20"><Pricing /></section>
		</div>
	)
}
