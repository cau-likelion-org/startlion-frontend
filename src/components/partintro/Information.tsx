import { PartText, TextBox } from "@/pages/part/[partintro]";
import Image from "next/image";
import React from "react";
import design from "@/img/part/design.png";

type Props = {
  partContent: string;
  typeOfTalent: string;
  imageUrl: string;
  curriculumContents: string;
};

const Information = (props: Props) => {
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
          <PartText className="schedule">{props.curriculumContents}</PartText>
        </div>
      </div>
    </>
  );
};

export default Information;
