import React from "react";
import { AppBar, Toolbar, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    background: "#232741",
    boxShadow: "none",
    display: "flex",
    flexDirection: "row",
    height: "50px",
    zIndex: 99,
    textAlign: "left",
  },
  button: {
    color: "#fff",
    fontSize: "12pt",
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

const ListMenu = () => {
  const classes = useStyles();

  const scroller = (event) => {
    const selected = buttonLinks.find(
      (link) => link.name === event.target.innerHTML
    );

    return document
      .getElementById(selected.id)
      .scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <AppBar className={classes.list}>
        <Toolbar>
          {buttonLinks.map((link, idx) => {
            return (
              <Button
                key={idx}
                className={classes.button}
                onClick={scroller}
                id={link.name}
              >
                {link.name}
              </Button>
            );
          })}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ListMenu;
