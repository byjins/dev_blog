import React from "react";
import { getPostBySlug } from "@/lib/mdx";
import PostBody from "@/components/MDX/PostBody";
import Giscus from "@/components/ui/Giscus";
import PostHeader from "@/components/MDX/PostHeader";
import TableOfContents from "@/components/Layout/TableOfContents";
import { parseToc } from "@/lib/posts";

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

// 선택한 게시글의 디테일 페이지만 보여아함.
const DetailPage = async ({ params }: Props) => {
  const { category, slug } = await params;
  const { content, frontmatter } = await getPostBySlug(category, slug);
  const { title, date, tag } = frontmatter;
  const toc = parseToc(content);

  return (
    <div>
      <TableOfContents toc={toc} />
      <PostHeader category={category} title={title} date={date} tag={tag} />
      <PostBody content={content} />
      <Giscus />
    </div>
  );
};

export default DetailPage;
