import { ApplyPageCheckAtom } from "@/store/atoms";
import React from "react";
import { useRecoilValue } from "recoil";

const CheckPage = () => {
  const checkPage = useRecoilValue(ApplyPageCheckAtom);
  return checkPage === "apply" ? (
    <div>여기는 지원작성 중 페이지</div>
  ) : (
    <div>완료된 페이지</div>
  );
};

export default CheckPage;
