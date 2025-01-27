import React from "react";
import Image from "next/image";

interface Props {
  category: string;
  title: string;
  content: string;
  img: string;
  date: string;
}

const PostCard = ({ category, title, content, img, date }: Props) => {
  return (
    <div className={"flex sm:flex-col-reverse gap-3"}>
      <div className={"w-4/6 flex flex-col justify-between"}>
        <div>
          <div className={"w-full"}>{category}</div>
          <h6 className={"text-2xl font-bold mb-2"}>{title}</h6>
          <p className={"dark:text-gray-400 mb-2"}>{content}</p>
        </div>
        <span>{date}</span>
      </div>
      <Image
        src={img}
        alt={"이미지"}
        width={100}
        height={150}
        className={"w-2/6 h-36 rounded sm:w-full"}
      />
    </div>
  );
};

export default PostCard;
