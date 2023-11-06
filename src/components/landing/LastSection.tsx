import React from "react";
import { ProcessFrame } from "./ThirdSection";

const LastSection = () => {
  return (
    <div className="py-[113px]">
      <div className="flex-col-base py-[100px] gap-[60px] w-[1064px]">
        <div className="text-[28px] text-[#1B00FD] font-bold text-center">
          1년 일정 및 수료 기준
        </div>
        <ProcessFrame>
          <div className="schedule">
            트랙별
            <br />
            세션 시작
          </div>
          <div className="schedule">아이디어톤</div>
          <div className="schedule">해커톤</div>
          <div className="schedule">
            트랙별
            <br />
            스터디 시작
          </div>
          <div className="schedule">
            중앙대
            <br />
            해커톤
          </div>
        </ProcessFrame>
      </div>
    </div>
  );
};

export default LastSection;
