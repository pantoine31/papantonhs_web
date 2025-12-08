import { Link } from 'react-router-dom';
import './BlogPosts.css';
  
export type BlogPost = {
  id: number;
  author:string;
  title: string;
  date?: string;
  description?: string;
  text: string;
  image?: string;

}
  
type BlogPostsProps = {
  posts: BlogPost[];
};
  
export default function BlogPosts({ posts }: BlogPostsProps) {
  return (
    <div className="blog-posts-container">
      <header className="blog-header">
        <h1>Blog Posts</h1>
      </header>
  
      <div className="posts-grid">
        {posts.map((post) => (
          <article key={post.id} className="blog-post-card">
            <div className="post-content">
              <h2 className="post-title-gen">{post.title}</h2>
              <h4>{post.author}</h4>
              <h4>{post.date}</h4>
              

              
              {post.description && (
                <p className="post-description">{post.description}</p>
              )}
            </div>
  
            <div className="post-footer">
              <Link to={`/post/${post.id}`} className="read-more-link">
                <button className="read-more-btn">
                  Read More
                  <span className="btn-arrow">→</span>
                </button>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
