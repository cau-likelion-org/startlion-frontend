import { FirstApplyAtom } from "@/store/atoms";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

export const useInputForm = ({
  name,
}: {
  name: string;
}): [string, (e: React.ChangeEvent<HTMLInputElement>) => void, string] => {
  const [value, setValue] = useState("");
  const data = useRecoilValue(FirstApplyAtom);
  const [error, setError] = useState("");

  // 패턴 정의
  const patterns: Record<string, RegExp> = {
    email:
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/,
    phone: /^010-\d{3,4}-\d{4}$/,
    student: /^\d*$/,
  };

  // 에러 메시지 정의
  const errorMessages: Record<string, string> = {
    email: "이메일 형식을 지켜주세요",
    phone: "폰 형식을 지켜주세요",
    student: "숫자만 입력해주세요",
  };

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
  useEffect(() => {
    if (patterns[name]) {
      if (!patterns[name].test(value)) {
        setError(errorMessages[name]);
      } else {
        setError("");
      }
    }
  }, [value, name]);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return [value, onChange, error];
};
