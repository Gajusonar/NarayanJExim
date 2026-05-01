import { useState, useEffect } from 'react'
import logo from "./assets/logo1-removebg-preview.svg";
import emailjs from "@emailjs/browser";
import galaApple from "./assets/gala-apple.jpg";
import pinkLady from "./assets/pink-lady.jpg";
import redApple from "./assets/red-apple.jpg";
import eversweetPom from "./assets/eversweetPom.png";
import bhagwaPom from "./assets/bhagwa-pomegranate.png";
import Wonderful from "./assets/Wonderful.png";
import riceImg from "./assets/Organic Rice.png";
import Jasmine from "./assets/Jasmine Rice.png";
import Arborio from "./assets/Arborio Rice.png";
import chiliImg from "./assets/Red Chili Powder.png";
import Turmeric from "./assets/Turmeric Powder.png";
import Cumin from "./assets/Cumin Powder.png";
import Cardamom from "./assets/Green Cardamom.png";
import Cinnamon from "./assets/Cinnamon Sticks.png";
import Pepper from "./assets/Black Pepper.png";
import Sulfuric from "./assets/Sulfuric Acid.png";
import HCL from "./assets/HCL.png";
import Hydroxide from "./assets/Sodium Hydroxide.png";
import Nitric from "./assets/Nitric Acid.png";
import chikooImg from "./assets/Chikoo.png";
import BananaImg from "./assets/Banana.png";
import {
  Menu,
  X,
  Sun,
  Moon,
  Mail,
  Phone,
  MapPin,
  Star,
  Globe2,
  Award,
  Shield,
  TrendingUp,
  Users,
  CheckCircle,
  Clock,
  Package,
  Beaker,
  ArrowRight,
  ChevronDown,
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from 'lucide-react'

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const el = document.getElementById("quality-scroll") as HTMLElement | null;
    if (!el) return;

    const speed = 1.5; // pixels per tick (adjust)
    const interval = 10; // ~60fps

    const timer = setInterval(() => {
      el.scrollLeft += speed;

      if (el.scrollLeft >= el.scrollWidth - el.clientWidth) {
        el.scrollLeft = 0;
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const scrollDown = () => {
    window.scrollBy({
      top: 710,
      behavior: "smooth"
    });
  };

  const goToPage = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const products = [
    {
      id: 1,
      name: "Gala Apple",
      origin: "India",
      category: "Fruits",
      rating: 4.5,
      image: galaApple,
      description: "Fresh, crisp Gala apples with sweet flavor"
    },
    {
      id: 2,
      name: "Pink Lady Apple",
      origin: "Australia",
      category: "Fruits",
      rating: 4.8,
      image: pinkLady,
      description: "Premium quality Pink Lady apples, perfectly sweet-tart"
    },
    {
      id: 3,
      name: "Red Delicious Apple",
      origin: "USA",
      category: "Fruits",
      rating: 4.6,
      image: redApple,
      description: "Classic Red Delicious apples with deep red color"
    },
    {
      id: 4,
      name: "Eversweet Pomegranate",
      origin: "USA",
      category: "Fruits",
      rating: 4.7,
      image: eversweetPom,
      description: "Virtually seedless and exceptionally sweet with non-staining clear juice."
    },
    {
      id: 5,
      name: "Bhagwa Pomegranate",
      origin: "India",
      category: "Fruits",
      rating: 4.9,
      image: bhagwaPom,
      description: "High-quality heavy fruit with soft arils and a very sweet profile."
    },
    {
      id: 6,
      name: "Wonderful Pomegranate",
      origin: "USA",
      category: "Fruits",
      rating: 4.8,
      image: Wonderful,
      description: "The industry standard; known for its deep purple-red juice and sharp flavor."
    },
    {
      id: 7,
      name: "Organic Rice",
      origin: "India",
      category: "Grains",
      rating: 4.9,
      image: riceImg,
      description: "Premium aged Organic rice with aromatic fragrance"
    },
    {
      id: 8,
      name: "Jasmine Rice",
      origin: "Thailand",
      category: "Grains",
      rating: 4.7,
      image: Jasmine,
      description: "Fragrant long-grain rice with a slightly sticky texture when cooked."
    },
    {
      id: 9,
      name: "Arborio Rice",
      origin: "Italy",
      category: "Grains",
      rating: 4.8,
      image: Arborio,
      description: "Plump, Italian short-grain rice that releases starch to create creamy sauces."
    },
    {
      id: 10,
      name: "Red Chili Powder",
      origin: "India",
      category: "Spices",
      rating: 4.7,
      image: chiliImg,
      description: "Pure red chili powder with authentic spicy flavor"
    },
    {
      id: 11,
      name: "Turmeric Powder",
      origin: "India",
      category: "Spices",
      rating: 4.8,
      image: Turmeric,
      description: "High-quality turmeric powder with vibrant color"
    },
    {
      id: 12,
      name: "Cumin Powder",
      origin: "India",
      category: "Spices",
      rating: 4.6,
      image: Cumin,
      description: "Freshly ground cumin seeds with a warm, nutty and earthy flavor profile"
    },
    {
      id: 13,
      name: "Green Cardamom",
      origin: "India",
      category: "Spices",
      rating: 4.9,
      image: Cardamom,
      description: "Premium green cardamom with intense aroma"
    },
    {
      id: 14,
      name: "Black Pepper",
      origin: "India",
      category: "Spices",
      rating: 4.7,
      image: Pepper,
      description: "Bold black peppercorns with strong flavor"
    },
    {
      id: 15,
      name: "Cinnamon Sticks",
      origin: "Sri Lanka",
      category: "Spices",
      rating: 4.8,
      image: Cinnamon,
      description: "Authentic rolled cinnamon quills with a sweet and woody aroma"
    },
    {
      id: 16,
      name: "Sulfuric Acid",
      origin: "India",
      category: "Chemicals",
      rating: 4.5,
      image: Sulfuric,
      description: "Industrial grade H₂SO₄ for laboratory and manufacturing use."
    },
    {
      id: 17,
      name: "Sodium Hydroxide",
      origin: "India",
      category: "Chemicals",
      rating: 4.6,
      image: Hydroxide,
      description: "High-purity white crystalline pellets for industrial applications."
    },
    {
      id: 18,
      name: "HCL",
      origin: "India",
      category: "Chemicals",
      rating: 4.8,
      image: HCL,
      description: "95% concentration laboratory-grade solvent."
    },
    {
      id: 19,
      name: "Nitric Acid",
      origin: "India",
      category: "Chemicals",
      rating: 4.9,
      image: Nitric,
      description: "High-quality nitric acid for industrial and laboratory use."
    },
    {
      id: 20,
      name: "Chikoo",
      origin: "India",
      category: "Fruits",
      rating: 4.9,
      image: chikooImg,
      description: "High-quality heavy fruit with soft arils and a very sweet profile."
    },
    {
      id: 21,
      name: "Banana",
      origin: "India",
      category: "Fruits",
      rating: 4.9,
      image: BananaImg,
      description: "High-quality heavy fruit with soft arils and a very sweet profile."
    }
  ];

  const stats = [
    { number: "100+", label: "Global Connections", icon: Users },
    { number: "20+", label: "Countries Connection", icon: Globe2 },
    { number: "20+", label: "Industry Experience", icon: Award },
    { number: "99%", label: "Success Rate", icon: TrendingUp }
  ];

  const categories = ['All', 'Fruits', 'Grains', 'Spices', 'Chemicals'];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const theme = {
    bg: isDarkMode ? 'bg-slate-900' : 'bg-gray-50',
    text: isDarkMode ? 'text-white' : 'text-gray-900',
    cardBg: isDarkMode ? 'bg-slate-800' : 'bg-white',
    cardBorder: isDarkMode ? 'border-slate-700' : 'border-gray-200',
    headerBg: isDarkMode ? 'bg-slate-900/95' : 'bg-white/95',
    secondaryBg: isDarkMode ? 'bg-slate-800/50' : 'bg-gray-100'
  };

  const HomePage = () => (
    <div className="pt-20">
      <section className="relative overflow-hidden py-24 px-4 min-h-[90vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 via-orange-600/20 to-red-600/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left space-y-6">
              <div className="inline-block px-4 py-2 bg-amber-500/20 rounded-full text-amber-500 font-semibold mb-4">
                🌍 Trusted Global Trading Partner
              </div>
              <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                Narayan Jibhau
              </h1>
              <h2 className="text-3xl md:text-5xl font-semibold mb-4 bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
                Export Import
              </h2>
              <p className="text-xl md:text-2xl mb-8 opacity-80 leading-relaxed">
                Delivering Excellence in Global Trade<br/>
                <span className="text-lg text-amber-400">Premium Quality • Honest Service • Worldwide Delivery</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button 
                  onClick={() => setCurrentPage('products')}
                  className="group bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl transition transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Explore Products
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </button>
                <button 
                  onClick={() => setCurrentPage('contact')}
                  className="border-2 border-amber-500 px-8 py-4 rounded-full font-semibold hover:bg-amber-500/20 transition flex items-center justify-center gap-2"
                >
                  Get Quote
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative max-w-xl overflow-hidden">
                <div
                  id="quality-scroll"
                  className="flex gap-6 overflow-x-auto scrollbar-hide px-1 quality-mask"
                >
                  {[
                    {
                      icon: CheckCircle,
                      title: "Quality Compliance",
                      desc: "Products undergo multi-stage inspections to meet stringent quality benchmarks."
                    },
                    {
                      icon: Shield,
                      title: "Global Certifications",
                      desc: "Aligned with internationally recognized standards and regulatory requirements."
                    },
                    {
                      icon: Package,
                      title: "Secure Handling & Packaging",
                      desc: "Professionally packed to preserve integrity throughout transit."
                    },
                    {
                      icon: Clock,
                      title: "Dependable Supply Chain",
                      desc: "Efficient logistics ensuring consistent and timely global deliveries."
                    }
                    ].map((item, idx) => (
                    <div
                      key={idx}
                      className="min-w-[260px] p-6 rounded-2xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border shadow-lg"
                    >
                      <item.icon className="w-10 h-10 text-amber-500 mb-3" />
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-sm opacity-70">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>  
            </div>
          </div>
        </div>
        <div onClick={scrollDown} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-amber-500" />
        </div>
      </section>

      <section className={`py-16 px-4 ${theme.secondaryBg}`}>
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className={`${theme.cardBg} p-8 rounded-2xl text-center transform hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl border ${theme.cardBorder}`}>
              <stat.icon className="w-14 h-14 mx-auto mb-4 text-amber-500" />
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent mb-2">{stat.number}</div>
              <div className="text-sm opacity-70 font-semibold">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">What We Offer</h2>
            <p className="text-xl opacity-70">Premium products delivered globally with care</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: "🍒", title: "Fruits", desc: "Premium quality fresh fruits", color: "from-red-500 to-pink-500" },
              { icon: "🌶", title: "Spices", desc: "Authentic Indian spices", color: "from-orange-500 to-red-600" },
              { icon: "🍚", title: "Food Grains", desc: "Top-grade cereals & pulses", color: "from-yellow-500 to-amber-600" },
              { icon: Beaker, title: "Basic Chemicals", desc: "Industrial & Lab grade", color: "from-blue-500 to-purple-600" }
            ].map((item, idx) => (
              <div key={idx} className={`${theme.cardBg} p-8 rounded-2xl text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border ${theme.cardBorder} group`}>
                {typeof item.icon === "string" ? (
                  <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                ) : (
                  <item.icon className="w-16 h-16 mx-auto mb-6 text-amber-500 transform group-hover:scale-110 transition-transform" />
                )}
                <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>{item.title}</h3>
                <p className="opacity-70 text-lg">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-24 px-4 ${theme.secondaryBg}`}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-xl opacity-70">Committed to excellence in every shipment</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: CheckCircle, text: "Strict Quality Control", desc: "Rigorous testing standards" },
              { icon: Shield, text: "International Standards", desc: "Certified and compliant" },
              { icon: Package, text: "Hygienic Packaging", desc: "Safe and secure delivery" },
              { icon: Clock, text: "Reliable Logistics", desc: "On-time worldwide shipping" }
            ].map((item, idx) => (
              <div key={idx} className={`${theme.cardBg} p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 border ${theme.cardBorder}`}>
                <item.icon className="w-14 h-14 text-amber-500 mb-4" />
                <h3 className="font-bold text-xl mb-2">{item.text}</h3>
                <p className="opacity-70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className={`${theme.cardBg} rounded-3xl p-12 md:p-16 text-center shadow-2xl border ${theme.cardBorder} relative overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-orange-600/10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Trading?</h2>
              <p className="text-xl mb-8 opacity-80">Get in touch with us today for premium quality products</p>
              <button 
                onClick={() => setCurrentPage('contact')}
                className="bg-gradient-to-r from-amber-500 to-orange-600 px-10 py-5 rounded-full font-semibold text-lg hover:shadow-2xl transition transform hover:scale-105"
              >
                Contact Us Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const ProductsPage = () => (
    <div className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">Our Products</h1>
          <p className="text-xl opacity-70">Discover our premium selection of global trade products</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg scale-105'
                  : `${theme.cardBg} ${theme.text} hover:shadow-md`
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className={`${theme.cardBg} rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 border ${theme.cardBorder}`}
              onClick={() => setSelectedProduct(product)}
            >
              <div className="aspect-square bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center p-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-orange-500/0 group-hover:from-amber-500/10 group-hover:to-orange-500/10 transition-all duration-300"></div>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-xl">{product.name}</h3>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-amber-500" />
                  <span className="text-sm opacity-70">{product.origin}</span>
                </div>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-amber-500 text-amber-500' : 'text-gray-300'}`} 
                    />
                  ))}
                  <span className="text-sm ml-2 opacity-70">({product.rating})</span>
                </div>
                
                <p className="text-sm opacity-70 mb-4 line-clamp-2">{product.description}</p>
                
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentPage('contact');
                  }}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-600 py-3 rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-105"
                >
                  Inquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProduct(null)}>
          <div className={`${theme.cardBg} rounded-3xl max-w-4xl w-full p-8 max-h-[90vh] overflow-y-auto`} onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">{selectedProduct.name}</h2>
              <button onClick={() => setSelectedProduct(null)} className="text-4xl hover:text-amber-500 transition">&times;</button>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="aspect-square bg-gradient-to-br from-amber-50 to-orange-50 dark:from-slate-700 dark:to-slate-800 rounded-2xl flex items-center justify-center p-12">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-amber-500" />
                  <span className="text-lg">Origin: <strong>{selectedProduct.origin}</strong></span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-6 h-6 ${i < Math.floor(selectedProduct.rating) ? 'fill-amber-500 text-amber-500' : 'text-gray-300'}`} />
                  ))}
                  <span className="ml-2 text-lg">({selectedProduct.rating})</span>
                </div>
                <p className="text-lg leading-relaxed">{selectedProduct.description}</p>
                <div className={`${theme.secondaryBg} p-6 rounded-xl`}>
                  <h4 className="font-bold text-lg mb-3">Product Details</h4>
                  <div className="space-y-2">
                    <p><strong>Category:</strong> {selectedProduct.category}</p>
                    <p><strong>Origin:</strong> {selectedProduct.origin}</p>
                    <p><strong>Quality:</strong> Premium Export Grade</p>
                  </div>
                </div>
                <button 
                  onClick={() => {
                    setSelectedProduct(null);
                    setCurrentPage('contact');
                  }}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-600 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transition transform hover:scale-105"
                >
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  const AboutPage = () => (
    <div className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">About Us</h1>
          <p className="text-xl opacity-70">Your Trusted Partner in Global Trade</p>
        </div>
        
        <div className={`${theme.cardBg} rounded-3xl p-8 md:p-12 mb-12 shadow-2xl border ${theme.cardBorder}`}>
          <h2 className="text-4xl font-bold mb-6 text-amber-500">Who We Are</h2>
          <p className="text-lg mb-6 leading-relaxed opacity-90">
            Narayan Jibhau Export Import is an emerging Indian export-import company focused on supplying high-quality basic chemical and food products to international markets. As a growing business, we are committed to building a strong global presence through honest trade practices, quality sourcing, and reliable service.
          </p>
          <p className="text-lg mb-6 leading-relaxed opacity-90">
            Our business activities cover agricultural products, spices, food grains, and customized export solutions based on customer requirements. While we are new to the international trade industry, our approach is driven by transparency, careful product selection, and a long-term vision of creating trusted partnerships with buyers and suppliers worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className={`${theme.cardBg} rounded-3xl p-8 shadow-2xl border ${theme.cardBorder} transform hover:scale-105 transition-all`}>
            <div className="text-6xl mb-6">🎯</div>
            <h3 className="text-3xl font-bold mb-4 text-amber-500">Our Vision</h3>
            <p className="text-lg leading-relaxed opacity-90">
              To become a globally recognized trading brand, known for our commitment to quality, integrity, and customer satisfaction in the international trade industry.
            </p>
          </div>

          <div className={`${theme.cardBg} rounded-3xl p-8 shadow-2xl border ${theme.cardBorder} transform hover:scale-105 transition-all`}>
            <div className="text-6xl mb-6">🚀</div>
            <h3 className="text-3xl font-bold mb-4 text-amber-500">Our Mission</h3>
            <p className="text-lg leading-relaxed opacity-90">
              Delivering excellence through ethical trade practices, quality assurance, and building sustainable partnerships that benefit all stakeholders in the supply chain.
            </p>
          </div>
        </div>

        <div className={`${theme.cardBg} rounded-3xl p-8 md:p-12 shadow-2xl mb-12 border ${theme.cardBorder}`}>
          <h3 className="text-4xl font-bold mb-8 text-center text-amber-500">Our Certifications</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {['APEDA License', 'Global Network', 'Customs Expert', 'Insured Shipping', 'Quality Assured', 'FSSAI Approved'].map((badge, idx) => (
              <span key={idx} className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg hover:scale-110 transition-transform">
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className={`${theme.cardBg} rounded-3xl p-8 md:p-12 shadow-2xl border ${theme.cardBorder}`}>
          <h3 className="text-4xl font-bold mb-10 text-center text-amber-500">Office in India</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-10 h-10 text-white" />
              </div>
              <h4 className="font-bold text-xl mb-3">Location</h4>
              <p className="opacity-70 text-lg">Boisar, Mumbai</p>
              <p className="opacity-70 text-lg">Maharashtra, India</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h4 className="font-bold text-xl mb-3">Phone</h4>
              <a href="tel:+919834410590" className="text-amber-500 hover:underline text-lg">
                +91 98344 10590
              </a>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <h4 className="font-bold text-xl mb-3">Email</h4>
              <a href="mailto:narayanjenterprise@gmail.com" className="text-amber-500 hover:underline break-all text-lg">
                narayanjenterprise@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = async () => {
      if (!formData.name || !formData.email || !formData.message) {
        alert("Please fill all required fields");
        return;
      }

      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formData,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        alert("Thank you for your message! We will contact you soon.");

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } catch (error) {
        alert("Failed to send message. Please try again later.");
      }
    };

    return (
      <div className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl opacity-70">We'd love to hear from you</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* LEFT SIDE */}
            <div className="space-y-6">
              <div className={`${theme.cardBg} p-8 rounded-2xl shadow-xl border ${theme.cardBorder}`}>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Location</h3>
                    <p className="opacity-70 text-lg">Boisar, Mumbai</p>
                    <p className="opacity-70 text-lg">Maharashtra, India</p>
                  </div>
                </div>
              </div>

              <div className={`${theme.cardBg} p-8 rounded-2xl shadow-xl border ${theme.cardBorder}`}>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Phone</h3>
                    <a
                      href="tel:+919834410590"
                      className="text-amber-500 hover:underline text-lg"
                    >
                      +91 98344 10590
                    </a>
                  </div>
                </div>
              </div>

              <div className={`${theme.cardBg} p-8 rounded-2xl shadow-xl border ${theme.cardBorder}`}>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Email</h3>
                    <a
                      href="mailto:narayanjenterprise@gmail.com"
                      className="text-amber-500 hover:underline text-lg break-all"
                    >
                      narayanjenterprise@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className={`${theme.cardBg} p-8 rounded-2xl shadow-xl border ${theme.cardBorder}`}>
                <h3 className="font-bold text-xl mb-4">Business Hours</h3>
                <div className="space-y-2 opacity-70 text-lg">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE – FORM */}
            <div className={`${theme.cardBg} p-8 rounded-2xl shadow-2xl border ${theme.cardBorder}`}>
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>

              <div className="space-y-5">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  className={`w-full ${isDarkMode ? "bg-slate-700" : "bg-gray-100"} border ${theme.cardBorder} rounded-xl px-5 py-4`}
                />

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email *"
                  className={`w-full ${isDarkMode ? "bg-slate-700" : "bg-gray-100"} border ${theme.cardBorder} rounded-xl px-5 py-4`}
                />

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className={`w-full ${isDarkMode ? "bg-slate-700" : "bg-gray-100"} border ${theme.cardBorder} rounded-xl px-5 py-4`}
                />

                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className={`w-full ${isDarkMode ? "bg-slate-700" : "bg-gray-100"} border ${theme.cardBorder} rounded-xl px-5 py-4`}
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Your Message *"
                  className={`w-full ${isDarkMode ? "bg-slate-700" : "bg-gray-100"} border ${theme.cardBorder} rounded-xl px-5 py-4`}
                />

                <button
                  onClick={sendEmail}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-600 py-4 rounded-xl font-semibold text-lg text-white hover:shadow-2xl transition transform hover:scale-105"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} transition-colors duration-300`}>
      <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? `${theme.headerBg} backdrop-blur-lg shadow-lg` : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
             <img
                src={logo}
                alt="logo"
                className="w-24 h-16 object-contain text-black dark:text-white"
              />
              <div>
                <h1 className="text-xl font-bold">Narayan Jibhau</h1>
                <p className="text-xs text-amber-500">Export Import</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => goToPage("home")}
                className={`hover:text-amber-500 transition ${
                  currentPage === "home" ? "text-amber-500 font-semibold" : ""
                }`}
              >
                Home
              </button>

              <button
                onClick={() => goToPage("products")}
                className={`hover:text-amber-500 transition ${
                  currentPage === "products" ? "text-amber-500 font-semibold" : ""
                }`}
              >
                Products
              </button>

              <button
                onClick={() => goToPage("about")}
                className={`hover:text-amber-500 transition ${
                  currentPage === "about" ? "text-amber-500 font-semibold" : ""
                }`}
              >
                About
              </button>

              <button
                onClick={() => goToPage("contact")}
                className={`hover:text-amber-500 transition ${
                  currentPage === "contact" ? "text-amber-500 font-semibold" : ""
                }`}
              >
                Contact
              </button>              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full hover:bg-amber-500/20 transition"
              >
                {isDarkMode ? <Sun className="w-6 h-6 text-amber-500" /> : <Moon className="w-6 h-6 text-amber-600" />}
              </button>
            </nav>

            <div className="flex items-center gap-3 md:hidden">
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full hover:bg-amber-500/20 transition"
              >
                {isDarkMode ? <Sun className="w-6 h-6 text-amber-500" /> : <Moon className="w-6 h-6 text-amber-600" />}
              </button>
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>

          {menuOpen && (
            <nav className="md:hidden mt-4 space-y-4 pb-4">
              <button onClick={() => { setCurrentPage('home'); setMenuOpen(false); }} className="block w-full text-left hover:text-amber-500 transition py-2">Home</button>
              <button onClick={() => { setCurrentPage('products'); setMenuOpen(false); }} className="block w-full text-left hover:text-amber-500 transition py-2">Products</button>
              <button onClick={() => { setCurrentPage('about'); setMenuOpen(false); }} className="block w-full text-left hover:text-amber-500 transition py-2">About</button>
              <button onClick={() => { setCurrentPage('contact'); setMenuOpen(false); }} className="block w-full text-left hover:text-amber-500 transition py-2">Contact</button>
            </nav>
          )}
        </div>
      </header>

      {currentPage === 'home' && <HomePage />}
      {currentPage === 'products' && <ProductsPage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contact' && <ContactPage />}

      <footer className={`${isDarkMode ? 'bg-slate-950' : 'bg-gray-800 text-white'} py-12 px-4`}>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-amber-500">Narayan Jibhau</h3>
              <p className="opacity-70">Your honest partner in global Export Import</p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center hover:bg-amber-500/30 transition">
                  <Facebook className="w-5 h-5 text-amber-500" />
                </a>
                <a href="https://x.com/EximNarayan" className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center hover:bg-amber-500/30 transition">
                  <Twitter className="w-5 h-5 text-amber-500" />
                </a>
                <a href="https://www.linkedin.com/in/narayan-jibhau-export-import-b9896b3a1" className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center hover:bg-amber-500/30 transition">
                  <Linkedin className="w-5 h-5 text-amber-500" />
                </a>
                <a href="https://www.instagram.com/narayan_jibhau_export_import/" className="w-10 h-10 bg-amber-500/20 rounded-full flex items-center justify-center hover:bg-amber-500/30 transition">
                  <Instagram className="w-5 h-5 text-amber-500" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button
                  onClick={() => goToPage("home")}
                  className="block hover:text-amber-500 transition"
                >
                  Home
                </button>

                <button
                  onClick={() => goToPage("products")}
                  className="block hover:text-amber-500 transition"
                >
                  Products
                </button>

                <button
                  onClick={() => goToPage("about")}
                  className="block hover:text-amber-500 transition"
                >
                  About Us
                </button>             
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Products</h4>
              <div className="space-y-2 opacity-70">
                <p>Fruits</p>
                <p>Spices</p>
                <p>Food Grains</p>
                <p>Basic Chemical</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Contact</h4>
              <div className="space-y-2 opacity-70">
                <p>Boisar, Mumbai, Maharashtra, India</p>
                <p>+91 98344 10590</p>
                <p className="break-all">narayanjenterprise@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center opacity-70">
            <p>© 2025 Narayan Jibhau Export Import. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App
