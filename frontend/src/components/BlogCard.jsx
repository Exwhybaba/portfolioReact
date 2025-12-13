import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BlogCard({ post }) {
  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300 border-slate-200 hover:border-emerald-400 group overflow-hidden bg-white">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-emerald-600 shadow-sm">
          {post.category}
        </div>
      </div>
      <CardHeader>
        <div className="flex items-center gap-4 text-sm text-slate-500 mb-2">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(post.createdAt || post.date)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
        <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-2">
          {post.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-slate-600 line-clamp-3 leading-relaxed">
          {post.excerpt}
        </p>
      </CardContent>
      <CardFooter>
        <Link to={`/blog/${post._id || post.id}`}>
          <Button 
            variant="ghost" 
            className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 p-0 h-auto font-semibold flex items-center gap-2"
          >
            Read Article <ArrowRight className="w-4 h-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}