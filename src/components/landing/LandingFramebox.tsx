import React, { useEffect, useRef, useState } from "react";
import tw, { styled } from "twin.macro";

const FrameBox = styled.div(() => [
  tw`w-screen h-[800px] flex flex-col justify-center items-center`,
]);

const LandingFramebox = ({ index }: { index: number }) => {
  switch (index) {
    case 1:
      return (
        <FrameBox>
          <div>중앙대학교</div>
          <div>멋쟁이사자처럼</div>
          <div>Now Recruiting</div>
          <button>지원하러 가기</button>
        </FrameBox>
      );
    case 2:
      return <FrameBox>멋사 소개 부분</FrameBox>;
    case 3:
      return <FrameBox>프로세스 부분</FrameBox>;
    case 4:
      return <FrameBox>파트별 소개</FrameBox>;
    case 5:
      return <FrameBox>수료 기준</FrameBox>;
    default:
      return null;
  }
};

export default LandingFramebox;
