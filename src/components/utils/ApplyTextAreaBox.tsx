import React from "react";
import { styled } from "twin.macro";

const ApplyTextAreaBox = ({ title }: { title: string }) => {
  return (
    <>
      <div className="mt-20">
        <div className="text-[20px] font-bold mb-2">{title}</div>
        <ApplyTextArea />
      </div>
    </>
  );
};

export default ApplyTextAreaBox;

const ApplyTextArea = styled.textarea`
  width: 100%;
  height: 250px;
  border-radius: 8px;
  background-color: #e8eff8;
  padding: 20px;
  :focus {
    outline: none;
  }
`;
