import React from "react";
import PostCard from "@/components/ui/PostCard";

const BADGE = [
  "asdf",
  "asdf",
  "asdf",
  "asdf",
  "asdf",
  "asdf",
  "asdf",
  "asdf",
  "asdf",
  "asdf",
  "asdf",
  "asdf",
  "asdf",
];

const Page = () => {
  return (
    <div>
      <ul className={"flex gap-3 my-5 overflow-y-scroll"}>
        <li
          className={
            "flex justify-center items-center h-4 bg-gray-700 font-bold text-white p-4 rounded border dark:bg-white dark:text-black"
          }
        >
          All
        </li>
        {BADGE.map((item) => (
          <li
            className={
              "flex justify-center items-center h-4 bg-dark p-4 rounded border"
            }
          >
            {item}
          </li>
        ))}
      </ul>
      <article className={"flex flex-col gap-6"}>
        <PostCard
          category={"Next"}
          title={"이게뭐야"}
          content={"컨텐트"}
          img={"/images/test1.png"}
          date={"2024-10-20"}
        />
        <PostCard
          category={"Typescript"}
          title={"이게뭐야"}
          content={"컨텐트"}
          img={"/images/test1.png"}
          date={"2024-10-20"}
        />
        <PostCard
          category={"TDD"}
          title={"이게뭐야"}
          content={"컨텐트"}
          img={"/images/test1.png"}
          date={"2024-10-20"}
        />
      </article>
    </div>
  );
};

export default Page;
