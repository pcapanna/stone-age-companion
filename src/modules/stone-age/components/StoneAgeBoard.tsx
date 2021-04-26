import React from "react";
import stoneAge from '../../../resources/stoneAge.png';
import _ from "lodash";
import useMarkCardAsUsed from "../hooks/useMarkCardAsUsed";
import useMarkCardAsUnused from "../hooks/useMarkCardAsUnused";
import {useRecoilState} from "recoil";
import {selectedPlayerState, usedCardState} from "../recoil";
import {CardPosition} from "../typings";


const StoneAgeBoard = () => {

  const [usedCards] = useRecoilState(usedCardState);
  const [selectedPlayer] = useRecoilState(selectedPlayerState);

  const markCardAsUsed = useMarkCardAsUsed();
  const markCardAsUnused = useMarkCardAsUnused();

  const handleClickCard = (event: React.MouseEvent<HTMLDivElement>, position: CardPosition) => {
    markCardAsUsed(position);
  }

  const handleRightClickCard = (event: React.MouseEvent<HTMLDivElement>, position: CardPosition) => {
    event.preventDefault();
    markCardAsUnused(position);
  }

  return (
    <header className={"App-header noselect"}>
      <img src={stoneAge} className="App-logo" alt="logo"/>
      <div style={{
        position: "absolute",
        display: "flex",
        width: "1400px",
        height: "550px",
      }}
           className={selectedPlayer?.containerClassName}
      >
        {_.range(0, 12).map((positionX) => (
          <div style={{
            display: "flex",
            flexGrow: 1,
            flexDirection: "column"
          }}>
            {_.range(0, 3).map((positionY) => {
                const playerOwningCard = _.get(usedCards, `${positionX}.${positionY}`);
                return (
                  <div className={`card-container ${playerOwningCard ? "cross-container" : ""}`}
                       onClick={(event) =>
                         handleClickCard(event, {x: positionX, y: positionY})}
                       onContextMenu={(event) => {
                         handleRightClickCard(event, {x: positionX, y: positionY})
                       }}
                       style={{
                         // @ts-ignore
                         "--cross-color": playerOwningCard?.color
                       }}>
                  </div>)
              }
            )}
          </div>
        ))
        }
      </div>
    </header>)
}


export default StoneAgeBoard;
