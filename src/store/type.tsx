export type InterviewInfo = {
  interviewId: number;
  generation: number;
  part: string;
  major: string;
  name: string;
  oneLineAnswer: string;
  imageUrl: string | null;
  interviewAnswers: Array<InterviewAnswerProp>;
};

export type InterviewAnswerProp = {
  interviewAnswerId: number;
  question: string;
  boldAnswer: string;
  answer: string;
};

export interface InterviewInfoProps {
  interviewInfo: InterviewInfo;
}

export interface TotalInterviewProps {
  totalInterview: TotalInterviewInfo;
}

export type TotalInterviewInfo = {
  totalInterview: Array<InterviewInfo>;
};
