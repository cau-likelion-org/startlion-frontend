import HeightBlank from "@/components/utils/HeightBlank";
import { useRouter } from "next/router";
import React from "react";
import tw from "twin.macro";
import QNABox from "@/components/interview/QNABox";
import Backarrow from "@/svg/backarrow.svg";

const InterviewPage = () => {
  const router = useRouter();
  return (
    <div className="flex-col-base py-[120px] w-[1107px] mx-auto">
      <QNAIntroWrapper>
        <div className="w-[250px] h-[250px] bg-gray-300">
          이미지파트(백엔드한테 받을부분)
        </div>
        <div className="flex flex-col w-[calc(100%-250px)]">
          <div
            className="flex justify-end items-end mb-[100px]"
            onClick={() => router.back()}
          >
            <Backarrow />
          </div>
          <div>{router.query.detail}인터뷰 관련</div>
        </div>
      </QNAIntroWrapper>
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
const QNAIntroWrapper = tw.div`
  w-full gap-6 flex mb-[200px]
`;
