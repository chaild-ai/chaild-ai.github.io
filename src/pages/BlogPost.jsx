import React from "react";
import { useParams } from "react-router-dom";
import { blogSection } from "../portfolio";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogSection.blogs.find((b) => b.slug === slug);
  if (!post) return <div>Post not found</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      {/* internal pages: render content here or link out */}
      <a href={post.url} target="_blank" rel="noreferrer">Read more</a>
    </div>
  );
}