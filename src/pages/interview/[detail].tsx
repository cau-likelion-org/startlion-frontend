import { useRouter } from "next/router";
import React from "react";

const InterviewPage = () => {
  const router = useRouter();
  return <div>{router.query.detail}인터뷰 관련</div>;
};

export default InterviewPage;
