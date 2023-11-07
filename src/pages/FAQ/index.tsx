import OptionSelect from "@/components/apply/OptionSelect";
import HeightBlank from "@/components/utils/HeightBlank";
import React from "react";

const index = () => {
  return (
    <>
      <div className="flex-col-base items-start py-20 mx-auto gap-8 w-[1064px]">
        <div className="text-[32px] font-bold">FAQ</div>
        <OptionSelect />
      </div>
      <HeightBlank />
    </>
  );
};

export default index;
