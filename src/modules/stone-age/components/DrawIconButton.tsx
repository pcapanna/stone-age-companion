import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import {toast} from "react-toastify";
import CreateIcon from "@material-ui/icons/CreateRounded";
import {createMuiTheme} from "@material-ui/core";
import {Player} from "../typings";
import {useRecoilState} from "recoil";
import {selectedPlayerState} from "../recoil";


const DrawIconButton = ({player}: { player: Player }) => {
  const contrastColor = createMuiTheme({
    palette: {
      primary: {
        main: player.color
      },
    },
  }).palette.getContrastText(player.color);
  const [selectedPlayer, setSelectedPlayer] = useRecoilState(selectedPlayerState);
  return (
    <IconButton aria-label="add meetup" color="default" style={{backgroundColor: player.color}}
                onClick={() => {
                  if (player === selectedPlayer){
                    return;
                  }
                  setSelectedPlayer(player);
                  toast.dismiss()
                  toast.info(`${player.description} seleccionado`, {
                    position: "bottom-right",
                    style: {color: contrastColor, backgroundColor: player.color}
                  });
                }}>
      <CreateIcon/>
    </IconButton>)
}

export default DrawIconButton;
