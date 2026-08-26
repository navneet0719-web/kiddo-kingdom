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
      <p className="text-xl text-slate-600 max-w-2xl">
        Welcome to Kiddo Kingdom, your destination for fun, engaging, and educational toys for kids. We offer a variety of kids' toys designed to encourage creativity, imagination, learning, and active play.

Explore Our Kids' Toys

Discover exciting toys for different interests and play styles. From creative learning toys to fun outdoor toys for kids, our collection makes playtime more enjoyable while helping children explore and learn through play.

Outdoor Playsets & Garden Toys

Make outdoor play more exciting with our range of outdoor playsets, garden toys, slides, and swing sets for kids. These fun play options encourage children to stay active, explore their surroundings, and enjoy memorable playtime outdoors.

Learning Through Play

At Kiddo Kingdom, we believe that learning can be fun. Our educational toys for kids are designed to encourage curiosity, creativity, problem-solving, and imaginative play. Explore our collection and find fun ways for children to learn while they play.

Explore Products and discover exciting toys made for fun, creativity, learning, and active play.
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
