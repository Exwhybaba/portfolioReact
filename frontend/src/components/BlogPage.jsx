import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, MessageSquare, ArrowRight, Folder, Plus } from 'lucide-react';
import { API_URL } from '../config';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/api/posts`)
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching posts:", err);
        setLoading(false);
      });
  }, []);

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  // Calculate category counts dynamically from posts
  const categories = Object.values(posts.reduce((acc, post) => {
    const cat = post.category;
    if (!cat) return acc;
    if (!acc[cat]) acc[cat] = { name: cat, count: 0 };
    acc[cat].count++;
    return acc;
  }, {})).sort((a, b) => a.name.localeCompare(b.name));

  const tags = [
    "Analysis", "agritech", "Business", "Dashboard", "data analytics", 
    "data science", "deep learning", "innovation", "machine learning", 
    "Technology", "Visualization", "Web development"
  ];

  const filteredPosts = selectedCategory 
    ? posts.filter(post => post.category === selectedCategory)
    : posts;

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      {/* Breadcrumb Header */}
      <div className="bg-slate-900 text-white py-12 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link>
              <span>&gt;</span>
              <span className="text-emerald-400">Blog</span>
            </div>
          </div>
          <Link 
            to="/create-post" 
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            <Plus className="w-4 h-4" />
            Create Post
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content */}
          <div className="lg:w-2/3">
            {loading ? (
              <div className="flex justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
              </div>
            ) : filteredPosts.length > 0 ? (
              filteredPosts.map(post => (
                <article key={post._id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-10 hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-64 sm:h-80 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/800x600?text=No+Image';
                      }}
                    />
                    <div className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
                      {post.category}
                    </div>
                  </div>
                  
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>By {post.author || 'Admin'}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.createdAt)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="w-4 h-4" />
                        <span>{post.comments?.length || 0} Comments</span>
                      </div>
                    </div>

                    <Link to={`/blog/${post._id || post.id}`}>
                      <h2 className="text-2xl font-bold text-slate-900 mb-4 hover:text-emerald-600 transition-colors cursor-pointer">
                        {post.title}
                      </h2>
                    </Link>
                    
                    <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <Link to={`/blog/${post._id || post.id}`} className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors group">
                      Read More 
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              ))
            ) : (
              <div className="text-center py-10 text-slate-500">No posts found{selectedCategory ? ` in ${selectedCategory}` : ''}.</div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            
            {/* Search Widget */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 border-l-4 border-emerald-500 pl-3">Search</h3>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full pl-4 pr-10 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
                <Search className="absolute right-3 top-3.5 w-5 h-5 text-slate-400" />
              </div>
            </div>

            {/* Recent Posts Widget */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 border-l-4 border-emerald-500 pl-3">Recent Posts</h3>
              <ul className="space-y-4">
                {posts.slice(0, 5).map(post => (
                  <li key={post._id} className="flex gap-3 group cursor-pointer">
                    <div className="w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                      <img 
                        src={post.image} 
                        alt="" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/100?text=No+Img';
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-2">
                        {post.title}
                      </h4>
                      <span className="text-xs text-slate-500">{formatDate(post.createdAt)}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories Widget */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 border-l-4 border-emerald-500 pl-3">Categories</h3>
              <ul className="space-y-2">
                <li 
                  onClick={() => setSelectedCategory(null)}
                  className={`flex justify-between items-center cursor-pointer transition-colors border-b border-slate-50 pb-2 last:border-0 ${!selectedCategory ? 'text-emerald-600 font-bold' : 'text-slate-600 hover:text-emerald-600'}`}
                >
                  <div className="flex items-center gap-2">
                    <Folder className="w-4 h-4" />
                    <span>All Categories</span>
                  </div>
                  <span className="text-xs bg-slate-100 px-2 py-1 rounded-full text-slate-500">{posts.length}</span>
                </li>
                {categories.map((cat, idx) => (
                  <li key={idx} 
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`flex justify-between items-center cursor-pointer transition-colors border-b border-slate-50 pb-2 last:border-0 ${selectedCategory === cat.name ? 'text-emerald-600 font-bold' : 'text-slate-600 hover:text-emerald-600'}`}
                  >
                    <div className="flex items-center gap-2">
                      <Folder className="w-4 h-4" />
                      <span>{cat.name}</span>
                    </div>
                    <span className="text-xs bg-slate-100 px-2 py-1 rounded-full text-slate-500">{cat.count}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Tags Widget */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-4 border-l-4 border-emerald-500 pl-3">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                  <span key={idx} className="text-xs font-medium bg-slate-100 text-slate-600 px-3 py-1.5 rounded hover:bg-emerald-600 hover:text-white transition-colors cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}