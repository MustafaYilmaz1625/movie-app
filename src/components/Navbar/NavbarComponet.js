import React, { useState, useEffect } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  makeStyles,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import DrawerComponet from "./DrawerComponet";
import { useHistory } from "react-router-dom";

//customise component
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  openDrawer: {
    marginLeft: "auto",
    cursor: "pointer",
    fontSize: "14px",
  },
  font: {
    fontSize: "18px",
    fontWeight: "bold",
  },
}));

const NavbarComponet = () => {
  //css
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(true);
  const [value, setValue] = useState(0);

  //theme customisation
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  //history
  const history = useHistory();

  //Routing
  useEffect(() => {
    if (value === 0) history.push("/");
    if (value === 1) history.push("/popularity");
  }, [value]);

  //handle change
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <LiveTvIcon />
            </IconButton>
            <Typography className={classes.font}>FAKE MOVİES</Typography>

            {/* Tabs */}
            {!isMatch && (
              <Tabs
                value={value}
                onChange={handleChange}
                className={classes.openDrawer}
              >
                <Tab icon={<LiveTvIcon />} label="Movies" />
                <Tab icon={<TrendingUpIcon />} label="Popularity" />
              </Tabs>
            )}
            <MenuIcon onClick={setOpenDrawer} className={classes.openDrawer} />
          </Toolbar>
        </AppBar>
        {/* Drawer */}
        {isMatch && (
          <DrawerComponet
            openDrawer={openDrawer}
            setOpenDrawer={setOpenDrawer}
          />
        )}
      </>
    </div>
  );
};

export default NavbarComponet;
