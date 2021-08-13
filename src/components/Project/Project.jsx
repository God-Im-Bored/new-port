import React from "react";
import { Container, makeStyles } from "@material-ui/core";
import ProjectCard from './ProjectCard.jsx'
import { projects } from './project'



const useStyles = makeStyles({
  section: {
    padding: "70px 0 70px 0",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: '#f5f5f5'
  },
  headerTitle: {
    color: "#444649",
    fontFamily: "'Raleway', sans-serif",
    fontSize: "25pt",
    textAlign: "center",
    fontWeight: 'bold'
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
});

const Project = () => {
  const classes = useStyles();

  return (
    <section id="projects" className={classes.section}>
      <Container maxwidth="md">
        <div className={classes.headerTitle}>PROJECTS</div>
        <div className={classes.headerBar}></div>
      </Container>
      <ProjectCard data={projects}/>
      
    </section>
  );
};


export default Project
