import React from "react";
import { styled } from "twin.macro";

const SecondSection = () => {
  return (
    <>
      <IntroduceTextBox>
        <div>
          중앙대학교 멋쟁이 사자처럼은 중앙대 학생들로 이루어진 IT 창업 동아리
          입니다.
        </div>
        <div>테크 기반의 아이디어를 실현하기 위해</div>
        <div>기획, 디자인, 개발 트랙 간의 끊임없는 소통을 추구하며</div>
        <div>
          다양한 프로젝트 활동을 통해 기술적 성장을 도모하고 협력 역량을
          끌어올립니다.
        </div>
      </IntroduceTextBox>
      <div>사자 여기있고</div>
      <NumberInfoWrapper>
        <div>since</div>
        <div>활동 기수</div>
        <div>역대 활동 인원</div>
        <div>총 프로젝트 진행</div>
      </NumberInfoWrapper>
    </>
  );
};

export default SecondSection;

const IntroduceTextBox = styled.div`
  width: 1207px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  height: 125px;
`;

const NumberInfoWrapper = styled.div`
  width: 1207px;
  display: flex;
  justify-content: center;
  height: 180px;
`;
