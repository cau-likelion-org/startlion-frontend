import React, { useState } from "react";
import { styled } from "twin.macro";
import Check from "@/svg/apply/check.svg";
import Uncheck from "@/svg/apply/uncheck.svg";
import ApplyInfo from "./ApplyInfo";

const FistPage = () => {
  const [check, setCheck] = useState(false);
  return (
    <div className="w-full pb-20 mb-5 mx-auto">
      <ApplyTextArea />
      <div className="flex font-bold w-full gap-3 text-[#797979] items-center justify-end mb-[125px]">
        <div>
          위의 내용을 읽고 이해 했으며 개인정보 이용 및 수집에 동의합니다.
        </div>
        <button onClick={() => setCheck(!check)}>
          {check === true ? <Check /> : <Uncheck />}
        </button>
      </div>
      <ApplyInfo />
    </div>
  );
};

export default FistPage;

export const ApplyTextArea = styled.textarea`
  width: 100%;
  height: 320px;
  padding: 32px;
  overflow: scroll;
  border-radius: 20px;
  background-color: #e8eff8;
  font-size: 16px;
  margin-bottom: 24px;
  :focus {
    outline: none;
  }
`;
