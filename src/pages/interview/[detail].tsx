import HeightBlank from "@/components/utils/HeightBlank";
import { useRouter } from "next/router";
import React from "react";
import tw from "twin.macro";
import QNABox from "@/components/interview/QNABox";
import Backarrow from "@/svg/backarrow.svg";
import { GetServerSideProps } from "next";
import { InterviewInfo, InterviewInfoProps } from "@/store/type";
import Image from "next/image";
import design from "@/img/part/design.png";

const InterviewPage = ({ interviewInfo }: InterviewInfoProps) => {
  const router = useRouter();
  return (
    <div className="flex-col-base py-[120px] w-[1107px] mx-auto">
      <QNAIntroWrapper>
        <div className="w-[250px] h-[250px] bg-gray-300 overflow-hidden relative">
          <Image
            src={
              interviewInfo.imageUrl === null ? design : interviewInfo.imageUrl
            }
            alt="인터뷰 메인 이미지"
            layout="fill"
            objectFit="fill"
          />
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
              {interviewInfo.interviewId}번 인터뷰 - {interviewInfo.generation}
              기 {interviewInfo.part} 파트
            </div>
            <div className="flex gap-2.5 items-baseline text-[36px] font-bold">
              {interviewInfo.name}
              <p className="text-[20px] font-normal text-[#646468]">
                {interviewInfo.major}
              </p>
            </div>
            <div>{interviewInfo.oneLineAnswer}</div>
          </div>
        </div>
      </QNAIntroWrapper>
      <QNAWrapper>
        <QNABox interviewAnswers={interviewInfo.interviewAnswers} />
      </QNAWrapper>
      <HeightBlank />
    </div>
  );
};

export default InterviewPage;

export const getServerSideProps: GetServerSideProps<{
  interviewInfo: InterviewInfo;
}> = async (context) => {
  const interviewId = parseInt(context.params?.detail as string) || 1;
  // Define the API url with the product id
  const API_URL = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/interviews/${interviewId}`;

  // Fetch data
  const res = await fetch(API_URL);

  // Parse the data
  const data = await res.json();
  const interviewInfo = data;
  console.log(data);

  // If the product is not found, return notFound - 404 page
  if (interviewInfo === null) {
    return {
      notFound: true,
    };
  }

  // Return the product as props
  return {
    props: {
      interviewInfo,
    },
  };
};

const QNAWrapper = tw.div`
    w-full gap-[160px] flex flex-col
`;
const QNAIntroWrapper = tw.div`
  w-full gap-6 flex mb-[200px]
`;
