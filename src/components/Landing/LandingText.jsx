import React from "react";
import { Typography } from "@material-ui/core";

import styles from "./Landing.module.css";

const LandingText = () => {
  return (
    <div className={styles.flex}>
      <div className={styles.text}>
        <Typography variant="h3">
          Hello, I'm
          <span className={styles.highlight}> Aram Martin.</span>
        </Typography>
        <br></br>
        <Typography variant="h3">I'm a software engineer.</Typography>
      </div>
    </div>
  );
};

export default LandingText;
