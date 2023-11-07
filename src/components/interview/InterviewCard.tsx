import { InterviewCardProp } from "@/store/testData";
import Image from "next/image";
import React from "react";
import { styled } from "twin.macro";

const InterviewCard = (props: InterviewCardProp) => {
  return (
    <CardWrapper>
      <div>
        <div className="w-[320px] h-[320px] relative mb-[13.5px]">
          <Image
            src={props.img}
            alt="인터뷰 메인 이미지"
            layout="fill"
            objectFit="cover"
          />
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
