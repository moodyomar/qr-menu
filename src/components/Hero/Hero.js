import React from 'react';
import { Box} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundImage: "url(hero.jpg)",
    backgroundSize: "cover",
    height: "225px",
    position: "relative",
    overflow:"hidden"
  },
  logo: {
    height: "250px",
    width: "250px",
    objectFit: "contain",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "black",
    opacity: 0.5,
    height: "225px",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
});

const Hero = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.overlay} />
      <img className={classes.logo} src={"logo-t.png"} alt="Logo" />
    </Box>
  );
};

export default Hero;
