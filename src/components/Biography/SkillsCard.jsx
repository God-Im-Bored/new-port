import React from "react";

import {
  Card,
  CardHeader,
  CardContent,
  makeStyles,
  Tooltip,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    paddingBottom: "50px",
    width: "100%",
  },
  cardHeader: {
    textAlign: "center",
    backgroundColor: "rgb(57, 61, 63)",
    color: "white",
  },
  img: {
    width: "100px",
    height: "100px",
    objectFit: "contain",
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
   
  }
});

const SkillsCard = ({ title, images, text }) => {
  const classes = useStyles(0);

  return (
    <div className={classes.root}>
      <Card raised>
        <CardHeader className={classes.cardHeader} title={title} />
        <div className={classes.wrapper}>
          {images.map((image, key) => (
            <CardContent key={key}>
              <Tooltip title={<React.Fragment>{image.text}</React.Fragment>}>
                <img alt='' key={image} src={image.img} className={classes.img} />
              </Tooltip>
            </CardContent>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default SkillsCard;
