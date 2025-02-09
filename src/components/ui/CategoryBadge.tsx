import React from "react";
import clsx from "clsx";

interface Props extends React.HTMLProps<HTMLDivElement> {
  text: string;
  selected?: boolean;
}

const CategoryBadge = ({ text, selected, ...rest }: Props) => {
  return (
    <div
      className={clsx(
        selected &&
          "bg-gray-700 font-bold text-white dark:bg-white dark:text-black",
        "flex justify-center items-center h-4 bg-dark p-4 rounded border cursor-pointer",
      )}
      {...rest}
    >
      {text}
    </div>
  );
};

export default CategoryBadge;
