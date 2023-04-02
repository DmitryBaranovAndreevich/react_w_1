import { FormEvent } from "react";

interface ISelect {
  label: string;
  options: Array<{ value: string; text: string }>;
  validation: boolean;
  error: string;
  name: string;
  setChange: (e: FormEvent) => void;
  value: string
}

export default ISelect;
