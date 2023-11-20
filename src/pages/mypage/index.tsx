import MyApply from "@/components/mypage/MyApply";
import HeightBlank from "@/components/utils/HeightBlank";
import React from "react";

const index = () => {
  return (
    <>
      <div className="w-screen">
        <div className="px-[186px] py-20 mb-[100px]">
          <div className="text-[32px] font-bold mb-8">지원 현황</div>
          <MyApply />
        </div>
      </div>
      <HeightBlank />
    </>
  );
};

export default index;
