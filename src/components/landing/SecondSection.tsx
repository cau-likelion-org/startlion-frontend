import Image from "next/image";
import React from "react";
import tw, { css, styled } from "twin.macro";
import notebook from "@/img/notebooklion.png";

const SecondSection = () => {
  return (
    <div className="py-[154px]">
      <div className="flex-col-base w-[1207px] gap-[60px]">
        <IntroduceTextBox>
          <div className="font-bold text-black text-xl">
            중앙대학교 멋쟁이 사자처럼은 중앙대 학생들로 이루어진 IT 창업 동아리
            입니다.
          </div>
          <br />
          <div>
            테크 기반의 아이디어를 실현하기 위해
            <br />
            기획, 디자인, 개발 트랙 간의 끊임없는 소통을 추구하며
            <br />
            다양한 프로젝트 활동을 통해 기술적 성장을 도모하고 협력 역량을
            끌어올립니다.
          </div>
        </IntroduceTextBox>
        <NumberInfoWrapper>
          <Image src={notebook} alt="노트북라이언" width={129} height={131} />
          <div className="flex">
            <NumberInfo>
              <div className="title">since</div>
              <div className="flex">
                <div className="number">20nn</div>
              </div>
            </NumberInfo>
            <NumberInfo>
              <div className="title">활동 기수</div>
              <div className="wrapper">
                <div className="number">12</div>
                <div className="semitext">기</div>
              </div>
            </NumberInfo>
            <NumberInfo>
              <div className="title">역대 활동 인원</div>
              <div className="wrapper">
                <div className="number">324</div>
                <div className="semitext">명</div>
              </div>
            </NumberInfo>
            <NumberInfo>
              <div className="title">총 프로젝트 진행</div>
              <div className="wrapper">
                <div className="number">324</div>
                <div className="semitext">개</div>
              </div>
            </NumberInfo>
          </div>
        </NumberInfoWrapper>
      </div>
    </div>
  );
};

export default SecondSection;

const IntroduceTextBox = styled.div`
  height: 125px;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: #646468;
`;

const NumberInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: end;
  flex-direction: column;
  height: 307px;
`;

const NumberInfo = styled.div(() => [
  tw` flex flex-col justify-center items-center w-[300px] h-[180px]`,
  css`
    border-radius: 25px;
    border-top: 2px solid var(--BLUE-1, #1b00fd);
    border-right: 2px solid var(--BLUE-1, #1b00fd);
    background: var(--White, #f8fafc);
    text-align: center;
    .wrapper {
      display: flex;
      align-items: baseline;
    }
    .title {
      font-size: 20px;
      font-weight: 400;
      line-height: 150%;
    }
    .number {
      font-size: 64px;
      font-weight: 900;
    }
    .semitext {
      font-size: 36px;
      font-weight: 700;
    }
  `,
]);
