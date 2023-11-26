import { ApplyPartAtom } from "@/store/atoms";
import React from "react";
import { useSetRecoilState } from "recoil";
import tw, { styled } from "twin.macro";

const ApplyInfo = () => {
  //아직 onClick을 추가안한 상태
  const partArray = ["기획", "디자인", "프론트엔드", "백엔드"];
  const wayArray = [
    "지인 추천",
    "인스타그램",
    "에브리타임",
    "멋쟁이사자처럼 홈페이지",
    "기타",
  ];
  const setApplyPart = useSetRecoilState(ApplyPartAtom);
  return (
    <>
      <div className="flex gap-6 mb-6 items-baseline">
        <div className="font-bold text-[32px]">지원서 작성</div>
        <div className="text-[#797979] font-bold">*필수 응답 항목</div>
      </div>
      <div className="flex-col-base items-start">
        <FlexGap>
          <ApplyInfoText>성함*</ApplyInfoText>
          <ApplyInput />
        </FlexGap>
        <FlexGap>
          <ApplyInfoText>성별*</ApplyInfoText>
          <div className="flex items-center gap-6">
            <input
              type="radio"
              name="gender"
              value="male"
              id="male"
              className="hidden"
            />
            <ApplyInputRadio htmlFor="male">남성</ApplyInputRadio>
            <input
              type="radio"
              name="gender"
              value="female"
              className="hidden"
              id="female"
            />
            <ApplyInputRadio htmlFor="female">여성</ApplyInputRadio>
          </div>
        </FlexGap>
        <FlexGap>
          <ApplyInfoText>학번*</ApplyInfoText>
          <ApplyInput />
        </FlexGap>
        <FlexGap>
          <ApplyInfoText>학과*</ApplyInfoText>
          <ApplyInput />
        </FlexGap>
        <FlexGap>
          <ApplyInfoText>다전공</ApplyInfoText>
          <ApplyInput />
        </FlexGap>
        <div className="gap-6 flex mb-2">
          <ApplyInfoText>해당 학기*</ApplyInfoText>
          <ApplyInput />
        </div>
        <div className="text-[#797979] mb-9 text-right w-full">
          *1학기 기준 해당 학기 선택 바랍니다.
        </div>
        <FlexGap>
          <ApplyInfoText>휴대전화*</ApplyInfoText>
          <ApplyInput />
        </FlexGap>
        <FlexGap>
          <ApplyInfoText>이메일*</ApplyInfoText>
          <ApplyInput />
        </FlexGap>
        <FlexGap>
          <ApplyInfoText>지원 경로*</ApplyInfoText>
          <div className="w-[65vw]">
            {wayArray.map((e) =>
              e !== "기타" ? (
                <>
                  <input
                    type="radio"
                    name="way"
                    value={e}
                    id={e}
                    className="hidden"
                  />
                  <ApplyInputRadio htmlFor={e} className="way">
                    {e}
                  </ApplyInputRadio>
                </>
              ) : (
                <>
                  <p className="mt-6">
                    <input
                      type="radio"
                      name="way"
                      value={e}
                      id={e}
                      className="hidden"
                    />
                    <ApplyInputRadio htmlFor={e} className="mr-2.5">
                      {e}
                    </ApplyInputRadio>
                    <ApplyInput className="way" />
                  </p>
                </>
              )
            )}
          </div>
        </FlexGap>
        <FlexGap>
          <ApplyInfoText>지원 파트*</ApplyInfoText>
          {partArray.map((e) => (
            <>
              <input
                type="radio"
                name="part"
                value={e}
                id={e}
                className="hidden"
              />
              <ApplyInputRadio htmlFor={e} onClick={() => setApplyPart(e)}>
                {e}
              </ApplyInputRadio>
            </>
          ))}
        </FlexGap>
      </div>
    </>
  );
};

export default ApplyInfo;

const FlexGap = tw.div`
    flex gap-6 mb-9
`;

const ApplyInfoText = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  width: 108px;
`;

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
`;

const ApplyInputRadio = styled.label`
  font-size: 24px;
  &::before {
    content: "";
    display: inline-block;
    margin-right: 10px;
    width: 21px;
    height: 21px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='21' height='21' viewBox='0 0 21 21' fill='none'%3E%3Ccircle cx='10.5' cy='10.5' r='10.5' fill='%23E8EFF8'/%3E%3C/svg%3E");
  }
  input:checked + &::before {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='21' height='21' viewBox='0 0 21 21' fill='none'%3E%3Ccircle cx='10.5' cy='10.5' r='10.5' fill='%23E8EFF8'/%3E%3Ccircle cx='10.5' cy='10.5' r='6.5' fill='%23FF6868'/%3E%3C/svg%3E");
  }
  &.way {
    margin-right: 24px;
  }
`;
