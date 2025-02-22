import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/content");

export async function getPostBySlug(category: string, slug: string) {
  const fullPath = path.join(postsDirectory, `${category}/${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    content,
    url: `/blog/${category}/${slug}`,
    frontmatter: data,
  };
}
