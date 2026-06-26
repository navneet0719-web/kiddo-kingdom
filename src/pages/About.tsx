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
          Founded in 2023, Kiddo Kingdom was built on a simple premise: every child deserves a kingdom where they can rule their imagination. 
        </p>
        <p>
          Our dedicated team of educators, play experts, and child psychologists work together to create an environment that fosters creativity, emotional intelligence, and cognitive development.
        </p>
        <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">Our Mission</h2>
        <p>
          To provide a safe, nurturing, and incredibly fun space where children can discover their passions and develop lifelong skills through play.
        </p>
      </div>
    </div>
  );
}
