import { FirstApplyAtom } from "@/store/atoms";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { ApplyQuestionDevelop, ApplyQuestionPM } from "./ApplyTestData";
import ApplyTextAreaBox from "../utils/ApplyTextAreaBox";

const ThirdPage = () => {
  const firstPartName = useRecoilValue(FirstApplyAtom);
  const [question, setQuestion] = useState<string[]>([]);
  useEffect(() => {
    switch (firstPartName.part) {
      case "기획":
        setQuestion(ApplyQuestionPM);
      default:
        setQuestion(ApplyQuestionDevelop);
    }
  }, []);
  return (
    <div className="w-full mb-5 mx-auto">
      <div className="font-bold text-[28px]">
        {firstPartName.part} 파트 지원서
      </div>
      {question.map((e, i) => {
        return <ApplyTextAreaBox title={e} key={e} num={i} pageNum={3} />;
      })}
    </div>
  );
};

export default ThirdPage;
