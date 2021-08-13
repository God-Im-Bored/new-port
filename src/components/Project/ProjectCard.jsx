import React, { useState } from "react";
import {
  makeStyles,
  Grid,
  Modal,
  Fade,
  Backdrop,
  Button,
} from "@material-ui/core";

import ProjectInfo from "./ProjectInfo.jsx";

import "./project.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: "1",
  },
  control: {
    padding: theme.spacing(0),
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  styling: {
    border: "2px solid #232741",
    color: "#444649",
    "&:hover": {
      background: "#232741",
      color: "#fff",
    },
  },
}));

const ProjectCard = ({ data }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState({});

  const handleOpen = (event) => {
    const selected = data.find(
      (project) => project.title === event.target.parentElement.id
    );

    setSelectedProject(selected);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Grid container className={classes.root} spacing={0}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={0}>
            {data.map((project, idx) => {
              return (
                <Grid className={classes.control} key={idx}>
                  <div className="container">
                    <div className="overlay"></div>

                    <p className="title">{project.title}</p>
                    <p className="stack">{project.stack}</p>

                    <img alt="" key={project.source} src={project.img} />

                    <div className="button">
                      <Button
                        type="button"
                        onClick={handleOpen}
                        id={project.title}
                        className={classes.styling}
                      >
                        Learn More
                      </Button>

                      <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                          timeout: 500,
                        }}
                      >
                        <Fade in={open}>
                          <div className={classes.paper}>
                            <ProjectInfo data={selectedProject} />
                          </div>
                        </Fade>
                      </Modal>
                    </div>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProjectCard;
