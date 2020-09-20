import React from 'react';
import useSound from 'use-sound';
import { Alert } from '@material-ui/lab';
import { Button, Collapse } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import LevelPicker from '../../features/LevelPicker/LevelPicker';
import YearsPicker from '../../features/YearsPicker/YearsPicker';
import Instruction from '../../features/Instruction/Instruction';
import { Modal } from '@material-ui/core';
import clickSound from '../../../Sounds/click3.mp3';
import alertSound from '../../../Sounds/alert.mp3';
import cardSound from '../../../Sounds/cardOpen.mp3';



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
  alert: {
    ...theme.alert
  },
  [`@keyframes ${appear}`]: {
    '100%': {
      opacity: 1,
    },
  }
}));


const Level = ({levelHandler, viewHandler, periodHandler, period, quizHandler, stopBgMusic}) => {
  const classes = useStyles();
  const [level, setLevel] = React.useState("easy");
  const [customPeriod, setPeriod] = React.useState([1999, 2019]);
  const [open, setOpen] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);
  const [playButtonSound] = useSound(clickSound);
  const [playAlertSound] = useSound(alertSound);
  const [playCardSound] = useSound(cardSound);



  const handleModalClick = () => {
    setOpen(true);
    playCardSound();
  };
  
  const handleClose = () => {
    setOpen(false);
    setOpenAlert(false);
  };

  const setLevelHandler = (lv) => {
    console.log(lv)
    setLevel(lv)
  }
  const setPeriodHandler = (period) => {
    console.log(period)
    setPeriod(period)
  }

  const checkPeriod = () => {
    playButtonSound()

    if (customPeriod[1] - customPeriod[0] < 20) {
      playAlertSound();
      setOpenAlert(true);
    } else {
      quizHandler();
      levelHandler(level)
      periodHandler(customPeriod)
      viewHandler("question song");
      stopBgMusic();
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
    <h1>Wybierz poziom <HelpOutlineIcon className={classes.icon} onClick={() => handleModalClick()}/></h1>
    <LevelPicker handler={setLevelHandler}/>
    <Collapse in={openAlert}>
      <Alert
        action={
          <Button color="inherit" size="small" onClick={() => {handleClose()}}>
            OK
          </Button>
        }
        className={classes.alert} 
        variant="filled" 
        severity="info"
        color="warning" 
      >
            Wybierz zakres przynajmniej 20lat, dla lepszej zabawy! :)
      </Alert>
    </Collapse>
    <YearsPicker handler={setPeriodHandler}/>
    <Button onClick={() => checkPeriod()} className={classes.button} variant="outlined" size="large" color="primary">START</Button>
    </div>
  );
}

export default Level;