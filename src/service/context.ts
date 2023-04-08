import IItem from 'interfaces/IItem';
import React, { Dispatch, SetStateAction } from 'react';
const init: [Array<IItem>, Dispatch<SetStateAction<IItem[]>>] = [[], () => {}];
export const Context = React.createContext(init);
