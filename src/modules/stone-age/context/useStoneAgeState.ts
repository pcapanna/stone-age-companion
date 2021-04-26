import {createContext, Dispatch, SetStateAction, useContext} from "react";

export const StoneAgeContext =
  createContext<[StoneAgeState, Dispatch<SetStateAction<Partial<StoneAgeState>>>]>(undefined);

export type Color = string;

export interface StoneAgeState {
  selectedColor?: Color;
  usedCards: Record<string, Color>; // per position x y
}

export const defaultState = {
  usedCards: {} // per position x y
}

export default () => {
  return useContext(StoneAgeContext)
};
