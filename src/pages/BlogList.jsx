import React from "react";
import { Link } from "react-router-dom";
import { blogSection } from "../portfolio";

export default function BlogList() {
  return (
    <div>
      <h1>{blogSection.title}</h1>
      <ul>
        {blogSection.blogs.map((b) => (
          <li key={b.slug || b.title}>
            <Link to={`/blog/${b.slug}`}>{b.title}</Link>
            <p>{b.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}