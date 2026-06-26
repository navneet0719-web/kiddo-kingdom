import SEO from '../components/SEO';

export default function Contact() {
  return (
    <div className="flex-grow max-w-3xl mx-auto p-8 py-16 w-full">
      <SEO 
        title="Contact Us | Kiddo Kingdom" 
        description="Get in touch with Kiddo Kingdom. We'd love to hear from you! Reach out for inquiries, bookings, or just to say hello." 
      />
      <h1 className="text-4xl font-extrabold text-amber-600 tracking-tight mb-8 text-center">
        Get in Touch
      </h1>
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-amber-100">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
              <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition" placeholder="Jane Doe" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
              <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition" placeholder="jane@example.com" />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Your Message</label>
            <textarea id="message" rows={5} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition" placeholder="How can we help you?"></textarea>
          </div>
          <button type="submit" className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-6 rounded-xl shadow-md transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
