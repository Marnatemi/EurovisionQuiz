import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import LevelPicker from '../../features/LevelPicker/LevelPicker';
import YearsPicker from '../../features/YearsPicker/YearsPicker';
import Instruction from '../../features/Instruction/Instruction';
import { Modal } from '@material-ui/core';

const appear = 'appear'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '95vh',
    maxHeight: 600,
    letterSpacing: 0.5,
    animation: `$${appear} .8s ease forwards`,
    opacity: 0,

    "&>h1": {
      fontFamily: 'Anton',
      textTransform: 'uppercase',
      letterSpacing: 0.8,
    },
  },
  icon: {
    position: 'absolute',
    marginLeft: 5,
    opacity: 0.5,
    "&:hover" : {
      opacity: 1,
    }
  },
  button: {
    width: 80,
    margin: 31,
  },
  [`@keyframes ${appear}`]: {
    '100%': {
      opacity: 1,
    },
  }
}));


const Level = ({levelHandler, viewHandler, periodHandler, period, quizHandler}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const checkPeriod = () => {
    if (period.to - period.from < 20) {
      alert("Wybierz zakres przynajmniej 20lat, dla lepszej zabawy! :)")
    } else {
      quizHandler()
      viewHandler("question song")
    }
  }

  return (
    <div className={classes.root}>
    <Modal
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition={true}
    >

      <div>
        <Instruction message="Instrukcja" button="OK" handler={handleClose}/>
      </div>
    </Modal>
    <h1>Wybierz poziom <HelpOutlineIcon className={classes.icon} onClick={() => handleClick()}/></h1>
    <LevelPicker handler={levelHandler}/>
    <YearsPicker handler={periodHandler}/>
    <Button onClick={() => checkPeriod()} className={classes.button} variant="outlined" size="large" color="primary">START</Button>
    </div>
  );
}

export default Level;