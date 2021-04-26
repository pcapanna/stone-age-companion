import {useCallback} from "react";
import {CardPosition, Player} from "../typings";
import {keyOfCardPosition} from "../utils";
import {useRecoilState} from "recoil";
import {usedCardState} from "../recoil";

export default () => {
  const [usedCards, setUsedCards] = useRecoilState(usedCardState);

  return useCallback((position: CardPosition, newValue: (Player | undefined)) => {
    const newUsedCards = {
      ...usedCards,
      [keyOfCardPosition(position)]: newValue
    }
    setUsedCards(newUsedCards)
  }, [setUsedCards, usedCards]);
}

