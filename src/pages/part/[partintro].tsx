import { useRouter } from "next/router";
import tw, { styled } from "twin.macro";
import Backarrow from "@/svg/backarrow.svg";
import { ApplyBtn } from "@/components/landing/FirstSection";
import ToggleInfo from "@/components/partintro/ToggleInfo";
import Information from "@/components/partintro/Information";
import HeightBlank from "@/components/utils/HeightBlank";
import { GetServerSideProps } from "next";
import { PartInfo, PartInfoProps } from "@/store/type";

export default function PartPage({ partInfo }: PartInfoProps) {
  //React 컴포넌트와 훅은 항상 대문자로 시작해야 한다는 것을 기억해주세요.
  const router = useRouter();
  return (
    <>
      <div className="flex-col-base py-[60px] m-auto gap-[60px] w-[1064px]">
        <div className="flex-base-between w-full">
          <div className=" font-bold text-[32px]">
            파트별 소개 : {partInfo.partName}
          </div>
          <div onClick={() => router.back()}>
            <Backarrow />
          </div>
        </div>
        <Information
          partContent={partInfo.partContent}
          typeOfTalent={partInfo.typeOfTalent}
          imageUrl={partInfo.imageUrl}
          curriculumContents={partInfo.curriculumContents}
        />
        <div className="w-full pt-[40px]">
          <ToggleInfo
            commonQuestions={partInfo.commonQuestions}
            partQuestions={partInfo.partQuestions}
          />
        </div>
      </div>
      <div className="flex-base mt-[160px] pb-[60px] w-full">
        <ApplyBtn className="part">지원하러 가기</ApplyBtn>
      </div>
      <HeightBlank />
    </>
  );
}

// Export the getServerSideProps function with GetServerSideProps type
export const getServerSideProps: GetServerSideProps<{
  partInfo: PartInfo;
}> = async (context) => {
  // get params id from the url
  const partInfoName = context.params?.partintro as string;

  const API_URL = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/parts/${partInfoName}`;

  // Fetch data
  const res = await fetch(API_URL);

  // Parse the data
  const data = await res.json();
  const partInfo = data;

  // If the product is not found, return notFound - 404 page
  if (partInfo === null) {
    return {
      notFound: true,
    };
  }
  // Return the product as props
  return {
    props: {
      partInfo,
    },
  };
};

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
    white-space: pre-line;
  }
`;
