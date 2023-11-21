import InterviewCardWrapper from "@/components/interview/InterviewCardWrapper";
import HeightBlank from "@/components/utils/HeightBlank";
import React from "react";
import { styled } from "twin.macro";

const index = () => {
  //이 페이지만 Nav랑 그런거 다 바꿔야되네..? 아이고야...
  return (
    <>
      <div
        className="w-screen"
        style={{
          background:
            "linear-gradient(180deg, #0415B0 1.42%, #0019FD 10.5%, #FFF 50.96%, #DFE8FF 79.68%, #FFF 94.09%)",
        }}
      >
        <div className="flex-col-base pt-[228px] mx-auto mb-[240px]">
          <TextBox>이전 기수들의</TextBox>
          <TextBox className="big">솔직한 후기를</TextBox>
          <TextBox>둘러보세요 !</TextBox>
        </div>
      </div>
      <div className=" w-[1064px] mx-auto">
        <InterviewCardWrapper />
        <HeightBlank />
      </div>
    </>
  );
};

export default index;

const TextBox = styled.div`
  font-size: 32px;
  font-weight: 400;
  line-height: 150%;
  text-align: center;
  font-family: Black Han Sans;
  &.big {
    font-size: 64px;
  }
`;
