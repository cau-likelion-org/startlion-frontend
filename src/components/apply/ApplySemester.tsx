import React, { useEffect, useRef, useState } from "react";
import { styled } from "twin.macro";
import { ApplyInfoText } from "./ApplyInfo";
import Toggle from "@/svg/toggle.svg";
import { useRecoilState } from "recoil";
import { FirstApplyAtom } from "@/store/atoms";

const ApplySemester = () => {
  const [modal, setModal] = useState<Boolean>(false);
  const [semester, setSemester] = useState<string>("해당학기");
  const [firstData, setFirstData] = useRecoilState(FirstApplyAtom);
  const semesterOption = [
    "1학년 1학기",
    "1학년 2학기",
    "2학년 1학기",
    "2학년 2학기",
    "3학년 1학기",
    "3학년 2학기",
    "4학년 1학기",
    "4학년 2학기",
    "추가 학기",
    "휴학 예정",
  ];
  const modalRef = useRef<HTMLDivElement>(null);
  const changeSemesterFunc = (name: string) => {
    setModal(!modal);
    setSemester(name);
    setFirstData({
      ...firstData,
      semester: name,
    });
  };
  useEffect(() => {
    if (firstData.semester !== "") {
      setSemester(firstData.semester);
    }
  }, []);
  return (
    <div className="gap-6 flex mb-2 relative">
      <ApplyInfoText>해당 학기*</ApplyInfoText>
      <ApplyInfoSelect
        onClick={() => {
          setModal(!modal);
        }}
      >
        <div>
          {" "}
          <Toggle
            style={{
              transform: modal ? "rotate(90deg)" : "rotate(0deg)",
            }}
          />
        </div>
        <div>{semester}</div>
      </ApplyInfoSelect>
      {modal ? (
        <>
          <MyPostModal ref={modalRef}>
            {semesterOption.map((e, i) => (
              <div
                key={i}
                onClick={() => {
                  changeSemesterFunc(e);
                }}
                className="inner"
              >
                {e}
              </div>
            ))}
          </MyPostModal>
        </>
      ) : null}
    </div>
  );
};

export default ApplySemester;

const ApplyInfoSelect = styled.div`
  position: relative;
  width: 252px;
  height: 42px;
  box-sizing: border-box;
  padding: 0px 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 8px;
  background-color: #e8eff8;
  font-size: 20px;
  line-height: 150%;
`;

const MyPostModal = styled.div`
  position: absolute;
  top: 42px;
  right: 0px;
  z-index: 999;
  width: 252px;
  height: 270px;
  border-radius: 6px;
  border: 1px solid var(--grey-400, #dcdfe3);
  background-color: var(--white, #fff);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  .inner {
    width: 246px;
    min-height: 42px;
    border-radius: 4px;
    color: var(--grey-900, #212224);
    font-family: Pretendard;
    font-size: 20px;
    line-height: 150%;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: #e8eff8;
    }
    &:active {
      background-color: #e8eff8;
    }
  }
`;
