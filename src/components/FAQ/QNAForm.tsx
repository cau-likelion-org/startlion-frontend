import { FAQObject } from "@/store/qnasheet";
import React, { useEffect, useState } from "react";
import { styled } from "twin.macro";

const QNAForm = (props: FAQObject) => {
  const [open, setOpen] = useState<boolean>(false);
  useEffect(() => {
    setOpen(false);
  }, [props]);
  return (
    <>
      {open ? (
        <QuestionPart className="withanswer" onClick={() => setOpen(!open)}>
          <p className="mb-1.5">{props.question}</p>
          <p
            style={{
              border: "1px solid black",
              height: "1px",
              width: "670px",
            }}
          ></p>
          <div>{props.answer}</div>
        </QuestionPart>
      ) : (
        <QuestionPart onClick={() => setOpen(!open)}>
          {props.question}
        </QuestionPart>
      )}
    </>
  );
};

export default QNAForm;

const QuestionPart = styled.div`
  padding: 17px 29px;
  font-size: 20px;
  font-weight: 700;
  border-radius: 20px;
  background-color: #f8fafc;
  width: 720px;
  display: flex;
  align-items: center;
  &.withanswer {
    padding: 20px 29px;
    flex-direction: column;
    align-items: flex-start;
    > div {
      font-size: 16px;
      font-weight: 400;
      padding-top: 6px;
    }
  }
`;
