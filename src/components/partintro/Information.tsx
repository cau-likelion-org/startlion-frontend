import { PartText, TextBox } from "@/pages/part/[partintro]";
import Image from "next/image";
import React from "react";
import design from "@/img/part/design.png";

const Information = () => {
  const test = `🤔 디자인적 고민을 팀원들과 공유하고 긍정적인 피드백을 할 수 있는 분!\n 🗣️ 생각을 자유롭게 표현하는 것을 즐기는 분 !\n 💬 팀원들과 소통을 통해서 더 멋있는 아이디어를 만드는 것을 즐기시는분 !\n`;
  return (
    <>
      <TextBox>
        <PartText className="title">한줄 소개</PartText>
        <PartText className="pl-3 mb-9">
          중앙대학교 멋쟁이사자처럼 디자인 파트는 웹을 디자인하기 위한 기초
          이론부터 프로토타입을 구현할 수 있는 디자인 스킬을 배울 수 있습니다.
          디자인 툴을 익히고 다양한 웹 디자인의 이론과 용어 등 기초를 배우고
          기획자, 개발자들과 적극적으로 소통하는 방법을 공부합니다.
        </PartText>
      </TextBox>
      <TextBox>
        <PartText className="title">인재상</PartText>
        <PartText className="pl-3 mb-9 whitespace-pre-line">{test}</PartText>
      </TextBox>
      <div className="w-full">
        <PartText className="title">커리큘럼</PartText>
        <div className="flex gap-[30px]">
          <Image src={design} alt="파트별 그림" width={520} height={280} />
          <PartText className="schedule">
            1. DESIGN THINKING
            <br />
            2. Topic_아카이빙 훈련
            <br />
            3. 프론트 특강
            <br />
            4. Flow Chart & Wireframe
            <br />
            5. Figma 기본 툴<br />
            6. 웹 디자인 가이드
            <br />
            7. UI 디자인
          </PartText>
        </div>
      </div>
    </>
  );
};

export default Information;
