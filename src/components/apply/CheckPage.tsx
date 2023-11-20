import { ApplyPageCheckAtom } from "@/store/atoms";
import React from "react";
import { useRecoilValue } from "recoil";

const CheckPage = () => {
  const checkPage = useRecoilValue(ApplyPageCheckAtom);
  return checkPage === "apply" ? (
    <div className="w-[74%] py-20 mb-5 mx-auto">
      <div className="mb-2 font-bold text-[32px]">지원서 작성</div>
      <div className="mb-8 text-[#797979]">
        *페이지에서 이탈 시 내용이 자동 저장되지 않습니다. 임시저장 버튼을
        클릭하여 내용을 저장해 주세요.
      </div>
      <div>이 이후부터는 이제... 그 하는 곳</div>
    </div>
  ) : (
    <div className="w-[74%] py-20 mb-20 mx-auto">
      <div className="mb-8 font-bold text-[32px]">지원서 작성</div>
      <div className="py-20 mt-20 flex-col-base font-bold text-[20px]">
        <div>중앙대학교 멋쟁이사자처럼 12기 지원이 완료되었습니다.</div>
        <div>지원해 주셔서 감사합니다.</div>
        <div>1차 서류평가 결과 발표일은 2월 00일입니다.</div>
      </div>
    </div>
  );
};

export default CheckPage;
