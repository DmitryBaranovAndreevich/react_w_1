
interface ISelect {
  label: string;
  innerRef: React.RefObject<unknown>;
  options: Array<{ value: string; text: string }>;
  validation: boolean;
  error: string;
  setValidation: () => void;
}

export default ISelect;
