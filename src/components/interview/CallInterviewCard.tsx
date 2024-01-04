import { TotalInterviewInfo } from "@/store/type";
import Link from "next/link";
import React from "react";
import InterviewCard from "./InterviewCard";

const CallInterviewCard = (props: TotalInterviewInfo) => {
  return (
    <Link
      key={props.interviewId}
      href={{
        pathname: "/interview/[detail]",
        query: { detail: props.interviewId },
      }}
    >
      <InterviewCard
        interviewId={props.interviewId}
        generation={props.generation}
        OneLineContent={props.OneLineContent}
        imageUrl={props.imageUrl}
        name={props.name}
        part={props.part}
      />
    </Link>
  );
};

export default CallInterviewCard;
