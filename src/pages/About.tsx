import SEO from '../components/SEO';

export default function About() {
  return (
    <div className="flex-grow max-w-4xl mx-auto p-8 py-16 w-full">
      <SEO 
        title="About Us | Kiddo Kingdom" 
        description="Learn more about Kiddo Kingdom, our mission, our values, and the passionate team dedicated to your child's growth." 
      />
      <h1 className="text-4xl font-extrabold text-amber-600 tracking-tight mb-8">
        About Kiddo Kingdom
      </h1>
     <div className="prose prose-amber lg:prose-lg text-slate-600 space-y-6">

  <p>
    Founded in 2023, <strong>Kiddo Kingdom</strong> was built on a simple idea:
    every child deserves a fun and inspiring place to explore their imagination.
    We provide a collection of fun, engaging, and educational toys for kids
    that encourage creativity, learning, and active play.
  </p>

  <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
    What We Offer
  </h2>

  <p>
    At Kiddo Kingdom, we offer a variety of kids' toys, educational toys,
    outdoor toys, playsets, garden toys, slides, and swing sets. Our goal is
    to make playtime enjoyable while encouraging children to learn, explore,
    and develop their creativity through play.
  </p>

  <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">
    Our Mission
  </h2>

  <p>
    Our mission is to provide fun and engaging play experiences where children
    can discover their interests, develop important skills, and enjoy
    meaningful learning through play.
  </p>

</div>
    </div>
  );
}
