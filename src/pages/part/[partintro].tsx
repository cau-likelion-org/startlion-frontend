import { useRouter } from "next/router";
import tw, { styled } from "twin.macro";
import Backarrow from "@/svg/backarrow.svg";
import Image from "next/image";
import design from "@/img/part/design.png";
import { ApplyBtn } from "@/components/landing/FirstSection";
import Toggle from "@/svg/toggle.svg";
import { useState } from "react";

export default function PartPage() {
  //React 컴포넌트와 훅은 항상 대문자로 시작해야 한다는 것을 기억해주세요.
  const router = useRouter();
  const [utilToggle, setUtilToggle] = useState<boolean>(false);
  const [partToggle, setPartToggle] = useState<boolean>(false);
  return (
    <>
      <div className="flex-col-base py-[60px] m-auto gap-[60px] w-[1064px]">
        <div className="flex-base-between w-full">
          <div className=" font-bold text-[32px]">
            파트별 소개 : {router.query.partintro}
          </div>
          <div onClick={() => router.back()}>
            <Backarrow />
          </div>
        </div>
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
          <PartText className="pl-3 mb-9">
            🤔 디자인적 고민을 팀원들과 공유하고 긍정적인 피드백을 할 수 있는 분
            !<br />
            🗣️ 생각을 자유롭게 표현하는 것을 즐기는 분 !<br />
            💬 팀원들과 소통을 통해서 더 멋있는 아이디어를 만드는 것을 즐기시는
            분 !<br />
          </PartText>
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
        <div className="w-full pt-[40px]">
          <PartText className="title mb-4">지원서 문항 미리보기</PartText>
          <div className="flex gap-2">
            <div onClick={() => setUtilToggle(!utilToggle)}>
              <Toggle
                style={{
                  transform: utilToggle ? "rotate(90deg)" : "rotate(0deg)",
                }}
              />
            </div>
            <PartText className="title mb-5">
              공통문항
              {utilToggle ? (
                <div className=" mt-2">어떻게 되는거?(유틸별)</div>
              ) : null}
            </PartText>
          </div>
          <div className="flex gap-2">
            <div onClick={() => setPartToggle(!partToggle)}>
              <Toggle
                style={{
                  transform: partToggle ? "rotate(90deg)" : "rotate(0deg)",
                }}
              />
            </div>
            <PartText className="title">
              파트별 문항
              {partToggle ? (
                <div className=" mt-2">어떻게 되는거?(파트별)</div>
              ) : null}
            </PartText>
          </div>
        </div>
      </div>
      <div className="flex-base mt-[160px] pb-[60px] w-full">
        <ApplyBtn className="part">지원하러 가기</ApplyBtn>
      </div>
      <div className="h-[120px]"></div>
    </>
  );
}

const TextBox = tw.div`
flex flex-col items-start justify-start gap-4 w-full
`;

const PartText = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 150%;
  &.title {
    font-weight: 700;
    line-height: normal;
  }
  &.schedule {
    line-height: 200%;
  }
`;
