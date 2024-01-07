export interface KeyPair<V> {
  [key: string]: V;
}

type ApplicationType = {
  applicationId: number;
  generationId: number;
  name: string;
  part: string;
  status: string;
};

export type MypageType = {
  isSubmitted: string;
  applicationList: Array<ApplicationType>;
  defaultApplicationList: Array<ApplicationType>;
};

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

export type FirstPageType = {
  isAgreed: boolean;
  name: string;
  gender: string;
  studentNum: number;
  major: string;
  multiMajor: string;
  semester: string;
  phone: string;
  email: string;
  pathToKnows: string;
  part: string;
};

export type SecondPageType = {
  commonAnswer1: string;
  commonAnswer2: string;
  commonAnswer3: string;
  commonAnswer4: string;
  commonAnswer5: string;
};

export type ThirdPageType = {
  partAnswer1?: string;
  partAnswer2?: string;
  partAnswer3?: string;
  partAnswer4?: string;
  portfolio: string;
};
