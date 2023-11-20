import { ApplyPageAtom, ApplyPageCheckAtom } from "@/store/atoms";
import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

const ApplyMoveButton = () => {
  const [pageNum, setPageNum] = useRecoilState(ApplyPageAtom);
  const setCheckPage = useSetRecoilState(ApplyPageCheckAtom);
  const movePrevFunc = (pageNum: number) => {
    if (pageNum === 1) {
      return;
    } else {
      setPageNum(pageNum - 1);
    }
  };
  const moveNextFunc = (pageNum: number) => {
    if (pageNum === 4) {
      return;
    } else {
      setPageNum(pageNum + 1);
    }
  };
  return (
    <div className="w-full mt-20 flex-col-base">
      <div className="gap-8 mb-10">
        <button onClick={() => movePrevFunc(pageNum)}>이전</button>
        <button>임시저장</button>
        {pageNum === 4 ? (
          <button onClick={() => setCheckPage("complete")}>제출</button>
        ) : (
          <button onClick={() => moveNextFunc(pageNum)}>다음</button>
        )}
      </div>
      <div>{pageNum}/4</div>
    </div>
  );
};

export default ApplyMoveButton;
