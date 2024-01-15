import Image from "next/image";
import React from "react";
import { styled } from "twin.macro";
import design from "@/img/part/design.png";
import { TotalInterviewInfo } from "@/store/type";

const InterviewCard = (props: TotalInterviewInfo) => {
  return (
    <CardWrapper>
      <div>
        <div className="w-[320px] h-[320px] relative mb-[13.5px]">
          <Image
            src={props.imageUrl === null ? design : props.imageUrl}
            alt="인터뷰 메인 이미지"
            layout="fill"
            objectFit="fill"
          />
          <ImgTextShow>&quot; {props.oneLineContent} &quot;</ImgTextShow>
        </div>
        <div className="textline">
          <div>{props.name}</div>
          <PartButton>{props.part}</PartButton>
        </div>
      </div>
    </CardWrapper>
  );
};

export default InterviewCard;

const CardWrapper = styled.div`
  width: 320px;
  display: flex;
  padding-bottom: 34.5px;
  flex-direction: column;
  align-items: flex-start;
  > div {
    .textline {
      display: flex;
      justify-content: space-between;
      padding: 0 4px;
      align-items: center;
      font-size: 18px;
      font-weight: 700;
    }
  }
`;

const ImgTextShow = styled.div`
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 320px;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: white;
  background: rgba(0, 0, 0, 0.3);
  &:hover {
    opacity: 1;
  }
`;

const PartButton = styled.button`
  font-size: 15px;
  font-weight: 700;
  display: flex;
  padding: 5px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid #000;
`;
