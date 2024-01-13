import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import {
  FirstPageType,
  KeyPair,
  KeyPairDual,
  MypageType,
  SecondPageType,
  ThirdPageType,
} from "./type";

export const ApplyPageAtom = atom<number>({
  key: "applyPageAtom",
  default: 1,
});

export const ApplyPageCheckAtom = atom<string>({
  key: "applyFinishCheckAtom",
  default: "apply",
});

// interface AvailableTimeArray {
//   firstDay: Array<number>;
//   secondDay: Array<number>;
// }

export const FirstApplyAtom = atom<FirstPageType>({
  key: "firstPageAtom",
  default: {
    isAgreed: false,
    name: "",
    gender: "",
    studentNum: null,
    major: "",
    multiMajor: "",
    semester: "",
    phone: "",
    pathToKnow: "",
    etcDetail: "",
    email: "",
    part: "",
  },
});

export const SecondApplyAtom = atom<SecondPageType>({
  key: "secondPageAtom",
  default: {
    commonAnswer1: "",
    commonAnswer2: "",
    commonAnswer3: "",
    commonAnswer4: "",
    commonAnswer5: "",
  },
});

export const ThirdApplyAtom = atom<ThirdPageType>({
  key: "thirdPageAtom",
  default: {
    portfolio: "",
  },
});
//얘를 마지막 페이지에 넣으면 될 듯...
export const AvailableTimeAtom = atom<KeyPair<Array<number>>>({
  key: "applyAvailableTimeAtom",
  default: {
    firstDay: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    secondDay: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    thirdDay: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
});

export const LastApplyAtom = atom<KeyPairDual<boolean, Array<number>>>({
  key: "lastPageAtom",
  default: {
    firstDay: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    secondDay: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    thirdDay: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    lastCheck: false,
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

export const mypageAtom = atom<MypageType>({
  key: "mypageAtom",
  default: {
    isSubmitted: "",
    applicationList: [],
    defaultApplicationList: [],
  },
});

export const applicationIdAtom = atom<number>({
  key: "applicationIdAtom",
  default: 0,
});
