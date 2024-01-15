import { useInputForm } from "@/hooks/apply/useInputForm";
import { FirstApplyAtom } from "@/store/atoms";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { styled } from "twin.macro";

const ApplyInputBox = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => {
  const [data, onChangeData, errorMessage] = useInputForm({ name });
  const [firstData, setFirstData] = useRecoilState(FirstApplyAtom);
  useEffect(() => {
    switch (name) {
      case "name":
        setFirstData({
          ...firstData,
          name: data,
        });
        break;
      case "student":
        if (Number.isNaN(parseInt(data))) {
          setFirstData({
            ...firstData,
            studentNum: null,
          });
        } else {
          setFirstData({
            ...firstData,
            studentNum: parseInt(data),
          });
        }
        break;
      case "major":
        setFirstData({
          ...firstData,
          major: data,
        });
        break;
      case "multiMajor":
        setFirstData({
          ...firstData,
          multiMajor: data,
        });
        break;
      case "phone":
        setFirstData({
          ...firstData,
          phone: data,
        });
        break;
      case "email":
        setFirstData({
          ...firstData,
          email: data,
        });
        break;
      case "path":
        setFirstData({
          ...firstData,
          etcDetail: data,
        });
        break;
    }
  }, [data]);
  return className === "way" ? (
    <>
      <ApplyInput
        className="way"
        disabled={firstData.pathToKnow !== "기타"}
        value={data}
        onChange={onChangeData}
      />
    </>
  ) : (
    <>
      {errorMessage === "" ? (
        <ApplyInput
          value={data}
          onChange={onChangeData}
          type="text"
          placeholder={
            name === "email"
              ? "ex) abcd@naver.com"
              : name === "phone"
              ? "ex) 010-1234-1234"
              : name === "student"
              ? "ex) 숫자외에 다른 것을 입력하지마세요."
              : ""
          }
        />
      ) : (
        <ApplyInput
          className="error"
          value={data}
          onChange={onChangeData}
          type="text"
          placeholder={
            name === "email"
              ? "ex) abcd@naver.com"
              : name === "phone"
              ? "ex) 010-1234-1234"
              : name === "student"
              ? "ex) 숫자외에 다른 것을 입력하지마세요."
              : ""
          }
        />
      )}
      {/* <div></div>
      {errorMessage && <div style={{ color: "red" }}>{errorMessage}</div>} */}
    </>
  );
};

export default ApplyInputBox;

const ApplyInput = styled.input`
  width: 65vw;
  height: 42px;
  border-radius: 8px;
  background-color: #e8eff8;
  padding: 0px 12px;
  :focus {
    outline: none;
  }
  &.way {
    width: 50vw;
  }
  &.error {
    border: 2px solid red;
  }
`;
