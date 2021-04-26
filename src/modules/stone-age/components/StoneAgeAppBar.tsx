import React from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
// import BackgroundImage from "../resources/wallpaper-grid-grey.png";
import {PrivateAppBar} from "../../layout/components/appbars";
import DrawIconButton from './DrawIconButton';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: '100vh',
      backgroundColor: '#f2f2f2',
      minWidth: "fit-content"
    }
  })
);

const StoneAgeAppBar = ({title}: { title: string }) => {

  return (
    <PrivateAppBar title={title}>
      <DrawIconButton color={"#d03434"}/>
      <Box m={1/2}/>
      <DrawIconButton color={"#42c542"}/>
      <Box m={1/2}/>
      <DrawIconButton color={"#4b9bff"}/>
      <Box m={1/2}/>
      <DrawIconButton color={"#ffff03"}/>
    </PrivateAppBar>
  );
};

export default StoneAgeAppBar;
