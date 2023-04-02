import { Dispatch, SetStateAction } from 'react';
import TDataForm from './TDataForm';

interface ICheckBox {
  span: string;
  validation: boolean;
  error: string;
  name: string;
  setChange: Dispatch<SetStateAction<TDataForm>>;
  value: boolean;
}

export default ICheckBox;
