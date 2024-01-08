import { FirstApplyAtom } from "@/store/atoms";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

export const useInputForm = ({
  name,
}: {
  name: string;
}): [string, (e: React.ChangeEvent<HTMLInputElement>) => void] => {
  const [value, setValue] = useState("");
  const data = useRecoilValue(FirstApplyAtom);
  useEffect(() => {
    switch (name) {
      case "name":
        setValue(data.name);
        break;
      case "student":
        data.studentNum === null
          ? setValue("")
          : setValue(data.studentNum.toString());
        break;
      case "major":
        setValue(data.major);
        break;
      case "multiMajor":
        setValue(data.multiMajor);
        break;
      case "phone":
        setValue(data.phone);
        break;
      case "email":
        setValue(data.email);
        break;
    }
  }, []);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return [value, onChange];
};
