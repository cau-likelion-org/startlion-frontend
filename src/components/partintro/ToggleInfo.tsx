import { PartText } from "@/pages/part/[partintro]";
import React, { useState } from "react";
import ToggleButton from "@/svg/toggle.svg";

const ToggleInfo = () => {
  const [utilToggle, setUtilToggle] = useState<boolean>(false);
  const [partToggle, setPartToggle] = useState<boolean>(false);
  return (
    <>
      <PartText className="title mb-4">지원서 문항 미리보기</PartText>
      <div className="flex gap-2">
        <div onClick={() => setUtilToggle(!utilToggle)}>
          <ToggleButton
            style={{
              transform: utilToggle ? "rotate(90deg)" : "rotate(0deg)",
            }}
          />
        </div>
        <PartText className="title mb-5">
          공통문항
          {utilToggle ? (
            <div className=" mt-2">어떻게 되는거?(유틸별)</div>
          ) : null}
        </PartText>
      </div>
      <div className="flex gap-2">
        <div onClick={() => setPartToggle(!partToggle)}>
          <ToggleButton
            style={{
              transform: partToggle ? "rotate(90deg)" : "rotate(0deg)",
            }}
          />
        </div>
        <PartText className="title">
          파트별 문항
          {partToggle ? (
            <div className=" mt-2">어떻게 되는거?(파트별)</div>
          ) : null}
        </PartText>
      </div>
    </>
  );
};

export default ToggleInfo;
