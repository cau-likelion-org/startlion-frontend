import { useTextForm } from "@/hooks/apply/useTextForm";
import { SecondApplyAtom, ThirdApplyAtom } from "@/store/atoms";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { styled } from "twin.macro";

const ApplyTextAreaBox = ({
  title,
  num,
  pageNum,
}: {
  title: string;
  num: number;
  pageNum: number;
}) => {
  const [data, onChangeData] = useTextForm();
  const [secondData, setSecondData] = useRecoilState(SecondApplyAtom);
  const [thirdData, setThirdData] = useRecoilState(ThirdApplyAtom);
  useEffect(() => {
    if (pageNum === 2) {
      switch (num) {
        case 0:
          setSecondData({
            ...secondData,
            commonAnswer1: data,
          });
          break;
        case 1:
          setSecondData({
            ...secondData,
            commonAnswer2: data,
          });
          break;
        case 2:
          setSecondData({
            ...secondData,
            commonAnswer3: data,
          });
          break;
        case 3:
          setSecondData({
            ...secondData,
            commonAnswer4: data,
          });
          break;
        default:
          setSecondData({
            ...secondData,
            commonAnswer5: data,
          });
          break;
      }
    } else {
      switch (num) {
        case 0:
          setThirdData({
            ...thirdData,
            partAnswer1: data,
          });
          break;
        case 1:
          setThirdData({
            ...thirdData,
            partAnswer2: data,
          });
          break;
        case 2:
          setThirdData({
            ...thirdData,
            partAnswer3: data,
          });
          break;
        case 3:
          setThirdData({
            ...thirdData,
            partAnswer4: data,
          });
          break;
      }
    }
  }, [data, num]);
  return (
    <>
      <div className="mt-20">
        <div className="text-[20px] font-bold mb-2">{title}</div>
        <ApplyTextArea value={data} onChange={onChangeData} />
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
  overflow: scroll;
  :focus {
    outline: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;
