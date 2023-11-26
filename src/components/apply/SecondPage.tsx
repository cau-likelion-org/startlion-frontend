import { ApplyPartAtom } from "@/store/atoms";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { ApplyQuestionDevelop, ApplyQuestionPM } from "./ApplyTestData";
import ApplyTextAreaBox from "../utils/ApplyTextAreaBox";

const SecondPage = () => {
  const applyPart = useRecoilValue(ApplyPartAtom);
  const [question, setQuestion] = useState<string[]>([]);
  useEffect(() => {
    applyPart === "기획"
      ? setQuestion(ApplyQuestionPM)
      : setQuestion(ApplyQuestionDevelop);
  }, []);
  return (
    <div className="w-full mb-5 mx-auto">
      <div className="font-bold text-[28px]">{applyPart} 파트 지원서</div>
      {question.map((e, i) => {
        if (i > 4) {
          return <></>;
        } else {
          return <ApplyTextAreaBox title={e} key={i} />;
        }
      })}
    </div>
  );
};

export default SecondPage;
