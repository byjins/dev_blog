import React from "react";
import {getPostBySlug} from "@/lib/mdx";
import PostBody from "@/components/MDX/PostBody";
import Giscus from "@/components/ui/Giscus";
import PostHeader from "@/components/MDX/PostHeader";
import TableOfContents from "@/components/Layout/TableOfContents";
import {getPostPaths, parsePostInfo, parseToc} from "@/lib/posts";
import {Metadata} from "next";
import {siteConfig} from "@/config/site";

interface Props {
    params: Promise<{ category: string; slug: string }>;
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug, category } = await params;
    const post = await getPostBySlug(category, slug);
    const { title: postTitle, thumbnail, description, date } = post.frontmatter;
    const imageUrl = `${siteConfig.url}${thumbnail}`;

    return {
        title: postTitle,  // 페이지의 제목 (SEO에서 중요한 요소, 브라우저 탭에 표시됨)
        description: description,  // 페이지의 설명 (검색 엔진 결과에서 미리보기 텍스트로 사용됨)

        openGraph: {
            title: postTitle,  // Open Graph 제목 (소셜 미디어에서 공유될 때 사용됨)
            description: description,  // Open Graph 설명 (소셜 미디어에서 공유될 때 표시되는 설명)
            type: 'article',  // Open Graph 타입 (여기서는 'article'로 설정, 'website' 같은 다른 타입도 사용 가능)
            publishedTime: date,  // 게시 날짜 (OG 메타데이터의 게시 시간, 소셜 미디어에서 표시될 수 있음)
            url: `${siteConfig.url}${post.url}`,  // 페이지 URL (이 페이지의 주소, Open Graph와 SEO에서 사용)
            images: imageUrl,  // 페이지 미리보기 이미지 (소셜 미디어에서 공유 시 표시될 이미지 URL)
        },
    };
}

export function generateStaticParams() {
    const postPaths: string[] = getPostPaths();

    return postPaths
        .map(path => parsePostInfo(path))
        .map(item => ({
            category: item.category,
            slug: item.slug,
        }));
}

// 선택한 게시글의 디테일 페이지만 보여아함.
const DetailPage = async ({ params }: Props) => {
  const { category, slug } = await params;
  const { content, frontmatter } = await getPostBySlug(category, slug);
  const { title, date, tag } = frontmatter;
  const toc = parseToc(content);

  return (
    <div>
      <TableOfContents toc={toc} />
      <PostHeader category={category} title={title} date={date} tag={tag} />
      <PostBody content={content} />
      <Giscus />
    </div>
  );
};

export default DetailPage;
