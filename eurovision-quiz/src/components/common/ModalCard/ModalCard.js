import React from 'react';
import { Card, CardActions, CardHeader, Button, Divider  } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const modal = "modal";

const useStyles = makeStyles(theme => ({
  root: {
    opacity: 0,
    borderRadius: 12,
    minWidth: 250,
    maxWidth: 450,
    maxHeight: '700px',
    height: '95%',
    width: '95%',
    textAlign: 'center',
    background: theme.palette.primary.light,
    position: 'absolute',
    top: '60%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    letterSpacing: 0.7,
    animation: `$${modal} 0.3s ease-in forwards`,
    "& p span": {
      color: theme.palette.primary.main,
    }
  },
  header: {
    textAlign: 'left',
    spacing: 10,
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
  }
}));

const ModalCard = ({ message, button, children, handler}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} height="400px">
      <CardHeader title={message} className={classes.header} />
      <Divider variant="middle" />
      {children}
      <Divider variant="middle" />
      <CardActions className={classes.action}>
        <Button variant="contained" color="primary" size="large" className={classes.button} onClick={handler} >
          {button}
        </Button>
      </CardActions>
    </Card>

  );
}

export default ModalCard;