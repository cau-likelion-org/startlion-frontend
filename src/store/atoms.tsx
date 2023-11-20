import { atom } from "recoil";

export const ApplyPageAtom = atom<number>({
  key: "applyPageAtom",
  default: 1,
});

export const ApplyPageCheckAtom = atom<string>({
  key: "applyFinishCheckAtom",
  default: "apply",
});
