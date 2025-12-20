import { useState } from "react";
import { Link } from "react-router-dom";
import "./BlogPosts.css";


export type BlogPost = {
  id: number;
  author: string;
  title: string;
  date?: string;
  description?: string;
  text: string;
  image?: string;
};

type BlogPostsProps = {
  posts: BlogPost[];
};

// ----------- Greek Dates Parser ----------------
const monthsGR: Record<string, number> = {
  "Ιανουαρίου": 0,
  "Φεβρουαρίου": 1,
  "Μαρτίου": 2,
  "Απριλίου": 3,
  "Μαΐου": 4,
  "Ιουνίου": 5,
  "Ιουλίου": 6,
  "Αυγούστου": 7,
  "Σεπτεμβρίου": 8,
  "Οκτωβρίου": 9,
  "Νοεμβρίου": 10,
  "Δεκεμβρίου": 11,
};

function parseGreekDate(dateStr: string): Date {
  const parts = dateStr.split(" ");
  const day = Number(parts[0]);
  const month = monthsGR[parts[1]];
  const year = Number(parts[2]);
  return new Date(year, month, day);
}

// ------------------------------------------------

export default function BlogPosts({ posts }: BlogPostsProps) {
const [sortedPosts, setSortedPosts] = useState(() =>
  [...posts].sort(
    (a, b) =>
      parseGreekDate(b.date!).getTime() -
      parseGreekDate(a.date!).getTime()
  )
);

  const sortOldToNew = () => {
    const sorted = [...sortedPosts].sort((a, b) =>
      parseGreekDate(a.date!).getTime() - parseGreekDate(b.date!).getTime()
    );
    setSortedPosts(sorted);
  };

  const sortNewToOld = () => {
    const sorted = [...sortedPosts].sort((a, b) =>
      parseGreekDate(b.date!).getTime() - parseGreekDate(a.date!).getTime()
    );
    setSortedPosts(sorted);
  };

  return (
    <div className="blog-posts-container">
      <header className="blog-header">
        <h1>Τα άρθρα μου</h1>

        <div className="sort-buttons">
          <button onClick={sortOldToNew} className="sort-btn">
            Παλαιότερο → Νεότερο
          </button>

          <button onClick={sortNewToOld} className="sort-btn">
            Νεότερο → Παλαιότερο
          </button>
        </div>
      </header>

      <div className="posts-grid">
        {sortedPosts.map((post) => (
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
                  Read More <span className="btn-arrow">→</span>
                </button>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
