import {useCallback} from "react";
import {toast} from "react-toastify";
import {CardPosition} from "../typings";
import {keyOfCardPosition} from "../utils";
import useSetCardUsedTo from "./useSetCardUsedTo";
import {useRecoilState} from "recoil";
import {previousTryToUncrossState, selectedPlayerState, usedCardState} from "../recoil";

export default () => {

  const [usedCards] = useRecoilState(usedCardState);
  const [selectedPlayer] = useRecoilState(selectedPlayerState);
  const [previousTryToUncross, setPreviousTryToUncross] = useRecoilState(previousTryToUncrossState);
  const setCardUsedTo = useSetCardUsedTo();

  return useCallback((position: CardPosition) => {
    const usedCardPlayer = usedCards[keyOfCardPosition(position)];
    const alreadyUsedCard: boolean = !!usedCardPlayer;
    if (alreadyUsedCard) {
      if (usedCardPlayer !== selectedPlayer) {
        toast.warning("Esa carta ya le pertenece a otro jugador! Si quiere desmarcarla haga click derecho dos veces",
          {toastId: "alreadyOwnedCard"})
      }
      return;
    }
    setCardUsedTo(position, selectedPlayer);
    setPreviousTryToUncross(null);
  }, [usedCards, selectedPlayer, setPreviousTryToUncross, setCardUsedTo, toast]);
}
