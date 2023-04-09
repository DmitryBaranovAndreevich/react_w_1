import { FormEvent } from 'react';

interface IInput {
  type: string;
  error: string;
  validation: boolean;
  stateKey?: string;
  name: string;
  setChange: (e: FormEvent) => void;
  addClass?: string;
  value: string;
}

export default IInput;
