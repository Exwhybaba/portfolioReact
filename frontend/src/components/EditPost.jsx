import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    image: '',
    readTime: '',
    author: '',
    tags: '',
    password: ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        setFormData({
          ...data,
          tags: data.tags ? data.tags.join(', ') : ''
        });
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/posts/${id}`, {
        method: 'PUT',
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
        navigate(`/blog/${id}`);
      } else {
        alert('Failed to update post');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 p-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Edit Post</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Author</label>
            <input type="text" name="author" value={formData.author} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
            <input type="text" name="category" value={formData.category} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Tags</label>
            <input type="text" name="tags" value={formData.tags} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Image URL</label>
            <input type="text" name="image" value={formData.image} onChange={handleChange} className="w-full px-4 py-2 border border-slate-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Excerpt</label>
            <textarea name="excerpt" value={formData.excerpt} onChange={handleChange} rows="3" className="w-full px-4 py-2 border border-slate-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Content (HTML)</label>
            <textarea name="content" value={formData.content} onChange={handleChange} rows="10" className="w-full px-4 py-2 border border-slate-300 rounded-lg font-mono text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Admin Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required className="w-full px-4 py-2 border border-slate-300 rounded-lg" />
          </div>
          <button type="submit" className="w-full bg-emerald-600 text-white font-bold py-3 rounded-lg hover:bg-emerald-700">Update Post</button>
        </form>
      </div>
    </div>
  );
}