import { atom } from "recoil";

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
