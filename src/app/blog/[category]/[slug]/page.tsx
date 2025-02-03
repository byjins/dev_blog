import React from "react";
import { getPostBySlug } from "@/lib/mdx";
import PostBody from "@/components/MDX/PostBody";
import { Metadata } from "next";

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

// 선택한 게시글의 디테일 페이지만 보여아함.
const DetailPage = async ({ params }: Props) => {
  const { category, slug } = await params;
  const { content, frontmatter } = await getPostBySlug(category, slug);
  const { title } = frontmatter;
  console.log(frontmatter);
  return (
    <div>
      <h1>{title}</h1>
      <span>{category}</span>
      <article className={"prose"}>
        <PostBody content={content} />
      </article>
    </div>
  );
};

export default DetailPage;
