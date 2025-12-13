import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreatePost() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    image: '',
    readTime: '5 min read',
    author: '',
    tags: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([
    "Agritech",
    "Business Development",
    "Data Science & Analytics",
    "Deep Learning",
    "Machine Learning",
    "Technology",
    "Web development"
  ]);

  useEffect(() => {
    fetch('http://localhost:5000/api/posts')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const dbCategories = data.map(post => post.category).filter(Boolean);
          setCategories(prev => [...new Set([...prev, ...dbCategories])].sort());
        }
      })
      .catch(err => console.error("Error fetching categories:", err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-password': formData.password
        },
        body: JSON.stringify({
          ...formData,
          tags: formData.tags.split(',').map(tag => tag.trim())
        }),
      });

      if (response.ok) {
        navigate('/blog');
      } else {
        alert('Failed to create post');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error creating post');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 p-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Create New Blog Post</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Author Name</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
            />
          </div>

          {/* Category & Read Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition-all bg-white"
              >
                <option value="">Select a category</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Read Time</label>
              <input
                type="text"
                name="readTime"
                value={formData.readTime}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
              />
            </div>
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
              placeholder="https://example.com/image.jpg"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Tags (comma separated)</label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="Technology, AI, Coding"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Excerpt</label>
            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              required
              rows="3"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition-all resize-none"
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Content (HTML)</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              required
              rows="10"
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition-all font-mono text-sm"
            />
          </div>

          {/* Admin Password */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Admin Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Publishing...' : 'Publish Post'}
          </button>
        </form>
      </div>
    </div>
  );
}