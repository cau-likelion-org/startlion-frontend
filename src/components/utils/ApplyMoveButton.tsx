import {
  ApplyPageAtom,
  ApplyPageCheckAtom,
  FirstApplyAtom,
} from "@/store/atoms";
import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { css, styled } from "twin.macro";

const ApplyMoveButton = () => {
  const [pageNum, setPageNum] = useRecoilState(ApplyPageAtom);
  const setCheckPage = useSetRecoilState(ApplyPageCheckAtom);
  const checkFirstPart = useRecoilValue(FirstApplyAtom);
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
    } else if (pageNum === 1) {
      checkFirstPart.part === ""
        ? alert("파트를 선택해주세요")
        : setPageNum(pageNum + 1);
    } else {
      setPageNum(pageNum + 1);
    }
  };
  return (
    <div className="w-full mt-20 flex-col-base">
      <div className="flex gap-8 mb-10">
        <MoveButton prop={true} onClick={() => movePrevFunc(pageNum)}>
          이전
        </MoveButton>
        <MoveButton prop={true}>임시저장</MoveButton>
        {pageNum === 4 ? (
          <MoveButton prop={false} onClick={() => setCheckPage("complete")}>
            제출
          </MoveButton>
        ) : (
          <MoveButton prop={false} onClick={() => moveNextFunc(pageNum)}>
            다음
          </MoveButton>
        )}
      </div>
      <div>{pageNum}/4</div>
    </div>
  );
};

export default ApplyMoveButton;

const MoveButton = styled.button(({ prop }: { prop: boolean }) => [
  css`
    width: 90px;
    height: 44px;
    padding: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 1px solid #1b00fd;
    font-size: 20px;
  `,
  prop
    ? css`
        background-color: white;
      `
    : css`
        background-color: #1b00fd;
        color: white;
        font-weight: 700;
      `,
]);
