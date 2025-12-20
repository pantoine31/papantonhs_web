import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { get } from "./util/http";
import type { BlogPost } from "./components/BlogPost";
import BlogPosts from "./components/BlogPost";
import BlogPostDetail from "./components/BlogPostDetail";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Proff from "./components/Proff";
import Footer from './components/Footer';


type RawDataBlogPost = {
  id: number;
  author:string;
  userId: number;
  title: string;
  date: string;
  text: string;
  description:string;
  image?: string;

}

function App() {
  const [fetchedPosts, setFetchedPosts] = useState<BlogPost[]>();
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const data = await get('/data/posts.json') as RawDataBlogPost[];

      const blogPosts = data.map(rawPost => {
        return {
          id: rawPost.id,
          author:rawPost.author,
          title: rawPost.title,
          date:rawPost.date,
          description: rawPost.description,
          text: rawPost.text
        }
      });
      setIsFetching(false);
      setFetchedPosts(blogPosts);
    }
    fetchPosts();
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">          
          {isFetching ? (
            <p id="loading-fallback">Fetching Posts ...</p>
          ) : (
            <Routes>
              <Route 
                path="/" 
                element={fetchedPosts ? <BlogPosts posts={fetchedPosts} /> : null} 
              />
              <Route 
                path="/post/:id" 
                element={fetchedPosts ? <BlogPostDetail posts={fetchedPosts} /> : null} 
              />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/proff" element={<Proff />} />
            </Routes>
          )}
        </main>
        <Footer />
      </div>
      <Analytics />
    </Router>
  );
}

export default App;
