import React, { useEffect, useState } from "react";
import { css, styled } from "twin.macro";
import Arrowdown from "@/svg/arrowdown.svg";
import { InterviewCardTest, InterviewRouteProp } from "@/store/testData";
import InterviewCard from "./InterviewCard";
import Link from "next/link";
import { TotalInterviewInfo } from "@/store/type";
import axios from "axios";

const InterviewCardWrapper = () => {
  const options = [
    { param: "ALL", name: "ALL" },
    { param: "PM", name: "PM" },
    { param: "FE", name: "FE" },
    { param: "BE", name: "BE" },
    { param: "DE", name: "DESIGN" },
    { param: "DEV", name: "DEV" },
  ];
  const [option, setOption] = useState<string>("ALL");
  const [serverParam, setServerParam] = useState<string>("ALL");
  const [viewmore, setViewmore] = useState<boolean>(false);
  const [getInfo, setGetInfo] = useState<Array<TotalInterviewInfo>>([]);
  useEffect(() => {
    getInterviewApi(serverParam).then((res) => {
      setGetInfo(res.data);
    });
  }, [serverParam]);
  useEffect(() => {
    getInterviewApi(serverParam).then((res) => {
      setGetInfo(res.data);
    });
  }, []);
  return (
    <div className="flex-col-base w-full">
      <div className="flex-base-start pb-20 gap-8">
        {options.map((e) => {
          return (
            <>
              <InterviewButton
                select={option === e.name ? true : false}
                onClick={() => {
                  setOption(e.name);
                  setServerParam(e.param);
                }}
              >
                {e.name}
              </InterviewButton>
            </>
          );
        })}
      </div>
      <div className="w-full flex-base-start gap-[40px] flex-wrap">
        {Array.isArray(getInfo) &&
          getInfo.map((e, i) => {
            if (i > 14 && viewmore === false) {
              return;
            } else if (i > 14 && viewmore === true) {
              return (
                <Link
                  key={i}
                  href={{
                    pathname: "/interview/[detail]",
                    query: { detail: e.interviewId },
                  }}
                >
                  <InterviewCard
                    key={i}
                    interviewId={e.interviewId}
                    generation={e.generation}
                    OneLineContent={e.OneLineContent}
                    imageUrl={e.imageUrl}
                    name={e.name}
                    part={e.part}
                  />
                </Link>
              );
            } else {
              return (
                <Link
                  key={i}
                  href={{
                    pathname: "/interview/[detail]",
                    query: { detail: e.interviewId },
                  }}
                >
                  <InterviewCard
                    key={i}
                    interviewId={e.interviewId}
                    generation={e.generation}
                    OneLineContent={e.OneLineContent}
                    imageUrl={e.imageUrl}
                    name={e.name}
                    part={e.part}
                  />
                </Link>
              );
            }
          })}
      </div>
      <div className=" mt-[120px] ">
        <ViewMoreButton onClick={() => setViewmore(!viewmore)}>
          view more
          <Arrowdown
            style={{
              transform: viewmore ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </ViewMoreButton>
      </div>
    </div>
  );
};

export default InterviewCardWrapper;

export const getInterviewApi = async (name: string) => {
  return await axios
    .get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/interviews?part=${name}`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      if (axios.isAxiosError(error)) {
        const result = error.response?.data?.detail;
        return result;
      }
    });
};

const InterviewButton = styled.button(({ select }: { select: boolean }) => [
  css`
    width: 140px;
    height: 42px;
    color: white;
    font-size: 20px;
    font-weight: 700;
    border-radius: 12px;
  `,
  select
    ? css`
        background-color: #1b00fd;
      `
    : css`
        background-color: #d7d7d7;
      `,
]);

const ViewMoreButton = styled.button`
  width: 109px;
  height: 36px;
  display: flex;
  gap: 4px;
  border-radius: 10px;
  border: 1px solid var(--Black, #121212);
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
`;
