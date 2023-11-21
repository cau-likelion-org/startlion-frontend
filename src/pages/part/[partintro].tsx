import { useRouter } from "next/router";
import tw, { styled } from "twin.macro";
import Backarrow from "@/svg/backarrow.svg";
import { ApplyBtn } from "@/components/landing/FirstSection";
import ToggleInfo from "@/components/partintro/ToggleInfo";
import Information from "@/components/partintro/Information";
import HeightBlank from "@/components/utils/HeightBlank";

export default function PartPage() {
  //React 컴포넌트와 훅은 항상 대문자로 시작해야 한다는 것을 기억해주세요.
  const router = useRouter();
  return (
    <>
      <div className="flex-col-base py-[60px] m-auto gap-[60px] w-[1064px]">
        <div className="flex-base-between w-full">
          <div className=" font-bold text-[32px]">
            파트별 소개 : {router.query.partintro}
          </div>
          <div onClick={() => router.back()}>
            <Backarrow />
          </div>
        </div>
        <Information />
        <div className="w-full pt-[40px]">
          <ToggleInfo />
        </div>
      </div>
      <div className="flex-base mt-[160px] pb-[60px] w-full">
        <ApplyBtn className="part">지원하러 가기</ApplyBtn>
      </div>
      <HeightBlank />
    </>
  );
}

export const TextBox = tw.div`
flex flex-col items-start justify-start gap-4 w-full
`;

export const PartText = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 150%;
  &.title {
    font-weight: 700;
    line-height: normal;
  }
  &.schedule {
    line-height: 200%;
  }
`;
