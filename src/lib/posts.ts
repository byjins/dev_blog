import fs from "fs";
import path from "path";
import matter from "gray-matter";
import dayjs from "dayjs";
import { FrontMatter, HeadingItem, Post } from "@/model/post";

const BASE_PATH = 'src/content';
const postsDirectory = path.join(process.cwd(), BASE_PATH);

// 모든 포스트 목록 불러오기
export function getAllPosts() {
  const categories = fs.readdirSync(postsDirectory); // 카테고리 폴더 목록 가져오기
  const allPosts: Post[] = [];

  categories.forEach((category) => {
    const categoryPath = path.join(postsDirectory, category);
    if (!fs.lstatSync(categoryPath).isDirectory()) return; // 폴더인지 확인

    const files = fs
      .readdirSync(categoryPath)
      .filter((file) => file.endsWith(".mdx"));

    files.forEach((file) => {
      const slug = file.replace(".mdx", "");
      const fileContents = fs.readFileSync(
        path.join(categoryPath, file),
        "utf8",
      );
      const { data } = matter(fileContents) as unknown as {
        data: FrontMatter;
        content: string;
      };

      allPosts.push({ category, slug, frontmatter: data });
    });
  });

  return allPosts.sort((a, b) => {
    const dateA = dayjs(a.frontmatter.date, "YYYY-MM-DD", true);
    const dateB = dayjs(b.frontmatter.date, "YYYY-MM-DD", true);

    // 날짜가 유효하지 않으면 가장 뒤로 정렬
    if (!dateA.isValid()) return 1;
    if (!dateB.isValid()) return -1;

    return dateB.valueOf() - dateA.valueOf();
  });
}

// 특정 카테고리의 포스트만 가져오는 함수
export function getPostsByCategory(category: string) {
  return getAllPosts().filter((post) => post.category === category);
}

// 모든 카테고리 목록 불러오기
export function getAllCategory() {
  // 카테고리 폴더 목록 가져오기
  return fs.readdirSync(postsDirectory);
}

// 목차 데이터 파싱용
export const parseToc = (content: string): HeadingItem[] => {
  const regex = /^(#|##|###) (.*$)/gim;
  const headingList = content.match(regex);
  return (
    headingList?.map((heading: string) => ({
      text: heading.replace("##", "").replace("#", "").trim(),
      link:
        "#" +
        heading
          .replace("# ", "")
          .replace("#", "")
          .replace(/[\[\]:!@#$/%^&*()+=,.?]/g, "")
          .replace(/ /g, "-")
          .toLowerCase(),
      indent: (heading.match(/#/g)?.length || 2) - 1,
    })) || []
  );
};


// 특정 카테고리 또는 전체 디렉토리에서 모든 MDX 파일의 경로를 가져옵니다.
export const getPostPaths = (category?: string): string[] => {
  const targetPath = category ? path.join(BASE_PATH, category) : BASE_PATH;

  if (!fs.existsSync(targetPath)) {
    throw new Error(`경로를 찾을 수 없습니다: ${targetPath}`);
  }

  const mdxPaths: string[] = [];

  const traverseDirectory = (dir: string) => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        // 디렉토리인 경우 재귀적으로 탐색
        traverseDirectory(fullPath);
      } else if (entry.isFile() && fullPath.endsWith('.mdx')) {
        // MDX 파일인 경우 경로 저장
        mdxPaths.push(fullPath);
      }
    }
  };

  traverseDirectory(targetPath);

  return mdxPaths;
};


// 포스트의 추가 정보를 파싱
export const parsePostInfo = (postPath: string) => {
  const normalizedPath = postPath.split(path.sep).join('/');
  const filePath = normalizedPath
      .slice(normalizedPath.indexOf(BASE_PATH))
      .replace(`${BASE_PATH}/`, '')
      .replace('.mdx', '');

  const [category, slug] = filePath.split('/');

  const url = `/blog/${category}/${slug}`;

  return { url, category, slug };
};

