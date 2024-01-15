import { getMyApplyInfoApi } from "@/apis/apply/axios";
import {
  FirstApplyAtom,
  LastApplyAtom,
  SecondApplyAtom,
  ThirdApplyAtom,
  applicationIdAtom,
  userInfoState,
} from "@/store/atoms";
import { useEffect } from "react";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";

export const useGetApplyData = (
  pageNum: number
  // firstData?: FirstPageType,
  // secondData?: SecondPageType,
  // thirdData?: ThirdPageType,
  // lastData?: KeyPair<number[]>
) => {
  const applicationId = useRecoilValue(applicationIdAtom);
  const setFirstData = useSetRecoilState(FirstApplyAtom);
  const setSecondData = useSetRecoilState(SecondApplyAtom);
  const setThirdData = useSetRecoilState(ThirdApplyAtom);
  const setLastData = useSetRecoilState(LastApplyAtom);
  const userToken = useRecoilValue(userInfoState);
  const resetUserToken = useResetRecoilState(userInfoState);
  const resetFirstData = useResetRecoilState(FirstApplyAtom);
  useEffect(() => {
    if (applicationId === 0) {
      resetFirstData();
    } else {
      getMyApplyInfoApi(userToken.accessToken, applicationId, pageNum).then(
        (res) => {
          if (typeof res === "undefined") {
            resetUserToken();
          } else {
            switch (pageNum) {
              case 1:
                setFirstData(res);
              case 2:
                setSecondData(res);
              case 3:
                setThirdData(res);
              case 4:
                setLastData(res);
            }
          }
        }
      );
    }
  }, [applicationId, pageNum]);
};
