/**
 * Parse YAML frontmatter from markdown content.
 * Expects format:
 * ---
 * key: value
 * ---
 * # Content starts here
 */
export function parseFrontmatter(markdown) {
  const fenceMatch = markdown.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  
  if (!fenceMatch) {
    return { frontmatter: {}, content: markdown };
  }

  const [, rawFrontmatter, content] = fenceMatch;
  const frontmatter = {};

  // Simple YAML parser for key: value pairs
  const lines = rawFrontmatter.split('\n');
  lines.forEach((line) => {
    const match = line.match(/^(\w+):\s*(.+)$/);
    if (match) {
      const [, key, value] = match;
      // Parse values: handle arrays, strings, booleans
      if (value.startsWith('[') && value.endsWith(']')) {
        // Array: [a, b, c] -> ['a', 'b', 'c']
        frontmatter[key] = value
          .slice(1, -1)
          .split(',')
          .map((v) => v.trim().replace(/^["']|["']$/g, ''));
      } else if (value === 'true' || value === 'false') {
        frontmatter[key] = value === 'true';
      } else {
        // Remove quotes if present
        frontmatter[key] = value.replace(/^["']|["']$/g, '');
      }
    }
  });

  return { frontmatter, content };
}

/**
 * Fetch a markdown file and parse its frontmatter.
 */
export async function fetchAndParseBlog(slug) {
  try {
    const res = await fetch(`/content/blog/${slug}.md`);
    if (!res.ok) return null;
    const markdown = await res.text();
    const { frontmatter, content } = parseFrontmatter(markdown);
    return { ...frontmatter, slug, content };
  } catch (e) {
    console.error(`Error fetching blog ${slug}:`, e);
    return null;
  }
}

/**
 * Fetch all blog metadata by reading a manifest or scanning directory.
 * For now, assumes a static list of slugs. Can be extended to fetch a manifest.
 */
export async function fetchAllBlogMetadata(slugs) {
  const blogs = await Promise.all(
    slugs.map((slug) => fetchAndParseBlog(slug))
  );
  return blogs.filter(Boolean); // Remove nulls
}
