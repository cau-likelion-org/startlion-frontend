import HeightBlank from "@/components/utils/HeightBlank";
import { useRouter } from "next/router";
import React from "react";
import tw from "twin.macro";
import QNABox from "@/components/interview/QNABox";

const InterviewPage = () => {
  const router = useRouter();
  return (
    <div className="flex-col-base py-[120px] w-[1107px] mx-auto">
      {router.query.detail}인터뷰 관련
      <QNAWrapper>
        <QNABox />
      </QNAWrapper>
      <HeightBlank />
    </div>
  );
};

export default InterviewPage;

const QNAWrapper = tw.div`
    w-full gap-[160px] flex flex-col
`;
