import { SecondApplyAtom, ThirdApplyAtom } from "@/store/atoms";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

export const useTextForm = ({
  pageNum,
  num,
}: {
  pageNum: number;
  num: number;
}): [string, (e: React.ChangeEvent<HTMLTextAreaElement>) => void] => {
  const secondData = useRecoilValue(SecondApplyAtom);
  const thirdData = useRecoilValue(ThirdApplyAtom);
  const [value, setValue] = useState("");
  useEffect(() => {
    if (pageNum === 2) {
      switch (num) {
        case 0:
          setValue(secondData.commonAnswer1);
          break;
        case 1:
          setValue(secondData.commonAnswer2);
          break;
        case 2:
          setValue(secondData.commonAnswer3);
          break;
        case 3:
          setValue(secondData.commonAnswer4);
          break;
        default:
          setValue(secondData.commonAnswer5);
          break;
      }
    } else {
      switch (num) {
        case 0:
          {
            thirdData.partAnswer1 === undefined
              ? setValue("")
              : setValue(thirdData.partAnswer1);
          }
          break;
        case 1:
          {
            thirdData.partAnswer2 === undefined
              ? setValue("")
              : setValue(thirdData.partAnswer2);
          }
          break;
        case 2:
          {
            thirdData.partAnswer3 === undefined
              ? setValue("")
              : setValue(thirdData.partAnswer3);
          }
          break;
        case 3:
          {
            thirdData.partAnswer4 === undefined
              ? setValue("")
              : setValue(thirdData.partAnswer4);
          }
          break;
      }
    }
  }, []);
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  return [value, onChange];
};
