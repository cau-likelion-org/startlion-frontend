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
