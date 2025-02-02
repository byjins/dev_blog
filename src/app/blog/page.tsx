import React from "react";
import PostCard from "@/components/ui/PostCard";
import { getAllCategory, getAllPosts } from "@/lib/posts";

// 모든 페이지가 보이는 곳
const Page = () => {
  const posts = getAllPosts();

  return (
    <>
      <article className={"flex flex-col gap-6"}>
        {posts.map((post) => (
          <PostCard key={post.category + post.slug} post={post} />
        ))}
      </article>
    </>
  );
};

export default Page;
