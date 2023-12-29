import { PartText, TextBox } from "@/pages/part/[partintro]";
import Image from "next/image";
import React from "react";
import design from "@/img/part/design.png";

type Props = {
  partContent: string;
  typeOfTalent: string;
  imageUrl: string;
  curriculumContents: Array<string>;
};

const Information = (props: Props) => {
  const test = `🤔 디자인적 고민을 팀원들과 공유하고 긍정적인 피드백을 할 수 있는 분!\n 🗣️ 생각을 자유롭게 표현하는 것을 즐기는 분 !\n 💬 팀원들과 소통을 통해서 더 멋있는 아이디어를 만드는 것을 즐기시는분 !\n`;
  return (
    <>
      <TextBox>
        <PartText className="title">한줄 소개</PartText>
        <PartText className="pl-3 mb-9">{props.partContent}</PartText>
      </TextBox>
      <TextBox>
        <PartText className="title">인재상</PartText>
        <PartText className="pl-3 mb-9 whitespace-pre-line">
          {props.typeOfTalent}
        </PartText>
      </TextBox>
      <div className="w-full">
        <PartText className="title">커리큘럼</PartText>
        <div className="flex gap-[30px]">
          <Image
            src={props.imageUrl === null ? design : props.imageUrl}
            alt="파트별 그림"
            width={520}
            height={280}
          />
          <PartText className="schedule">
            {props.curriculumContents.map((e, i) => (
              <div key={i}>{e}</div>
            ))}
          </PartText>
        </div>
      </div>
    </>
  );
};

export default Information;
