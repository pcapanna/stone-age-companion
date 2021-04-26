import React from 'react';
import StoneAgeBoard from "../components/StoneAgeBoard";
import StoneAgeContainer from "../components/StoneAgeContainer";
import "../styles.css"
import {useRecoilState} from "recoil";
import {selectedPlayerState} from "../recoil";


const StoneAgeScreen = () => {

  // const [selectedPlayer] = useRecoilState(selectedPlayerState);

  return (
      <StoneAgeContainer title={"Stone Age Companion"}
                         // className={selectedPlayer?.containerClassName}
      >
        <StoneAgeBoard/>
      </StoneAgeContainer>
  );
};

export default StoneAgeScreen;
