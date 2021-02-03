import React from 'react';
import useSound from 'use-sound';
import { Alert } from '@material-ui/lab';
import { Button, Collapse, Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import LevelPicker from '../../features/LevelPicker/LevelPicker';
import YearsPicker from '../../features/YearsPicker/YearsPicker';
import Instruction from '../../features/Instruction/Instruction';
import clickSound from '../../../assets/Sounds/click3.mp3';
import alertSound from '../../../assets/Sounds/alert.mp3';
import cardSound from '../../../assets/Sounds/cardOpen.mp3';

const appear = 'appear'

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.positioning.flexboxBetween,
    height: '95vh',
    maxHeight: 600,
    minHeight: 530,
    letterSpacing: 0.5,
    animation: `$${appear} .8s ease forwards`,
    opacity: 0,
    "&>h1": {
      ...theme.importantText,
      color: 'inherit',
    },
  },
  icon: {
    position: 'absolute',
    opacity: 0.5,
    "&:hover" : {
      opacity: 1,
    }
  },
  button: {
    margin: 31,
  },
  alertWrapper:{
    zIndex: 1,
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

const Level = ({text, levelHandler, viewHandler, periodHandler, quizHandler}) => {
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
    setLevel(lv)
  }

  const setPeriodHandler = (period) => {
    setPeriod(period)
  }

  const checkPeriod = () => {
    playButtonSound()
    setTimeout(() => {
      if (customPeriod[1] - customPeriod[0] < 20) {
        playAlertSound();
        setOpenAlert(true);
      } else {
        levelHandler(level)
        periodHandler(customPeriod)
        quizHandler();
        viewHandler("question song");
      }
    }, 200);
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
          <Instruction message={text.modalTitle} text={text.instruction} button="OK" handler={handleClose}/>
        </div>
      </Modal>
      <h1>{text.title} <HelpOutlineIcon className={classes.icon} onClick={() => handleModalClick()}/></h1>
      <LevelPicker text={text.levelPicker} handler={setLevelHandler}/>
      <Collapse in={openAlert} className={classes.alertWrapper}>
        <Alert
          action={
            <Button color="inherit" size="small" onClick={() => {handleClose()}}>
              {text.alert.button}
            </Button>
          }
          className={classes.alert} 
          variant="filled" 
          severity="info"
          color="warning" 
        >
          {text.alert.message}
        </Alert>
      </Collapse>
      <YearsPicker  text={text.yearsPickerText} handler={setPeriodHandler}/>
      <Button onClick={() => checkPeriod()} className={classes.button} variant="outlined" size="large" color="primary">{text.button}</Button>
    </div>
  );
}

export default Level;