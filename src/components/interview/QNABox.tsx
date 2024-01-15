import Image from "next/image";
import React from "react";
import { css, styled } from "twin.macro";
import questionLion from "@/img/interview/questionLion.png";
import { InterviewAnswerProp } from "@/store/type";

type Props = {
  interviewAnswers: Array<InterviewAnswerProp>;
};

const QNABox = (props: Props) => {
  return (
    <>
      {props.interviewAnswers.map((e, i) => (
        <div key={i}>
          <QustionWrpper>
            <Image src={questionLion} alt="질문라이언" width={67} height={60} />
            <div>Q. {e.question}</div>
          </QustionWrpper>
          <AnswerWrapper>
            <div className="keypoint">{e.answerTitle}</div>
            <div>{e.answerContent}</div>
          </AnswerWrapper>
        </div>
      ))}
    </>
  );
};

export default QNABox;

const QustionWrpper = styled.div`
  gap: 8px;
  display: flex;
  align-items: center;
  color: var(--BLUE-1, #1b00fd);
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
`;

const AnswerWrapper = styled.div(() => [
  css`
    margin-left: 84px;
    display: flex;
    padding: 20px 24px;
    flex-direction: column;
    gap: 12px;
    border-radius: 24px;
    border: 1px solid var(--BLUE-1, #1b00fd);
    > div {
      font-size: 20px;
      font-weight: 400;
      line-height: 150%;
      color: var(--Gray, #646468);
      &.keypoint {
        font-size: 24px;
        font-weight: 700;
        line-height: normal;
        color: black;
      }
    }
  `,
]);
