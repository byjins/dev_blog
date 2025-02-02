import React from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

// 선택한 게시글의 디테일 페이지만 보여아함.
const DetailPage = async ({ params }: Props) => {
  const slug = (await params).slug;

  return <div>{slug}</div>;
};

export default DetailPage;
