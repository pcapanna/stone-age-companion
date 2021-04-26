import React from 'react';
// import BackgroundImage from "../resources/wallpaper-grid-grey.png";
import IconButton from "@material-ui/core/IconButton";
import {toast} from "react-toastify";
import CreateIcon from "@material-ui/icons/CreateRounded";
import {createMuiTheme} from "@material-ui/core";
import useStoneAgeState from "../context/useStoneAgeState";


const DrawIconButton = ({color}: { color: string }) => {
  const contrastColor = createMuiTheme({
    palette: {
      primary: {
        main: color
      },
    },
  }).palette.getContrastText(color);
  const [stoneAgeState, setStoneAgeState] = useStoneAgeState();
  return (
    <IconButton aria-label="add meetup" color="default" style={{backgroundColor: color}}
                onClick={() => {
                  setStoneAgeState({selectedColor: color});
                  toast.dismiss()
                  toast.info("Color changed to " + color, {
                    position: "bottom-right",
                    style: {color: contrastColor, backgroundColor: color}
                  });
                }}>
      <CreateIcon/>
    </IconButton>)
}

export default DrawIconButton;
