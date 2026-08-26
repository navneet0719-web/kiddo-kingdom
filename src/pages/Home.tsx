import SEO from '../components/SEO';

export default function Home() {
  return (
    <div className="flex-grow flex flex-col items-center justify-center p-8 text-center space-y-6">
      <SEO 
        title="Kiddo Kingdom | Welcome to Fun & Learning" 
        description="Welcome to Kiddo Kingdom! The best place for your kids to learn, play, and grow in a safe environment." 
      />
      <h1 className="text-4xl md:text-6xl font-extrabold text-amber-600 tracking-tight">
        Fun and Educational Toys for Kids
      </h1>
      <div className="text-xl text-slate-600 max-w-2xl space-y-6">

  {/* Introduction */}
  <p>
    Welcome to <strong>Kiddo Kingdom</strong>, your destination for fun,
    engaging, and educational toys for kids. We offer a variety of kids'
    toys designed to encourage creativity, imagination, learning, and active
    play.
  </p>

  {/* Kids Toys */}
  <div>
    <h2 className="text-2xl font-bold text-slate-800 mb-2">
      Explore Our Kids' Toys
    </h2>
    <p>
      Discover exciting toys for different interests and play styles. From
      creative learning toys to fun outdoor toys for kids, our collection
      makes playtime more enjoyable while helping children explore and learn
      through play.
    </p>
  </div>

  {/* Outdoor Toys */}
  <div>
    <h2 className="text-2xl font-bold text-slate-800 mb-2">
      Outdoor Playsets & Garden Toys
    </h2>
    <p>
      Make outdoor play more exciting with our range of outdoor playsets,
      garden toys, slides, and swing sets for kids. These fun play options
      encourage children to stay active, explore their surroundings, and
      enjoy memorable playtime outdoors.
    </p>
  </div>

  {/* Educational Toys */}
  <div>
    <h2 className="text-2xl font-bold text-slate-800 mb-2">
      Learning Through Play
    </h2>
    <p>
      At Kiddo Kingdom, we believe that learning can be fun. Our educational
      toys for kids are designed to encourage curiosity, creativity,
      problem-solving, and imaginative play.
    </p>
  </div>

</div>
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
