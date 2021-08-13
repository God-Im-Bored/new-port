import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  makeStyles,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  drawer: {
    background: "transparent",
    height: "50px",
    width: '100%',
    boxShadow: "none",
    zIndex: 1400,
  },
  box: {
    paddingTop: '50px',
    width: '10%',
    display: 'flex',
    flexDirection: 'column'
  },

  nav: {
    background: "transparent",
    boxShadow: "none",
  },
  icon: {
    color: "#e7ad99",
    "&:hover": {
      color: "white",
    },
  },
}));

const buttonLinks = [
  {
    name: "Home",
    id: "landing",
  },
  {
    name: "About",
    id: "about",
  },
  {
    name: "Projects",
    id: "projects",
  },
  {
    name: "Contact",
    id: "contact",
  },
];

const DrawerMenu = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({
      [anchor]: open,
    });
  };

  const scroller = (event) => {
    const selected = buttonLinks.find(
      (button) => button.name === event.target.innerHTML
    );

    return document
      .getElementById(selected.id)
      .scrollIntoView({ behavior: "smooth" });
  };

  const list = () => (
    <div
      className={classes.box}
      onClick={toggleDrawer(false)}
    >
      <List>
        {buttonLinks.map((link, index) => (
          <ListItem button onClick={scroller} key={index}>
            <ListItemText primary={link.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {["top"].map((anchor) => (
        <div key={anchor}>
          <AppBar className={classes.drawer} top={40}>
            <Toolbar>
              <Button
                className={classes.icon}
                key={anchor}
                onClick={toggleDrawer(anchor, true)}
              >
                <MenuIcon />
              </Button>
            </Toolbar>
          </AppBar>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            variant='persistent'
          >
            {list(anchor)}
          </Drawer>
        </div>
      ))}
    </div>
  );
};

export default DrawerMenu;
