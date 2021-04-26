import React, {useState} from 'react';
import StoneAgeBoard from "../components/StoneAgeBoard";
import StoneAgeContainer from "../components/StoneAgeContainer";
import "../styles.css"
import {defaultState, StoneAgeContext, StoneAgeState} from '../context/useStoneAgeState';


const StoneAgeScreen = () => {

  const [contextState, setContextState] = useState<StoneAgeState>(defaultState);

  return (
    <StoneAgeContext.Provider value={[contextState, (newValues) =>
      setContextState({...contextState, ...newValues})]}>
      <StoneAgeContainer title={"Stone Age Companion"} style={{}}>
        <StoneAgeBoard/>
      </StoneAgeContainer>
    </StoneAgeContext.Provider>
  );
};

export default StoneAgeScreen;
