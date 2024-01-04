import { AvailableTimeAtom } from "@/store/atoms";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { styled } from "twin.macro";
import Finalcheck from "@/svg/apply/finalcheck.svg";
import FinalUncheck from "@/svg/apply/finaluncheck.svg";
import { TotalApplyTimeArray } from "@/store/testData";

const AvailableTime = () => {
  const [availableTime, setAvailableTime] = useRecoilState(AvailableTimeAtom);
  const [check, setCheck] = useState(false);
  const DayControlFunc = (
    index: number,
    dayState: number,
    dayNumber: string
  ) => {
    const newDay =
      dayNumber === "firstDay"
        ? [...availableTime.firstDay]
        : dayNumber === "secondDay"
        ? [...availableTime.secondDay]
        : [...availableTime.thirdDay];
    newDay[index] = dayState === 0 ? 1 : 0;
    if (dayNumber === "firstDay") {
      setAvailableTime({
        ...availableTime,
        firstDay: newDay,
      });
    } else if (dayNumber === "secondDay") {
      setAvailableTime({
        ...availableTime,
        secondDay: newDay,
      });
    } else {
      setAvailableTime({
        ...availableTime,
        thirdDay: newDay,
      });
    }
    console.log(availableTime.firstDay.join(" "));
    console.log(availableTime.secondDay.join(" "));
  };
  return (
    <div className="w-full mb-10 font-bold">
      <div className="mb-20">디자인 파트 지원서</div>
      <div className="mb-8">면접 가능 시간을 모두 선택해주세요</div>
      <div className="mb-4">2월 25일 토요일</div>
      <div className="flex items-center justify-start gap-x-4 gap-y-6 flex-wrap">
        {availableTime.firstDay.map((e, i) => (
          <TimeButton
            key={i}
            className={e === 0 ? "" : "selected"}
            onClick={() => DayControlFunc(i, e, "firstDay")}
          >
            {TotalApplyTimeArray[i]}
          </TimeButton>
        ))}
      </div>
      <div className="my-8 bg-black h-[1px] w-full"></div>
      <div className="mb-4">2월 26일 일요일</div>
      <div className="flex items-center justify-start gap-x-4 gap-y-6 flex-wrap">
        {availableTime.secondDay.map((e, i) => (
          <TimeButton
            key={i}
            className={e === 0 ? "" : "selected"}
            onClick={() => DayControlFunc(i, e, "secondDay")}
          >
            {TotalApplyTimeArray[i]}
          </TimeButton>
        ))}
      </div>
      <div className="my-8 bg-black h-[1px] w-full"></div>
      <div className="mb-4">2월 27일 월요일</div>
      <div className="flex items-center justify-start gap-x-4 gap-y-6 flex-wrap">
        {availableTime.thirdDay.map((e, i) => (
          <TimeButton
            key={i}
            className={e === 0 ? "" : "selected"}
            onClick={() => DayControlFunc(i, e, "thirdDay")}
          >
            {TotalApplyTimeArray[i]}
          </TimeButton>
        ))}
      </div>
      <div className="my-[120px] flex-base w-full gap-2">
        <div>
          세션은 매주 수요일 19시에 오프라인으로 진행됩니다. 확인하셨나요?
        </div>
        <button
          onClick={() => setCheck(!check)}
          className="w-[32px] h-[32px] flex-base"
        >
          {check === true ? <Finalcheck /> : <FinalUncheck />}
        </button>
      </div>
    </div>
  );
};

export default AvailableTime;

const TimeButton = styled.div`
  width: 200px;
  height: 80px;
  padding: 20px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e8eff8;
  &.selected {
    background-color: #6ca7ff;
  }
`;
