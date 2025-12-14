import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Tag, Trash2, Edit, MessageSquare, ThumbsUp, Heart } from 'lucide-react';
import LoadingScreen from './LoadingScreen';
import { API_URL } from '../config';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [commentForm, setCommentForm] = useState({ author: '', content: '' });
  const [submittingComment, setSubmittingComment] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [userReactions, setUserReactions] = useState({ likes: false, loves: false });

  useEffect(() => {
    fetch(`${API_URL}/api/posts/${id}`)
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

  useEffect(() => {
    const savedReactions = localStorage.getItem(`reactions_${id}`);
    if (savedReactions) {
      setUserReactions(JSON.parse(savedReactions));
    }
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
      const res = await fetch(`${API_URL}/api/posts/${id}`, {
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

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!commentForm.author.trim() || !commentForm.content.trim()) return;

    setSubmittingComment(true);
    try {
      const res = await fetch(`${API_URL}/api/posts/${id}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(commentForm)
      });

      if (res.ok) {
        // Re-fetch the post to get the updated comments list
        const postRes = await fetch(`${API_URL}/api/posts/${id}`);
        const updatedPost = await postRes.json();
        setPost(updatedPost);
        setCommentForm({ author: '', content: '' });
      } else {
        alert('Failed to post comment');
      }
    } catch (err) {
      console.error(err);
      alert('Error posting comment');
    } finally {
      setSubmittingComment(false);
    }
  };

  const handleReaction = async (type) => {
    const isActive = userReactions[type];
    const newReactions = { ...userReactions, [type]: !isActive };
    
    setUserReactions(newReactions);
    localStorage.setItem(`reactions_${id}`, JSON.stringify(newReactions));

    setPost(prev => ({
      ...prev,
      [type]: Math.max(0, (prev[type] || 0) + (isActive ? -1 : 1))
    }));

    try {
      await fetch(`${API_URL}/api/posts/${id}/${type}`, {
        method: isActive ? 'DELETE' : 'PUT'
      });
    } catch (err) {
      console.error(`Error updating ${type}`, err);
    }
  };

  if (showSplash) {
    return <LoadingScreen onComplete={() => setShowSplash(false)} />;
  }

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
    <article className="min-h-screen bg-slate-50 pt-24 pb-16" style={{ animation: 'revealPost 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards' }}>
      <style>{`
        @keyframes revealPost {
          0% { opacity: 0; transform: scale(0.85) translateY(20px); filter: blur(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); filter: blur(0); }
        }
      `}</style>
      {/* Hero Image Section */}
      <div className="w-full h-[400px] relative mb-6 sm:mb-12">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-4 sm:p-8 max-w-7xl mx-auto">
          <div className="hidden sm:flex justify-between items-start mb-6">
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
        {/* Mobile Navigation & Actions */}
        <div className="flex sm:hidden justify-between items-center mb-6">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-slate-600 hover:text-emerald-600 text-xs font-semibold bg-white border border-slate-200 px-3 py-2 rounded-full shadow-sm transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Back
          </Link>
          <div className="flex gap-2">
            <button onClick={handleEdit} className="inline-flex items-center gap-1.5 text-slate-600 hover:text-emerald-600 text-xs font-semibold bg-white border border-slate-200 px-3 py-2 rounded-full shadow-sm transition-colors">
              <Edit className="w-3.5 h-3.5" /> Edit
            </button>
            <button onClick={handleDelete} className="inline-flex items-center gap-1.5 text-red-500 hover:text-red-600 text-xs font-semibold bg-white border border-slate-200 px-3 py-2 rounded-full shadow-sm transition-colors">
              <Trash2 className="w-3.5 h-3.5" /> Delete
            </button>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-12">
          {/* Excerpt */}
          {post.excerpt && (
            <div className="text-xl text-slate-600 leading-relaxed mb-8 font-medium border-l-4 border-emerald-500 pl-6 italic">
              {post.excerpt}
            </div>
          )}

          {/* Markdown & HTML Content */}
          <div className="prose prose-slate prose-lg max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-p:text-slate-600 prose-a:text-emerald-600 hover:prose-a:text-emerald-500 prose-img:rounded-xl prose-strong:text-slate-900">
            <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
              {post.content}
            </ReactMarkdown>
          </div>
          
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

          {/* Reactions Section */}
          <div className="flex items-center gap-6 mt-8 pt-8 border-t border-slate-100">
            <button 
              onClick={() => handleReaction('likes')}
              className={`flex items-center gap-2 transition-colors group ${userReactions.likes ? 'text-emerald-600' : 'text-slate-600 hover:text-emerald-600'}`}
            >
              <div className={`p-2 rounded-full transition-colors ${userReactions.likes ? 'bg-emerald-100' : 'bg-slate-100 group-hover:bg-emerald-100'}`}>
                <ThumbsUp className={`w-5 h-5 ${userReactions.likes ? 'fill-current' : ''}`} />
              </div>
              <span className="font-semibold">{post.likes || 0} Likes</span>
            </button>
            
            <button 
              onClick={() => handleReaction('loves')}
              className={`flex items-center gap-2 transition-colors group ${userReactions.loves ? 'text-rose-600' : 'text-slate-600 hover:text-rose-600'}`}
            >
              <div className={`p-2 rounded-full transition-colors ${userReactions.loves ? 'bg-rose-100' : 'bg-slate-100 group-hover:bg-rose-100'}`}>
                <Heart className={`w-5 h-5 ${userReactions.loves ? 'fill-current' : ''}`} />
              </div>
              <span className="font-semibold">{post.loves || 0} Loves</span>
            </button>
          </div>

          {/* Comments Section */}
          <div className="mt-16 pt-12 border-t border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-emerald-600" />
              Comments ({post.comments?.length || 0})
            </h3>

            <div className="space-y-8 mb-12">
              {post.comments?.length > 0 ? (
                post.comments.map((comment, index) => (
                  <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold">
                          {comment.author?.charAt(0).toUpperCase() || 'U'}
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900">{comment.author}</h4>
                          <span className="text-xs text-slate-500">{formatDate(comment.createdAt || new Date())}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-700 leading-relaxed">{comment.content}</p>
                  </div>
                ))
              ) : (
                <p className="text-slate-500 italic">No comments yet. Be the first to share your thoughts!</p>
              )}
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
              <h4 className="text-lg font-bold text-slate-900 mb-6">Leave a Comment</h4>
              <form onSubmit={handleCommentSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    required
                    value={commentForm.author}
                    onChange={(e) => setCommentForm({...commentForm, author: e.target.value})}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Comment</label>
                  <textarea 
                    required
                    rows="4"
                    value={commentForm.content}
                    onChange={(e) => setCommentForm({...commentForm, content: e.target.value})}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none resize-none"
                    placeholder="Share your thoughts..."
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={submittingComment}
                  className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50"
                >
                  {submittingComment ? 'Posting...' : 'Post Comment'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}