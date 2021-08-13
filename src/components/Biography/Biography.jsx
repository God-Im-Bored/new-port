import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import { skills } from "./skills";
import { biography } from "./bio";
import SkillsCard from "./SkillsCard";
import styles from "./Biography.module.css";

import DrawerMenu from "../Navigation/DrawerMenu.jsx";
import ListMenu from "../Navigation/ListMenu.jsx";

import useWindowDimensions from "./script";

const useStyles = makeStyles({
  section: {
    padding: "70px 0 70px 0",
    width: "100",
    height: "100",
    display: "flex",
    flexDirection: "column",
  },

  headerTitle: {
    color: "#444649",
    fontFamily: "'Raleway', sans-serif",
    fontSize: "25pt",
    textAlign: "center",
    fontWeight: "bold",
  },
  headerBar: {
    background: "#444649",
    height: "4px",
    margin: "25px 0 75px 0",
    width: "70px",
    animationDelay: "0.5s",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  para: {
    paddingBottom: "5em",
    width: "50%",
    margin: "auto",
  },
  cards: {
    flex: "1",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  skills: {
    width: "100px",
    margin: "0 10px",
    paddingBottom: "15px",
  },
});

const Biography = () => {
  const classes = useStyles();

  const { width } = useWindowDimensions();

  return (
    <section id="about" className={classes.section}>
      {width <= 600 ? <DrawerMenu /> : <ListMenu />}
      <Container maxWidth="md">
        <div className={classes.headerTitle}>ABOUT</div>
        <div className={classes.headerBar}></div>

        <div className={styles.div}>
          <img id="avi" className={styles.avi} src="./assets/avi.png" alt="" />
        </div>

        <div className={classes.para}>
          <p className={styles.paragraph}>{biography["intro"]}</p>

          <p className={styles.paragraph}>{biography["desc"]}</p>
          <p className={styles.paragraph}>{biography["end"]}</p>
        </div>

        <div className={classes.cards}>
          {Object.keys(skills).map((key, idx) => (
            <SkillsCard
              className={classes.skills}
              key={key}
              title={key}
              images={skills[key]}
              text={idx}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Biography;
