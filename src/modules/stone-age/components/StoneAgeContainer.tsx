import React from 'react';
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {DrawerMenu} from "../../drawer-menu/components";
import StoneAgeAppBar from "./StoneAgeAppBar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: '100vh',
      // overflow: 'auto',
      // color: 'white',
      // background: `url(${BackgroundImage})`,
      backgroundColor: '#f2f2f2',
      minWidth: "fit-content"
    }
  })
);

const StoneAgeContainer = ({title, children, ...rest}: { title: string, children? } & Record<string, any>) => {

  const classes = useStyles();

  return (
    <div className={classes.root} {...rest}>
      <StoneAgeAppBar title={title}/>
      <DrawerMenu>
        {children}
      </DrawerMenu>
    </div>
  );
};

export default StoneAgeContainer;
