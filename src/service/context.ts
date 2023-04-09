import IItem from 'interfaces/IItem';
import React, { Dispatch, SetStateAction } from 'react';

export interface IState {
  item: Array<IItem>;
  isLoad: boolean;
}
const init: [IState, Dispatch<SetStateAction<IState>>] = [{ item: [], isLoad: false }, () => {}];
export const Context = React.createContext(init);
