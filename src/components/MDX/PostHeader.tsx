import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  date: string;
  category: string;
}

const PostHeader = ({ category, title, date }: Props) => {
  return (
    <div className={"flex flex-col gap-4 items-center py-10 border-b"}>
      <h1 className={"text-3xl font-bold"}>{title}</h1>
      <Link href={`/blog/${category}`} className={"text-blue-400 font-bold"}>
        {category}
      </Link>
      <p className={"text-xs text-gray-500"}>{date}</p>
    </div>
  );
};

export default PostHeader;
