import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Tag, Trash2, Edit } from 'lucide-react';

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/posts/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Post not found');
        }
        return res.json();
      })
      .then(data => {
        setPost(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching post:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

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

  const handleEdit = () => {
    const password = window.prompt('Enter admin password to edit:');
    if (password) {
      navigate(`/edit-post/${id}`, { state: { password } });
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;
    
    const password = window.prompt('Enter admin password to delete:');
    if (!password) return;

    try {
      const res = await fetch(`http://localhost:5000/api/posts/${id}`, {
        method: 'DELETE',
        headers: {
          'x-admin-password': password
        }
      });

      if (res.ok) {
        navigate('/blog');
      } else {
        alert('Failed to delete post');
      }
    } catch (err) {
      console.error(err);
      alert('Error deleting post');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-slate-50 pt-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-slate-50 pt-20 gap-4">
        <h2 className="text-2xl font-bold text-slate-900">Post not found</h2>
        <Link to="/blog" className="text-emerald-600 hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-slate-50 pt-24 pb-16">
      {/* Hero Image Section */}
      <div className="w-full h-[400px] relative mb-12">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-4 sm:p-8 max-w-7xl mx-auto">
          <div className="flex justify-between items-start mb-6">
            <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <div className="flex gap-2">
              <button onClick={handleEdit} className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full hover:bg-emerald-600/50">
                <Edit className="w-4 h-4" /> Edit
              </button>
              <button onClick={handleDelete} className="inline-flex items-center gap-2 text-white/80 hover:text-red-200 transition-colors backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full hover:bg-red-600/50">
                <Trash2 className="w-4 h-4" /> Delete
              </button>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-sm">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm sm:text-base font-medium">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-emerald-400" />
              <span>{post.author || 'Admin'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-emerald-400" />
              <span>{formatDate(post.createdAt)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-emerald-400" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12">
          {/* Excerpt */}
          {post.excerpt && (
            <div className="text-xl text-slate-600 leading-relaxed mb-8 font-medium border-l-4 border-emerald-500 pl-6 italic">
              {post.excerpt}
            </div>
          )}

          {/* HTML Content */}
          <div 
            className="prose prose-slate prose-lg max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-p:text-slate-600 prose-a:text-emerald-600 hover:prose-a:text-emerald-500 prose-img:rounded-xl prose-strong:text-slate-900"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Tags Section */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-slate-100">
              <h3 className="text-sm font-semibold text-slate-900 mb-4 flex items-center gap-2 uppercase tracking-wider">
                <Tag className="w-4 h-4 text-emerald-600" /> Related Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {Array.isArray(post.tags) ? post.tags.map((tag, index) => (
                  <span key={index} className="bg-slate-50 text-slate-600 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-emerald-50 hover:text-emerald-700 transition-colors cursor-default border border-slate-200">
                    {tag}
                  </span>
                )) : (
                  <span className="bg-slate-50 text-slate-600 px-4 py-1.5 rounded-full text-sm font-medium border border-slate-200">
                    {post.tags}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}