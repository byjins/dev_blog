import Image from "next/image";
import PostCard from "@/components/ui/PostCard";

const INTRODUCE = [
  {
    title: "효율적인 문제 해결과 성장",
    description:
      "저는 항상 문제를 해결하는 과정에서 더욱 효율적인 방법을 찾고자 노력합니다. 복잡한 문제를 간단히 해결할 수 있는 방법을 고민하며, 클린 코드와 Best Practice를 중시하여 유지보수가 용이하고 확장성 있는 코드를 작성하려 합니다.",
  },
  {
    title: "가치 있는 코드 작성",
    description:
      "코드는 단순히 동작하는 것만으로 충분하지 않다고 믿습니다. 코드의 가치는 그것이 어떻게 작성되었고, 얼마나 이해하기 쉬운지, 그리고 팀과 사용자에게 얼마나 도움이 되는지에서 나옵니다. 저는 항상 코드의 가치를 생각하며 개발하기 위해 노력합니다.",
  },
  {
    title: "지속적인 학습과 공유",
    description:
      "개발은 끊임없이 변화하는 분야입니다. 사용자와 조직에 가치있는 경험을 만들기 위해선 꾸준한 학습이 필요합니다. 꾸준한 학습과 지식 공유는 개인과 조직이 성장할 수 있는 밑거름이 된다고 생각합니다.",
  },
];

const Home = () => {
  return (
    <section className={"flex flex-col gap-10"}>
      <article>
        <div className={"flex gap-5 items-center flex-wrap"}>
          <div className={"w-36 h-36 relative"}>
            <Image
              src={"/images/profile.webp"}
              alt={"프로필"}
              fill
              className={"object-contain"}
            />
          </div>
          <div className={"flex flex-col"}>
            <a
              href="https://github.com/byjins"
              className="hover:underline"
              target="_blank"
            >
              - GitHub
            </a>
            <a href="mailto:ppwm111@naver.com" className="hover:underline">
              - ppwm111@naver.com
            </a>
          </div>
          <h1 className={"text-lg font-bold italic my-6"}>
            가치있는 경험을 만들고 싶은 프론트엔드 개발자 유병진입니다.
          </h1>
        </div>
        <ul>
          {INTRODUCE.map(({ title, description }) => (
            <li className={"my-2"} key={title}>
              <h6 className={"font-bold mb-1"}>{title}</h6>
              <p className={"text-md dark:text-gray-400"}>{description}</p>
            </li>
          ))}
        </ul>
      </article>
      <article>
        <h2 className={"text-lg mb-5 italic"}>최근 글</h2>
        <div className={"flex flex-col gap-6"}>
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
        </div>
      </article>
    </section>
  );
};

export default Home;
