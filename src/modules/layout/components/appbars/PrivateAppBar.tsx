import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import {CssBaseline} from "@material-ui/core";
import {DRAWER_WIDTH, useIsDrawerOpen, useOpenDrawer} from "../../../drawer-menu";
import {AppToolbar} from "../../../ui";
import {toast} from "react-toastify";
import { ProfileAvatar } from '../../../login';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    hide: {
      display: 'none',
    },
    grow: {
      flexGrow: 1,
    },
    sectionDesktop: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        justifyContent: 'flex-end',
        flexGrow: 1,
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }),
);

const PrivateAppBar = ({title = "Meetups", children}: { title: string; children?: any }) => {
  const classes = useStyles();

  const handleOpenDrawerMenu = useOpenDrawer();
  const drawerMenuOpen = useIsDrawerOpen();


  return (
    <div className={classes.root}>
      <CssBaseline/>
      <AppToolbar title={title} drawerMenuConfig={{
        width: DRAWER_WIDTH,
        handleOpen: handleOpenDrawerMenu,
        open: drawerMenuOpen
      }}>
        {/*<div className={classes.grow}/>*/}
        <div className={classes.sectionDesktop}>
          {children ? children : (<>
            <IconButton aria-label="add meetup" color="inherit"
                        onClick={() => toast.info("You could add something here!")}>
              <AddIcon/>
            </IconButton>
            <ProfileAvatar/>
          </>)}
        </div>
      </AppToolbar>
    </div>
  );
};

export default PrivateAppBar;
