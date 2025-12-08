import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from "react";

import type { BlogPost } from './BlogPost';
import './BlogPostDetail.css';

type BlogPostDetailProps = {
  posts: BlogPost[];
};

export default function BlogPostDetail({ posts }: BlogPostDetailProps) {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  

  const post = posts.find(p => p.id === Number(id));
  

  
  if (!post) {
    return (
      <div className="post-not-found">
        <h1>Post not found</h1>
        <p>The post you're looking for doesn't exist.</p>
        <button onClick={() => navigate('/')} className="back-btn">
          ← Back to Posts
        </button>
      </div>
    );
  }

  return (
    <div className="blog-post-detail">
      <div className="post-header">
        
        <h1 className="post-title">{post.title}</h1>
        <h4 className="post-author">Author: {post.author}</h4>
        <h4 className="post-date">{post.date}</h4>
      </div>
      
      <div className="post-content">
        <div className="post-text">{post.text}</div>
      </div>
      
      <div className="post-footer">
        <button
          onClick={() => navigate('/')}
          className="back-btn"
        >
          ← Back to Posts
        </button>
      </div>
    </div>
  );
}
