import {CardPosition} from "../typings";
import useSetCardUsedTo from "./useSetCardUsedTo";
import _ from "lodash";
import {useRecoilState} from "recoil";
import {previousTryToUncrossState} from "../recoil";

export default () => {
  const [previousTryToUncross, setPreviousTryToUncross] = useRecoilState(previousTryToUncrossState);
  const setCardUsedTo = useSetCardUsedTo();

  return (position: CardPosition) => {
    debugger;
    if (_.isEqual(position, previousTryToUncross)) {
      setCardUsedTo(position, undefined);
    } else {
      setPreviousTryToUncross(position);
    }
  }
}
