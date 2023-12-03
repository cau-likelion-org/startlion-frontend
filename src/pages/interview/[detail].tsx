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
          <div className="text-[20px]">
            <div className=" font-bold">
              {router.query.detail}번 인터뷰 - 10기 백엔드 파트
            </div>
            <div className="flex gap-2.5 items-baseline text-[36px] font-bold">
              정현우
              <p className="text-[20px] font-normal text-[#646468]">
                에너지시스템공학과
              </p>
            </div>
            <div>
              안녕하세요 저는 중앙대학교 멋사 10기 백엔드파트로 활동했던
              에너지시스템공학부 정현우입니다.
            </div>
          </div>
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
