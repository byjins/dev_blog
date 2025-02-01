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
    <div
      className={"flex flex-col-reverse md:flex-row gap-3 cursor-pointer group"}
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
          <p className={"dark:text-gray-400 mb-2"}>{content}</p>
        </div>
        <span className={"text-gray-400"}>{date}</span>
      </div>
      <div
        className={
          "h-36 w-full md:w-2/6 relative rounded overflow-hidden border"
        }
      >
        <Image
          src={img}
          alt={"이미지"}
          fill
          className={"object-cover group-hover:scale-105 transition-transform"}
        />
      </div>
    </div>
  );
};

export default PostCard;
