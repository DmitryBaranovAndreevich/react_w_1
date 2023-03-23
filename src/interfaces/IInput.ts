interface IInput {
  type: string;
  error: string;
  innerRef: React.RefObject<unknown>;
  validation: boolean;
  stateKey?: string;
  setValidation: () => void;
  addClass?: string;
}

export default IInput;
