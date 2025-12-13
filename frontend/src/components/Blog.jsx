import { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import { API_URL } from '../config';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <section id="blog" className="min-h-screen bg-gradient-to-b from-white to-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-100 rounded-full text-emerald-700 text-sm font-semibold mb-4">Insights</span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent inline-block">Recent Blogs</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Explore insights and stories where data science, machine learning, and innovation meet.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.length > 0 ? (
              posts.map(post => (
                <BlogCard key={post._id || post.id} post={post} />
              ))
            ) : (
              <div className="col-span-full text-center text-slate-500">
                <p>No blog posts found. Ensure the backend is running.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}