"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import TagBadge from "@/components/ui/TagBadge";

interface Props {
  post: {
    category: string;
    frontmatter: {
      title: string;
      description: string;
      thumbnail: string;
      date: string;
      slug: string;
      tag: string[];
    };
  };
}

const PostCard = ({ post }: Props) => {
  const {
    category,
    frontmatter: { title, description, thumbnail, date, slug, tag },
  } = post;
  const router = useRouter();

  return (
    <div
      className={"flex flex-col-reverse md:flex-row gap-3 cursor-pointer group"}
      onClick={() => router.push(`/blog/${category}/${slug}`)}
    >
      <div className={"w-full md:w-4/6 flex flex-col justify-between"}>
        <div>
          <div className={"w-full"}>{category}</div>
          <h6
            className={
              "text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors"
            }
          >
            {title}
          </h6>
          <p className={"dark:text-gray-400 mb-2"}>{description}</p>
        </div>
        <div className={"flex gap-2 items-center"}>
          <span className={"text-xs text-gray-400"}>{date}</span>
          {tag.map((tagName, index) => (
            <TagBadge key={tagName + index} tagName={tagName} />
          ))}
        </div>
      </div>
      <div
        className={
          "h-36 w-full md:w-2/6 relative rounded overflow-hidden border"
        }
      >
        <Image
          src={thumbnail}
          alt={"이미지"}
          fill
          className={
            "object-cover group-hover:scale-105 transition-transform bg-white"
          }
        />
      </div>
    </div>
  );
};

export default PostCard;
