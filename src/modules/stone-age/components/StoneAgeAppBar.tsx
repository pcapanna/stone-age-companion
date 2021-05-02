import React from 'react';
// import BackgroundImage from "../resources/wallpaper-grid-grey.png";
import {PrivateAppBar} from "../../layout/components/appbars";
import DrawIconButton from './DrawIconButton';
import Box from '@material-ui/core/Box';
import {Player} from "../typings";
import {Button} from '@material-ui/core';
import FormatColorFillIcon from "@material-ui/icons/FormatColorFill";
import FormatColorResetIcon from "@material-ui/icons/FormatColorReset";
import {useRecoilState} from "recoil";
import {cardsBlurredState} from "../recoil";


const RedPlayer: Player = {
  color: "#d03434",
  description: "Rojo",
  containerClassName: "red-cursor"
}

const GreenPlayer: Player = {
  color: "#42c542",
  description: "Verde",
  containerClassName: "green-cursor"
}

const BluePlayer: Player = {
  color: "#4b9bff",
  description: "Azul",
  containerClassName: "blue-cursor"
}

const YellowPlayer: Player = {
  color: "#ffff03",
  description: "Amarillo",
  containerClassName: "yellow-cursor"
}

const StoneAgeAppBar = ({title}: { title: string }) => {

  const [cardsBlurred, setCardsBlurred] = useRecoilState(cardsBlurredState);

  return (
    <PrivateAppBar title={title}>
      <div style={{display: "flex", justifyContent: "center", flexGrow: 1, marginRight: 50}}>
        <Button variant={"contained"} color="secondary"
                aria-label="blur cards"
                startIcon={
                  cardsBlurred ? <FormatColorResetIcon/> : <FormatColorFillIcon/>}
                onClick={() => setCardsBlurred(!cardsBlurred)}>
          {cardsBlurred ? "Unblur" : "Blur"}
        </Button>
      </div>
      <div style={{display: "flex"}}>
        <DrawIconButton player={RedPlayer}/>
        <Box m={1 / 2}/>
        <DrawIconButton player={GreenPlayer}/>
        <Box m={1 / 2}/>
        <DrawIconButton player={BluePlayer}/>
        <Box m={1 / 2}/>
        <DrawIconButton player={YellowPlayer}/>
      </div>
    </PrivateAppBar>
  );
};

export default StoneAgeAppBar;
