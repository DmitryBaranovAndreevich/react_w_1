import TDataRef from './TDataForm';
import TValidRef from './TValidRef';

interface BuyPopupState {
  validation: TValidRef;
  items: Array<TDataRef> | [];
  isSend: boolean;
}

export default BuyPopupState;
