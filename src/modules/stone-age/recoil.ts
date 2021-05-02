import {atom} from "recoil";
import {CardPosition, CardPositionKey, Player} from "./typings";

export const usedCardState = atom<Record<CardPositionKey, Player>>({
  key: 'usedCards', // unique ID (with respect to other atoms/selectors)
  default: {}, // default value (aka initial value)
});

export const cardsBlurredState = atom<boolean>({
  key: 'cardsBlurred',
  default: false,
});

export const selectedPlayerState = atom<Player>({
  key: 'selectedPlayer', // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});

export const previousTryToUncrossState = atom<CardPosition>({
  key: 'prevTry', // unique ID (with respect to other atoms/selectors)
  default: undefined, // default value (aka initial value)
});