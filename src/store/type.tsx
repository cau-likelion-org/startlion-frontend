export type PartInfo = {
  partContent: string;
  typeOfTalent: string;
  imageUrl: string;
  partQuestions: Array<string>;
  curriculumContents: Array<string>;
  commonQuestions: Array<string>;
};

export interface PartInfoProps {
  partInfo: PartInfo;
}
