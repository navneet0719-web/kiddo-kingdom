import SEO from '../components/SEO';

export default function Home() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center p-8 text-center space-y-6">
      <SEO 
        title="Kiddo Kingdom | Welcome to Fun & Learning" 
        description="Welcome to Kiddo Kingdom! The best place for your kids to learn, play, and grow in a safe environment." 
      />
      <h1 className="text-4xl md:text-6xl font-extrabold text-amber-600 tracking-tight">
        Welcome to Kiddo Kingdom!
      </h1>
      <p className="text-xl text-slate-600 max-w-2xl">
        Where imagination meets education. Explore our world of fun activities, engaging learning experiences, and a community of happy children.
      </p>
      <div className="mt-8 flex gap-4">
        <a href="/products" className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-full shadow-md transition">
          Explore Products
        </a>
        <a href="/contact" className="bg-white border-2 border-amber-500 text-amber-600 hover:bg-amber-50 font-semibold py-3 px-6 rounded-full shadow-sm transition">
          Get in Touch
        </a>
      </div>
    </div>
  );
}
