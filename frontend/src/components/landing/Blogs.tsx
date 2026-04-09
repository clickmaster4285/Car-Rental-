import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Calendar, User, Clock, ArrowRight, TrendingUp, Heart, MessageCircle, Share2 } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "10 Tips to Maximize Your Car Rental Fleet Efficiency",
    excerpt: "Discover proven strategies to reduce downtime, optimize utilization, and increase revenue across your rental fleet.",
    image: "/images/blogs/blog1.webp",
    author: "Sarah Johnson",
    date: "Mar 15, 2025",
    readTime: "5 min read",
    category: "Fleet Management",
    likes: 234,
    comments: 18,
  },
  {
    id: 2,
    title: "How AI is Transforming the Car Rental Industry",
    excerpt: "From dynamic pricing to predictive maintenance, explore how artificial intelligence is reshaping car rentals.",
    image: "/images/blogs/blog2.webp",
    author: "Michael Chen",
    date: "Mar 10, 2025",
    readTime: "7 min read",
    category: "Technology",
    likes: 189,
    comments: 24,
  },
  {
    id: 3,
    title: "The Ultimate Guide to Contactless Rentals",
    excerpt: "Implement seamless digital check-ins, keyless entry, and touchless payments for modern customers.",
    image: "/images/blogs/blog3.png",
    author: "Emily Rodriguez",
    date: "Mar 5, 2025",
    readTime: "6 min read",
    category: "Customer Experience",
    likes: 312,
    comments: 42,
  },
];

const featuredPost = {
  title: "2025 Car Rental Trends: What's Shaping the Future",
  excerpt: "From electric vehicle adoption to subscription-based models, discover the key trends revolutionizing car rental businesses in 2025.",
  image: "/images/blogs/blog.jpg",
  author: "David Williams",
  date: "Mar 18, 2025",
  readTime: "8 min read",
  category: "Industry Trends",
};

const Blog = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
  <section id="blogs" className="py-20 md:py-28 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Resources &{' '}
            <span className="text-primary">
              Industry Insights
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Expert advice, industry trends, and actionable tips to grow your car rental business
          </p>
        </div>

        {/* Featured Post */}
        <div className={`mb-16 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-all duration-500">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Image */}
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-medium">
                    Featured
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-medium">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{featuredPost.author}</p>
                      <p className="text-xs text-muted-foreground">Senior Industry Expert</p>
                    </div>
                  </div>
                  
             
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <div
              key={post.id}
              className={`group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${idx * 150 + 300}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 rounded bg-primary/90 backdrop-blur-sm text-white text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-foreground">{post.author}</span>
                  </div>

                  
                </div>
              </div>
            </div>
          ))}
        </div>

     
      </div>
    </section>
  );
};

export default Blog;