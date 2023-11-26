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

interface AvailableTimeArray {
  firstDay: Array<number>;
  secondDay: Array<number>;
}

export const AvailableTimeAtom = atom<AvailableTimeArray>({
  key: "applyAvailableTimeAtom",
  default: {
    firstDay: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    secondDay: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
});
