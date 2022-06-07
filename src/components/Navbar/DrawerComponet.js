import React from "react";
import { useHistory } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  ListItemIcon,
} from "@material-ui/core";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";

const useStyles = makeStyles((responsive) => ({
  drawer: {
    backgroundColor: responsive.palette.common.drawer,
  },
  link: {
    color: "white",
  },
  icon: {
    color: "yellow",
  },
}));

const DrawerComponet = ({ openDrawer, setOpenDrawer }) => {
  const classes = useStyles();

  //history
  const history = useHistory();

  const navigation = (e) => {
    history.push(`/${e}`);
  };

  return (
    <Drawer
      classes={{ paper: classes.drawer }}
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
      anchor="right"
    >
      <List className={classes.link}>
        <ListItem>
          <ListItemIcon className={classes.icon}>
            <MovieFilterIcon />
          </ListItemIcon>
          <ListItemText onClick={() => navigation("")} primary="Movies" />
        </ListItem>
        <ListItem>
          <ListItemIcon className={classes.icon}>
            <TrendingUpIcon />
          </ListItemIcon>
          <ListItemText
            onClick={() => navigation("popularity")}
            primary="Popularity"
          />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DrawerComponet;
