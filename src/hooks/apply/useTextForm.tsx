import { useState } from "react";

export const useTextForm = (): [
  string,
  (e: React.ChangeEvent<HTMLTextAreaElement>) => void
] => {
  const [value, setValue] = useState("");
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  return [value, onChange];
};
