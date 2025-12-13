import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header"
import Home from "./components/Home"
import BlogPage from "./components/BlogPage"
import CreatePost from "./components/CreatePost"
import BlogPost from "./components/BlogPost"
import EditPost from "./components/EditPost"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <Header/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/edit-post/:id" element={<EditPost />} />
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
              <div className="text-center">
                <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-4">404</h1>
                <p className="text-slate-600">Page not found</p>
              </div>
            </div>
          } />
        </Routes>
      </main>
      <Footer/>
    </Router>
  )
}

export default App
