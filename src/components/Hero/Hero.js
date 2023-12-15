import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import shapeDivider from "./shape.svg"

import "./Hero.css"

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundSize: "cover",
    height: "225px",
    [theme.breakpoints.up("md")]: {
      height: "400px",
    },
    marginTop:"48px",
    position: "relative",
    overflow: "hidden",
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  overlay: {
    backgroundColor: "black",
    opacity: 0.5,
    height: "225px",
    [theme.breakpoints.up("md")]: {
      height: "400px",
    },
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  shapeDivider: {
    overflow: "hidden",
    position: "relative",
    "&::before": {
      content: "''",
      fontFamily: "'shape divider from ShapeDividers.com'",
      position: "absolute",
      zIndex: 3,
      pointerEvents: "none",
      backgroundRepeat: "no-repeat",
      bottom: "-0.05vw",
      left: "-50vw",
      right: "-50vw",
      top: "-0.1vw",
      backgroundSize: "100% 30px",
      backgroundPosition: "50% 100%",
      backgroundImage: `url(${shapeDivider})`,
    },
  },}));


const Hero = ({endPoint,heroBg,textInHero}) => {
  const classes = useStyles();

  return (
      <Box className={classes.root} style={{backgroundImage: `url(${endPoint}${heroBg})`,}}>
        <Box className={classes.overlay} />
        <h1 className='textInHero'>{textInHero}</h1>
      </Box>
  );
};

export default Hero;
