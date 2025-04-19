import Image from "next/image";

const INTRODUCE = [
  {
    title: "복잡한 걸 단순하게 정리하는 걸 좋아합니다.",
    description:
        "무작정 구현하기보다, 왜 필요한지부터 먼저 생각합니다.  \n" +
        "복잡한 문제도 최대한 단순하게 풀어보려 하고,  \n" +
        "코드 한 줄에도 이유가 있는 구조를 만들고 싶습니다.  \n" +
        "기능보다 구조, 빠르기보다 이해하기 쉬운 코드를 중요하게 생각합니다."
  },
  {
    title: "사용자와 팀에게 도움이 되는 개발자가 되고 싶습니다.",
    description:
        "잘 만든 UI나 성능이 좋은 것도 좋지만, 쓰기 편하고 유지보수 쉬운 경험을 우선합니다.  \n" +
        "결국 좋은 코드는 사용자와 팀 모두에게 이로운 결과를 만든다고 믿습니다.  \n" +
        "작은 코드 하나가 좋은 경험으로 이어지도록 신중하게 고민하려 합니다."
  },
  {
    title: "눈에 띄진 않아도, 성실하게 쌓아갑니다.",
    description:
        "기록하고 정리하는 걸 통해 조금씩 나아가고 있습니다.  \n" +
        "빠르게 성장하진 않아도, 멈추지 않고 계속 배우려 합니다.  \n" +
        "결국 나만의 기준과 방향을 갖고 개발할 수 있는 사람이 되고 싶습니다.\n"
  },
];

const SKILL = [
  "JavaScript",
  "TypeScript",
  "React",
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
          <h1 className={"text-lg font-bold italic my-4"}>
            꾸준히 배우고, 천천히 나아가는 프론트엔드 개발자 유병진입니다.
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
      <article className={"md:flex gap-6"}>
        <div className={"flex flex-col gap-5 md:w-2/3 mb-5"}>
          <div>
            <h2 className={"text-lg mb-2 italic font-bold"}>Work experience</h2>
            <div className={"flex flex-col gap-6"}>
              <div className={"flex gap-5 items-center justify-between"}>
                <div className={"flex flex-col"}>
                  <span>(주) 피플앤드테크놀러지</span>
                  <span className={"text-gray-500"}>솔루션 개발팀</span>
                </div>
                <p>2023.03.13 ~ ing</p>
              </div>
            </div>
          </div>
        </div>
        <div className={"flex flex-col gap-5 md:w-1/3 mb-5"}>
          <div>
            <h2 className={"text-lg mb-2 italic font-bold"}>Skill</h2>
            <ul className={"relative"}>
              {SKILL.map((skill) => (
                <li key={skill} className={"flex gap-3"}>
                  <span>️-</span>
                  <p>{skill}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Home;
