import React from "react";
import tw, { css, styled } from "twin.macro";

const ThirdSection = () => {
  return (
    <div className="py-[223px]">
      <div className="flex-col-base w-[1063px] h-[358px] shrink-0 gap-[60px]">
        <div className="text-[28px] text-[#1B00FD] font-black">
          선발 프로세스
        </div>
        <ProcessFrame>
          <div className="item">1차 서류 모집</div>
          <div className="item">서류 합격 발표</div>
          <div className="item">2차 면접평가</div>
          <div className="item">최종 합격 발표</div>
          <div className="item">12기 첫 활동일</div>
        </ProcessFrame>
        <ProcessFrame>
          <div className="textpart">
            2/10 토요일 ~ 2/19 월요일
            <br />
            자정 마감
          </div>
          <div className="textpart">
            2/23 월요일
            <br />
            21시
          </div>
          <div className="textpart">
            2/25 수요일 ~ 2/26 목요일
            <br />
            면접 시간 개별 안내
          </div>
          <div className="textpart">
            2/27 월요일
            <br />
            합격자/불합격자 개별 연락
          </div>
          <div className="textpart">
            3/1 수요일
            <br />
            합격자 전체 OT
          </div>
        </ProcessFrame>
      </div>
    </div>
  );
};

export default ThirdSection;

export const ProcessFrame = styled.div(() => [
  tw`flex justify-between items-center w-full`,
  css`
    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 180px;
      height: 180px;
      border-radius: 50%;
      font-size: 20px;
      font-weight: 700;
      &:nth-child(odd) {
        background-color: #1b00fd;
        color: white;
      }
      &:nth-child(even) {
        background-color: white;
        color: #1b00fd;
        border: 1px solid #1b00fd;
      }
    }
    .textpart {
      text-align: center;
      font-size: 16px;
      font-weight: 400;
      width: 180px;
    }
    .schedule {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 196px;
      height: 196px;
      border-radius: 50%;
      font-size: 20px;
      font-weight: 700;
      line-height: 150%;
      text-align: center;
      color: #1b00fd;
      border: 1px solid #1b00fd;
    }
  `,
]);
