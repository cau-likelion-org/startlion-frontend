export type PartInfo = {
  partName: string;
  partContent: string;
  typeOfTalent: string;
  imageUrl: string;
  partQuestions: Array<string>;
  curriculumContents: string;
  commonQuestions: Array<string>;
};

export interface PartInfoProps {
  partInfo: PartInfo;
}

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

export type TotalInterviewInfo = {
  interviewId: number;
  generation: number;
  name: string;
  part: string;
  OneLineContent: string;
  imageUrl: string | null;
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

export interface TotalInterviewInfoProps {
  totalInterviewInfo: TotalInterviewInfo;
}
