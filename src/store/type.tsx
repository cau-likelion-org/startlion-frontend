export type InterviewInfo = {
  interviewId: number;
  title: string;
  generation: number;
  part: string;
  major: string;
  name: string;
  oneLineContent: string;
  oneLineAnswer: string;
  imageUrl: string | null;
  interviewAnswers: Array<InterviewAnswerProp>;
};

export type InterviewAnswerProp = {
  interviewAnswerId: number;
  question: string;
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
