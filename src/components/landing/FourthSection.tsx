import React from "react";
import { css, styled } from "twin.macro";
import PM from "@/img/PMLion.png";
import Design from "@/img/DesignLion.png";
import BE from "@/img/BELion.png";
import FE from "@/img/FELion.png";
import Image from "next/image";
import { useRouter } from "next/router";

const FourthSection = () => {
  const router = useRouter();
  return (
    <div className="px-[100px]">
      <div className="flex-col-base">
        <div className="text-[28px] text-[#1B00FD] font-bold pb-20">
          파트별 소개
        </div>
        <div className=" flex flex-wrap w-[1058px] h-[513px] gap-x-[34px] gap-y-[33px]">
          <PartButton onClick={() => router.push("/part/PM")}>
            <Image src={PM} alt="PMLion" width={464} height={92} />
            <TextPart>
              <div className="line"></div>
              중앙대학교 멋쟁이사자처럼 기획파트는 어쩌구 저쩌구 합니다. 이렇게
              ㅔ적으면 되겠죠 뭐~ 길면 몇줄이나 나올까요? 최대 세줄이면 가장
              적당할 것 가탕요. 우헤헤헤
            </TextPart>
          </PartButton>
          <PartButton onClick={() => router.push("/part/DESIGN")}>
            <Image src={Design} alt="DesignLion" width={464} height={92} />
            <TextPart>
              <div className="line"></div>
              중앙대학교 멋쟁이사자처럼 기획파트는 어쩌구 저쩌구 합니다. 이렇게
              ㅔ적으면 되겠죠 뭐~ 길면 몇줄이나 나올까요? 최대 세줄이면 가장
              적당할 것 가탕요. 우헤헤헤
            </TextPart>
          </PartButton>
          <PartButton onClick={() => router.push("/part/FE")}>
            <Image src={FE} alt="FELion" width={464} height={92} />
            <TextPart>
              <div className="line"></div>
              중앙대학교 멋쟁이사자처럼 기획파트는 어쩌구 저쩌구 합니다. 이렇게
              ㅔ적으면 되겠죠 뭐~ 길면 몇줄이나 나올까요? 최대 세줄이면 가장
              적당할 것 가탕요. 우헤헤헤
            </TextPart>
          </PartButton>
          <PartButton onClick={() => router.push("/part/BE")}>
            <Image src={BE} alt="BELion" width={464} height={92} />
            <TextPart>
              <div className="line"></div>
              중앙대학교 멋쟁이사자처럼 기획파트는 어쩌구 저쩌구 합니다. 이렇게
              ㅔ적으면 되겠죠 뭐~ 길면 몇줄이나 나올까요? 최대 세줄이면 가장
              적당할 것 가탕요. 우헤헤헤
            </TextPart>
          </PartButton>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;

const PartButton = styled.button(() => [
  css`
    display: flex;
    width: 512px;
    height: 240px;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    border-radius: 40px;
    border: 1px solid #1b00fd;
    background-color: transparent;
    padding: 24px;
  `,
]);

const TextPart = styled.div`
  width: 464px;
  height: 84px;
  padding: 8px 0px 0px 144px;
  text-align: start;
  color: #646468;
  font-size: 16px;
  font-weight: 400;
  .line {
    height: 1px;
    background-color: #121212;
    margin-bottom: 6px;
  }
`;
