import React from 'react';
// import BackgroundImage from "../resources/wallpaper-grid-grey.png";
import {PrivateAppBar} from "../../layout/components/appbars";
import DrawIconButton from './DrawIconButton';
import Box from '@material-ui/core/Box';
import {Player} from "../typings";


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

  return (
    <PrivateAppBar title={title}>
      <DrawIconButton player={RedPlayer}/>
      <Box m={1 / 2}/>
      <DrawIconButton player={GreenPlayer}/>
      <Box m={1 / 2}/>
      <DrawIconButton player={BluePlayer}/>
      <Box m={1 / 2}/>
      <DrawIconButton player={YellowPlayer}/>
    </PrivateAppBar>
  );
};

export default StoneAgeAppBar;
