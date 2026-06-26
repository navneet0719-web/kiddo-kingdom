import SEO from '../components/SEO';

export default function Blog() {
  const posts = [
    { title: 'The Importance of Play-Based Learning', date: 'October 12, 2023', snippet: 'Discover why letting kids play is the best way to help them learn and grow...' },
    { title: 'Top 5 Activities for Toddlers at Home', date: 'September 28, 2023', snippet: 'Keep your little ones engaged with these simple, fun, and educational activities...' },
    { title: 'Healthy Snacks Your Kids Will Actually Eat', date: 'September 15, 2023', snippet: 'Struggling with picky eaters? Try these nutritious and delicious snack ideas...' },
  ];

  return (
    <div className="flex-grow max-w-4xl mx-auto p-8 py-16 w-full">
      <SEO 
        title="Blog & Resources | Kiddo Kingdom" 
        description="Read the latest articles, tips, and news from Kiddo Kingdom. We share insights on parenting, child development, and fun activities." 
      />
      <h1 className="text-4xl font-extrabold text-amber-600 tracking-tight mb-12">
        Kiddo Kingdom Blog
      </h1>
      <div className="space-y-8">
        {posts.map((post, index) => (
          <article key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-amber-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">{post.title}</h2>
            <p className="text-sm text-amber-500 mb-4 font-medium">{post.date}</p>
            <p className="text-slate-600">{post.snippet}</p>
            <button className="mt-4 text-amber-600 font-semibold hover:text-amber-700">Read more &rarr;</button>
          </article>
        ))}
      </div>
    </div>
  );
}
