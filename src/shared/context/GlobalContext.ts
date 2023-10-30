import React, { createContext } from 'react';
import { UserDataType } from '../types/userData';

export type GlobalContextType = {
  accessToken?: string;
  userData: UserDataType;
};

export const GlobalContext = createContext<{
  globalData: GlobalContextType;
  setGlobalData: React.Dispatch<React.SetStateAction<GlobalContextType>>;
}>({
  globalData: {} as GlobalContextType,
  setGlobalData: (_globalData: any) => {},
});
