import React, { useState } from "react";
import {
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";

import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import IconButton from "@material-ui/core/IconButton";
import SkipNextIcon from "@material-ui/icons/SkipNext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "auto",
    height: "60vh",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
    width: "auto",
  },
  bar: {
    background: "#444649",
    height: "1px",
    margin: "5px 0 20px 0",
    width: "255px",
    animationDelay: "0.5s",
    display: "block",
  },
  stack: {
    fontWeight: "500",
    color: '#8D99AE',
    fontSize: '20px'
  },
  desc: {
    fontSize: '14px',
    textAlign: 'justify',
    marginBottom: '2px'
  },
  cover: {
    margin: "auto",
    width: "90%",
    height: "90%",
    objectFit: "cover",
  },
  controls: {
    display: "flex",
    margin: "auto",
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  btns: {
    margin: "auto",
    display: "flex",
  },
}));

const ProjectInfo = ({ data }) => {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState(data.gallery[index]);

  const classes = useStyles();
  

  const nextImg = () => {
    if (index === 0 || index <= 1) {
      setIndex(index + 1);
      setDisplay(data.gallery[index]);
    } else {
      setIndex(0);
      setDisplay(data.gallery[index]);
    }
  };

  const prevImg = () => {
    if (index === 0) {
      setIndex(index + 2);
      setDisplay(data.gallery[index]);
    } else {
      setIndex(index - 1);
      setDisplay(data.gallery[index]);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="h4">{data.title}</Typography>
          <Typography
            className={classes.stack}
            variant="subtitle2"
            
          >
            {data.stack}
          </Typography>
          <div className={classes.bar}></div>
          <Typography className={classes.desc} variant="body2" >
            {data.desc}
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.cover}
          image={display}
          title="project image"
        />

        <div className={classes.controls}>
          <IconButton onClick={prevImg} aria-label="previous">
            <SkipPreviousIcon />
          </IconButton>

          <IconButton onClick={nextImg} aria-label="next">
            <SkipNextIcon />
          </IconButton>
        </div>
        <div className={classes.btns}>
          <Button href={data.demo} target="_blank">
            <Typography>DEMO</Typography>
          </Button>

          <Button href={data.source} target="_blank">
            <Typography>SOURCE</Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
