import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import styles from "./Landing.module.css";

const useStyles = makeStyles({
  button: {
    color: "white",
    fontFamily: 'Jazz LET fantasy',
    boxSizing: 'border-box',
    width: '100%',
    border: 'solid #fff 2px',
    '&:hover': {
        backgroundColor: 'white',
        color: 'black'
    }
  },
});

const LandingButton = () => {
  const classes = useStyles();

  const scroller = () => {
    return document
      .getElementById("about")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.buttonContainer}>
        <Button className={classes.button} onClick={scroller} disableRipple>
          View My Work
        </Button>
      
    </div>
  );
};

export default LandingButton;
