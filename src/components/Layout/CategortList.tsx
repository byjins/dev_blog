"use client";

import Badge from "@/components/ui/Badge";
import { useState, MouseEvent } from "react";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  categories: string[];
}

const CategoryList = ({ categories }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const [selected, setSelected] = useState("All");

  const isDetailPage = pathname.split("/").length === 4;

  const handleCategoryClick = (e: MouseEvent<HTMLDivElement>) => {
    const { id } = e.currentTarget;
    setSelected(id);
    router.push(`/blog/${id}`);
  };

  const handleAllCategoryClick = (e: MouseEvent<HTMLDivElement>) => {
    const { id } = e.currentTarget;
    setSelected(id);
    router.push(`/blog`);
  };

  return (
    <>
      {!isDetailPage && (
        <ul className={"flex gap-3 my-5 overflow-y-scroll"}>
          <Badge
            id={"All"}
            text={"All"}
            selected={selected === "All"}
            onClick={handleAllCategoryClick}
          />
          {categories.map((category) => (
            <Badge
              id={category}
              key={category}
              text={category}
              selected={selected === category}
              onClick={handleCategoryClick}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default CategoryList;
