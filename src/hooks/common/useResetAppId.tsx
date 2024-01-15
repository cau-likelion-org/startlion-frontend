import { applicationIdAtom } from "@/store/atoms";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useResetRecoilState } from "recoil";

const useResetAppId = () => {
  const resetAppId = useResetRecoilState(applicationIdAtom);
  const router = useRouter();
  useEffect(() => {
    if (router.pathname.includes("apply")) {
    } else {
      resetAppId();
    }
  }, []);
};

export default useResetAppId;
