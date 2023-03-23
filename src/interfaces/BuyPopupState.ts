import TDataRef from './TDataRef';
import TValidRef from './TValidRef';

interface BuyPopupState {
  validation: TValidRef;
  items: Array<TDataRef> | [];
}

export default BuyPopupState;
