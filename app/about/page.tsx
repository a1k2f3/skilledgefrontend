// app/(site)/about/page.tsx
export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-serif mb-6">Our Story</h1>
        <p className="text-2xl text-gray-600">Crafting Excellence Since 2015</p>
      </div>

      <div className="prose prose-lg mx-auto text-gray-700">
        <p className="text-xl leading-relaxed">
          Artisan Embroidery is a family-owned business specializing in high-end custom embroidery. 
          What began as a small workshop in Lahore has grown into a trusted name for premium designs 
          and badges across Pakistan.
        </p>
        
        <h2 className="text-4xl font-serif mt-16 mb-8">Our Commitment</h2>
        <ul className="grid md:grid-cols-3 gap-8 text-center">
          <li className="bg-white p-10 rounded-xl shadow-sm">Premium Quality Threads</li>
          <li className="bg-white p-10 rounded-xl shadow-sm">Hand-Finished Details</li>
          <li className="bg-white p-10 rounded-xl shadow-sm">Fast Turnaround</li>
        </ul>
      </div>
    </div>
  );
}