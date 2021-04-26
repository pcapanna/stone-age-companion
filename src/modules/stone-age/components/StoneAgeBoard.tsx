import React, {useContext} from "react";
import stoneAge from '../../../resources/stoneAge.png';
import _ from "lodash";
import {StoneAgeContext} from "../context/useStoneAgeState";

const StoneAgeBoard = () => {

  const [stoneAgeState, setStoneAgeState] = useContext(StoneAgeContext);

  return (
    <header className="App-header noselect">
      <img src={stoneAge} className="App-logo" alt="logo"/>
      <div style={{position: "absolute", display: "flex", width: "1400px", height: "550px"}}>
        {_.range(0, 12).map((x) => (
          <div style={{display: "flex", flexGrow: 1, flexDirection: "column"}}>
            {_.range(0, 3).map((y) => {
                const cardUsedByUserColor = _.get(stoneAgeState?.usedCards, `${x}.${y}`);
                return (
                  <div className={cardUsedByUserColor ? "cross-container" : ""}
                       onClick={() => {
                         const newUsedCards = {
                           ...stoneAgeState.usedCards,
                           [`${x}.${y}`]: stoneAgeState.selectedColor
                         }
                         setStoneAgeState({usedCards: newUsedCards})
                       }}
                       style={{
                         display: "flex",
                         flexGrow: 1,
                         alignContent: "center",
                         alignItems: "center",
                         justifyContent: "center",
                         cursor: "pointer",
                         // @ts-ignore
                         "--cross-color": cardUsedByUserColor
                       }}>
                  </div>)
              }
            )}
          </div>
        ))}
      </div>
    </header>)
}


export default StoneAgeBoard;
