interface ICheckBox {
  span: string;
  innerRef: React.RefObject<unknown>;
  validation: boolean;
  error: string;
  setValidation: () => void;
}
