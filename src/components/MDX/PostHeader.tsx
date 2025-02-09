import Link from "next/link";
import React from "react";
import TagBadge from "@/components/ui/TagBadge";

interface Props {
  title: string;
  date: string;
  category: string;
  tag: string[];
}

const PostHeader = ({ category, title, date, tag }: Props) => {
  return (
    <div className={"flex flex-col gap-4 items-center py-10 border-b"}>
      <h1 className={"text-3xl font-bold"}>{title}</h1>
      <Link href={`/blog/${category}`} className={"text-blue-400 font-bold"}>
        {category}
      </Link>
      <p className={"text-xs text-gray-500"}>{date}</p>
      <div className={"flex gap-2"}>
        {tag.map((tagName, index) => (
          <TagBadge key={tagName + index} tagName={tagName} />
        ))}
      </div>
    </div>
  );
};

export default PostHeader;
