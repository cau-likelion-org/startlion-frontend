import InterviewCardWrapper from "@/components/interview/InterviewCardWrapper";
import HeightBlank from "@/components/utils/HeightBlank";
import React from "react";
import { styled } from "twin.macro";

const index = () => {
  return (
    <div className="flex-col-base pt-[228px] w-[1064px] mx-auto">
      <div className=" mb-[240px]">
        <TextBox>이전 기수들의</TextBox>
        <TextBox className="big">솔직한 후기를</TextBox>
        <TextBox>둘러보세요 !</TextBox>
      </div>
      <InterviewCardWrapper />
      <HeightBlank />
    </div>
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
