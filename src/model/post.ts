export interface FrontMatter {
  date: string;
  description: string;
  slug: string;
  thumbnail: string;
  title: string;
  tag: string[];
}

export interface Post {
  category: string;
  slug: string;
  frontmatter: FrontMatter;
}

export interface HeadingItem {
  text: string;
  link: string;
  indent: number;
}
