import Image from "next/image";
import React from "react";
import introduce from "@/img/mainintroduce.png";
import tw, { css, styled } from "twin.macro";
import { useRouter } from "next/router";

const FirstSection = () => {
  const router = useRouter();
  return (
    <>
      <div className="relative top-[211px] flex flex-col justify-center items-center">
        <Image src={introduce} alt="지원소개" />
        <ApplyBtn onClick={() => router.push("/apply")}>지원하러 가기</ApplyBtn>
      </div>
    </>
  );
};

export default FirstSection;

const ApplyBtn = styled.button(() => [
  //가운데에 211
  tw`
       w-[127px] h-[43px] bg-[#1B00FD] flex justify-center items-center gap-2.5 rounded-[24px] text-white
    `,
  css`
    margin-top: 209px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-weight: 900;
    font-size: 16px;
  `,
]);
