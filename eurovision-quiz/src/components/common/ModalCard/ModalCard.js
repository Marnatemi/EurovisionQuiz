import React from 'react';
import useSound from 'use-sound';
import { Card, CardActions, CardHeader, Button, Divider  } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import clickSound from '../../../assets/Sounds/click3.mp3';

const modal = "modal";

const useStyles = makeStyles(theme => ({
  root: {
    opacity: 0,
    borderRadius: 12,
    minWidth: 250,
    maxWidth: 450,
    maxHeight: '700px',
    height: '95%',
    minHeight: 'min-content',
    overflowY: 'scroll',
    justifyContent: 'flex-start',
    width: '95%',
    textAlign: 'center',
    background: theme.palette.primary.light,
    ...theme.positioning.absoluteCenter,
    display: 'flex',
    flexDirection: 'column',
    letterSpacing: 0.7,
    animation: `$${modal} 0.3s ease-in forwards`,
    "& p span": {
      color: theme.palette.primary.main,
    },
    '& *':{
      marginTop: 'auto',
    }
  },
  header: {
    textAlign: 'left',
    spacing: 10,
    padding: '10px 16px',
  },
  button: {
    marginBottom: '14px',
  },
  action: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  [`@keyframes ${modal}`]: {
    "100%": {
      opacity: 1,
      top: '50%',
    }
  },
}));

const ModalCard = ({ message, button, children, handler}) => {
  const classes = useStyles();
  const [playButtonSound] = useSound(clickSound);

  const buttonHandler = () => {
    playButtonSound();
    setTimeout(() => {
      handler();
    }, 200);
  }

  return (
    <Card className={classes.root} height="400px">
      <CardHeader title={message} className={classes.header} />
      <Divider variant="middle" />
      {children}
      <Divider variant="middle" />
      <CardActions className={classes.action}>
        <Button variant="contained" color="primary" size="large" className={classes.button} onClick={buttonHandler} >
          {button}
        </Button>
      </CardActions>
    </Card>
  );
}

export default ModalCard;