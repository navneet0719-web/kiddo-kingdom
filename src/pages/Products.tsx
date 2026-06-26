import SEO from '../components/SEO';
import woodenBlocksImg from '../assets/images/wooden_building_blocks_1782274979668.jpg';
import teddyBearImg from '../assets/images/plush_teddy_bear_1782274994510.jpg';
import toyTrainImg from '../assets/images/toy_train_set_1782275009677.jpg';
import xylophoneImg from '../assets/images/xylophone_musical_toy_1782275522518.jpg';
import shapeSorterImg from '../assets/images/shape_sorter_puzzle_1782275538682.jpg';
import plushBunnyImg from '../assets/images/plush_bunny_toy_1782275554956.jpg';
import artEaselImg from '../assets/images/kids_art_easel_1782280484506.jpg';
import playTentImg from '../assets/images/kids_play_tent_1782280501817.jpg';
import flashcardsImg from '../assets/images/educational_flashcards_1782280514478.jpg';

export default function Products() {
  const products = [
    { 
      id: 1,
      name: 'Colorful Wooden Building Blocks', 
      desc: 'Classic 50-piece wooden block set. Safe, durable, and perfect for inspiring creativity and motor skills.',
      price: '$24.99',
      image: woodenBlocksImg,
      age: '18m+'
    },
    { 
      id: 2,
      name: 'Cuddle Buddy Plush Teddy', 
      desc: 'Incredibly soft and huggable teddy bear. The perfect companion for bedtime stories and afternoon snuggles.',
      price: '$19.99',
      image: teddyBearImg,
      age: '0m+'
    },
    { 
      id: 3,
      name: 'Classic Wooden Train Set', 
      desc: 'Expandable wooden railway with magnetic train cars and scenic accessories. Hours of imaginative play.',
      price: '$39.99',
      image: toyTrainImg,
      age: '3y+'
    },
    { 
      id: 4,
      name: 'Rainbow Xylophone', 
      desc: 'Introduce your little one to the world of music with this brightly colored wooden xylophone.',
      price: '$18.99',
      image: xylophoneImg,
      age: '12m+'
    },
    { 
      id: 5,
      name: 'Wooden Shape Sorter', 
      desc: 'Classic developmental toy that helps teach color and shape recognition, sorting skills, and problem solving.',
      price: '$22.99',
      image: shapeSorterImg,
      age: '18m+'
    },
    { 
      id: 6,
      name: 'Snuggle Bunny Plush', 
      desc: 'An ultra-soft, floppy-eared bunny that is perfect for tiny hands to cuddle and carry around.',
      price: '$16.99',
      image: plushBunnyImg,
      age: '0m+'
    },
    { 
      id: 7,
      name: 'Double-Sided Art Easel', 
      desc: 'Unleash inner artists with this sturdy wooden easel, featuring both a chalkboard and a magnetic whiteboard.',
      price: '$45.99',
      image: artEaselImg,
      age: '3y+'
    },
    { 
      id: 8,
      name: 'Starry Night Play Tent', 
      desc: 'A cozy canvas teepee perfect for reading nooks or imaginary camping trips in the living room.',
      price: '$59.99',
      image: playTentImg,
      age: '2y+'
    },
    { 
      id: 9,
      name: 'Educational Flashcards', 
      desc: 'Vibrant, thick flashcards to help toddlers learn the alphabet, numbers, colors, and common animals.',
      price: '$12.99',
      image: flashcardsImg,
      age: '2y+'
    },
  ];

  return (
    <div className="flex-grow max-w-7xl mx-auto p-8 py-16 w-full">
      <SEO 
        title="Our Products & Toys | Kiddo Kingdom" 
        description="Explore our curated collection of high-quality, educational, and fun toys for children of all ages." 
      />
      
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-amber-600 tracking-tight mb-4">
          Kiddo Kingdom Shop
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Discover our carefully selected range of premium toys designed to spark joy, imagination, and learning.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-3xl shadow-sm border border-amber-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col group">
            <div className="relative aspect-square overflow-hidden bg-slate-50">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-slate-700 shadow-sm">
                {product.age}
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-slate-800 mb-2 leading-tight">
                {product.name}
              </h3>
              <p className="text-slate-600 mb-6 flex-grow">
                {product.desc}
              </p>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="text-2xl font-black text-amber-500">
                  {product.price}
                </span>
                <button className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-2 px-5 rounded-full transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
