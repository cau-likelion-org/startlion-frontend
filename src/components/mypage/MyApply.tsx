import { getMypageApi } from "@/apis/mypage/api";
import { applicationIdAtom, mypageAtom, userInfoState } from "@/store/atoms";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from "recoil";
import tw from "twin.macro";

const MyApply = () => {
  const router = useRouter();
  const userToken = useRecoilValue(userInfoState);
  const resetUserToken = useResetRecoilState(userInfoState);
  const [data, setData] = useRecoilState(mypageAtom);
  const submitConfirm = data.isSubmitted;
  const setAppId = useSetRecoilState(applicationIdAtom);
  useEffect(() => {
    getMypageApi(userToken.accessToken).then((res) => {
      if (typeof res === "undefined") {
        resetUserToken();
      } else {
        setData(res);
      }
    });
  }, []);
  const moveApplyFunc = (id: number) => {
    setAppId(id);
    router.push("/apply");
  };
  return (
    <div className="w-full bg-[#E8EFF8] rounded-[20px] px-8 py-12">
      <TextBar className="mb-[23px] font-bold text-xl pr-[35px]">
        <div>지원기수</div>
        <div>이름</div>
        <div>파트</div>
        <div>지원 상태</div>
        <div>지원서</div>
      </TextBar>
      <div className="w-full h-[1px] bg-black"></div>
      {Array.isArray(data.applicationList) &&
        data.applicationList.map((e, i) => (
          <>
            <TextBar className="mt-[21px] text-base font-normal pr-2">
              <div>{e.generationId}</div>
              <div>{e.name}</div>
              <div>{e.part}</div>
              <div>{e.status}</div>
              <ApplyButton
                disabled={submitConfirm === "Y"}
                onClick={() => moveApplyFunc(e.applicationId)}
                className="ml-[-19px]"
              >
                지원서
              </ApplyButton>
            </TextBar>
          </>
        ))}
      <TextBar className="mt-[21px] text-base font-normal pr-2">
        <div>지원기수</div>
        <div>이름</div>
        <div>파트</div>
        <div>지원 상태</div>
        <ApplyButton
          disabled={submitConfirm === "Y"}
          onClick={() => moveApplyFunc(0)}
          className="ml-[-19px]"
        >
          지원서
        </ApplyButton>
      </TextBar>
    </div>
  );
};

export default MyApply;

const TextBar = tw.div`
flex items-center text-center justify-between pl-7
`;

const ApplyButton = tw.button`
    w-[98px] px-1.5 py-3 rounded-[8px] bg-white h-[31px] flex items-center justify-center
`;
