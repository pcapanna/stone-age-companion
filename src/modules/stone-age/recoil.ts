import {atom} from "recoil";
import {CardPosition, Player, PlayerColor} from "./typings";

export const usedCardState = atom<Record<PlayerColor, Player>>({
  key: 'usedCards', // unique ID (with respect to other atoms/selectors)
  default: {}, // default value (aka initial value)
});

export const selectedPlayerState = atom<Player>({
  key: 'selectedPlayer', // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});

export const previousTryToUncrossState = atom<CardPosition>({
  key: 'prevTry', // unique ID (with respect to other atoms/selectors)
  default: undefined, // default value (aka initial value)
});