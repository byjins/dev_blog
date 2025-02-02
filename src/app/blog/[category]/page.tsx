import React from "react";
import { getPostsByCategory } from "@/lib/posts";
import PostCard from "@/components/ui/PostCard";

interface Props {
  params: Promise<{ category: string }>;
}
// 카테고리 뱃지 클릭 시 해당 카테고리 페이지만 나와야함.
const CategoryPage = async ({ params }: Props) => {
  const category = (await params).category;

  const filteredContent = getPostsByCategory(category);

  return (
    <article className={"flex flex-col gap-6"}>
      {filteredContent.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </article>
  );
};

export default CategoryPage;
