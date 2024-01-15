import { applicationIdAtom } from "@/store/atoms";
import React, { useEffect } from "react";
import { useResetRecoilState } from "recoil";

const useResetAppId = () => {
  const resetAppId = useResetRecoilState(applicationIdAtom);
  useEffect(() => {
    resetAppId();
  }, []);
};

export default useResetAppId;
