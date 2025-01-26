import React from "react";
import Link from "next/link";
import Image from "next/image";
import Theme from "@/app/components/ui/Theme/Theme";

const PATH = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" },
];

const Header = () => {
  return (
    <header className={"w-full h-16 border-b dark:border-white"}>
      <nav
        className={
          "sticky top-0 flex justify-between items-center h-full w-full max-w-[768px] mx-auto px-4"
        }
      >
        <div className={"flex items-center gap-2"}>
          <a
            href={"https://github.com/byjins"}
            className={"rounded-full overflow-hidden"}
          >
            <Image
              src={"https://avatars.githubusercontent.com/byjins"}
              alt={"프로필"}
              width={40}
              height={40}
            />
          </a>
          <div className={"text-xl font-bold"}>Jin</div>
        </div>
        <div className={"flex items-center gap-3"}>
          {PATH.map(({ name, path }) => (
            <Link href={path} key={name}>
              {name}
            </Link>
          ))}
          <Theme />
        </div>
      </nav>
    </header>
  );
};

export default Header;
