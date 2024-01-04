import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

export const ApplyPageAtom = atom<number>({
  key: "applyPageAtom",
  default: 1,
});

export const ApplyPageCheckAtom = atom<string>({
  key: "applyFinishCheckAtom",
  default: "apply",
});

export const ApplyPartAtom = atom<string>({
  key: "applyPartAtom",
  default: "",
});

export interface KeyPair<V> {
  [key: string]: V;
}

// interface AvailableTimeArray {
//   firstDay: Array<number>;
//   secondDay: Array<number>;
// }

export const AvailableTimeAtom = atom<KeyPair<Array<number>>>({
  key: "applyAvailableTimeAtom",
  default: {
    firstDay: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    secondDay: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
});

export interface IUserInfo {
  accessToken: string;
  refreshToken: string;
}

const { persistAtom } = recoilPersist();

// const { persistAtom } = recoilPersist({
//   //atom을 자동으로 로컬에 저장, 삭제해준다.
//   key: "userInfoLocal", //로컬스토리지에 저장되는 키값
//   storage: localStorage,
// });
export const userInfoState = atom<IUserInfo>({
  key: "userInfo",
  default: { accessToken: "", refreshToken: "" },
  effects_UNSTABLE: [persistAtom],
});

type ApplicationType = {
  applicationId: number;
  generationId: number;
  name: string;
  partId: number;
  status: string;
};

type MypageType = {
  isSubmitted: string;
  applicationList: Array<ApplicationType>;
  defaultApplicationList: Array<ApplicationType>;
};

export const mypageAtom = atom<MypageType>({
  key: "mypageAtom",
  default: {
    isSubmitted: "",
    applicationList: [],
    defaultApplicationList: [],
  },
});
