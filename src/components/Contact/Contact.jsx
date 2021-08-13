import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import ContactForm from "./ContactForm";

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles({
  section: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#232741",
  },
  headerTitle: {
    padding: "70px 0 0 0",
    color: "white",
    fontFamily: "'Raleway', sans-serif",
    fontSize: "25pt",
    textAlign: "center",
    fontWeight: "bold",
  },
  headerBar: {
    background: "white",
    height: "4px",
    margin: "25px 0 55px 0",
    width: "70px",
    animationDelay: "0.5s",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  query: {
    display: "block",
    animationDelay: "0.5s",
    fontWeight: "300",
    textAlign: "center",
    color: "#e7ad99",
    fontFamily: "Raleway",
    fontSize: "10pt",
  },
  container: {
    background: "#1b242f",
    positoin: "reltaive",
    marginTop: "75px",
  },
  icon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px",
  },
  flex: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  "@keyframes spinAround": {
    "from": {
      transform: 'rotate(0deg)'
    },
    "to": {
      transform: 'rotate(360deg)'
    }
  },
  img: {
    width: "50px",
    height: "50px",
    position: "relative",
    cursor: "pointer",
    background: "#262f38",
    overflow: "hidden",
    transition: "background 0.3s, color 0.3s, box-shadow 0.3s, transform 0.3s",
    margin: "0 15px",
    '&:hover': {
      background: '#ffd60a',
      animation: `$spinAround linear infinite`
    }
  },
  wrap: {
    color: '#fff',
    textAlign: 'center',
    display: 'block',
    marginTop: '25%',
    marginLeft: 'auto',
    marginRight: 'auto',
    
  },
  up: {
    color: '#fff',
    textAlign: 'center',
    display: 'block',
    marginTop: '25%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: '10px'

  },
  arrow: {
    cursor: 'pointer',
    lineHeight: '40pt',
    width: '47px',
    height: '47px',
    background: '#e7ad99',
    color: '#fff',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '20px',
    marginTop: '-35px'
  },
  copyright: {
    fontSize: "10pt",
    textAlign: "center",
    color: "#f5f5f5",
    paddingTop: '50px'
  },
  year: {
    color: "#ffd60a",
  },
});

const Contact = () => {
  const classes = useStyles(0);

  const scroller = () => {
    return document
      .getElementById("landing")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <section id="contact" className={classes.section}>
        <svg
          preserveAspectRatio="none"
          viewBox="0 0 100 102"
          height="75"
          width="100%"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="svgcolor-light"
        >
          <path
            d="M0 0 L50 100 L100 0 Z"
            fill="#f5f5f5"
            stroke="#f5f5f5"
          ></path>
        </svg>

        <Container maxwidth="md">
          <div className={classes.headerTitle}>CONTACT</div>
          <div className={classes.headerBar}></div>
          <div className={classes.query}>
            Have a question or want to collaborate?
          </div>
          <ContactForm />
        </Container>
        <footer className={classes.container}>
        <div className={classes.arrow}>
          <ArrowUpwardIcon className={classes.up} onClick={scroller} />
        </div>
          <div className={classes.flex}>
            <div className={classes.icon}>
              <a
                rel="noreferrer"
                href="mailto:aram.martin.eng@gmail.com"
                target="_blank"
              >
                <div className={classes.img}>
                  <MailOutlineIcon className={classes.wrap} />
                </div>
              </a>
            </div>

            <div className={classes.icon}>
              <a
                rel="noreferrer"
                href="https://www.linkedin.com/in/aram-martin"
                target="_blank"
              >
                <div className={classes.img}>
                  <LinkedInIcon className={classes.wrap} />
                </div>
              </a>
            </div>

            <div className={classes.icon}>
              <a
                rel="noreferrer"
                alt=""
                href="https://github.com/God-Im-Bored"
                target="_blank"
              >
                <div className={classes.img}>

                <GitHubIcon className={classes.wrap} />
                </div>
              </a>
            </div>
          </div>
          <div className={classes.copyright}>
            <span>© </span>
            <span className={classes.year}>2021 </span>
            <span>Aram Martin. All rights reserved.</span>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Contact;
