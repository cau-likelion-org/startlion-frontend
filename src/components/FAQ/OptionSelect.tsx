import { ActivityFAQ, ApplyFAQ, FAQObject } from "@/store/qnasheet";
import React, { useEffect, useState } from "react";
import QNAForm from "./QNAForm";
import tw, { css, styled } from "twin.macro";

const OptionSelect = () => {
  //   const options = ["apply", "activity", "others"];
  const [show, setShow] = useState<string>("apply");
  const [data, setData] = useState<Array<FAQObject>>([]);
  useEffect(() => {
    if (show === "apply") {
      setData(ApplyFAQ);
    } else {
      setData(ActivityFAQ);
    }
  }, [show]);
  return (
    <>
      <div className="flex px-8 py-10 w-full gap-8 bg-[#E8EFF8] rounded-[20px]">
        <div className="flex-col-base justify-start items-start pr-[10px] gap-20 pb-[93px] w-[235px] border-e-black border-e-2">
          <div>
            <QuestionText
              select={show === "apply" ? true : false}
              onClick={() => {
                setShow("apply");
              }}
            >
              지원 자격
            </QuestionText>
            <QuestionText
              select={show === "activity" ? true : false}
              onClick={() => {
                setShow("activity");
              }}
            >
              활동 관련
            </QuestionText>
            <div className="text-[14px] font-normal text-[#484848] mt-14">
              *추가적인 문의 사항이 있다면
              <br />
              언제든 ~~~로 연락주세요
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {/* 나중에 key값 설정해서 초기화할 예정 */}
          {data.map((e, i) => {
            return <QNAForm question={e.question} answer={e.answer} key={i} />;
          })}
        </div>
      </div>
    </>
  );
};

export default OptionSelect;

export const QuestionText = styled.div(({ select }: { select: boolean }) => [
  tw` pr-[15px] pb-[5px] mb-[22px]`,
  css`
    font-size: 20px;
  `,
  select
    ? css`
        font-weight: 700;
      `
    : css`
        font-weight: 400;
      `,
]);
