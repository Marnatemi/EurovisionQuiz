import React from 'react';
import useSound from 'use-sound';
import textData from '../../../data/appTexts.json';
import { makeStyles } from '@material-ui/styles';
import {Button, Collapse} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import clickSound from '../../../assets/Sounds/click3.mp3';
import changeSound from '../../../assets/Sounds/click1.mp3';
import alertSound from '../../../assets/Sounds/alert.mp3';

const useStyles = makeStyles(theme => ({
  component: {
    width: '100%',
    ...theme.importantText,
    minHeight: 420,
    "&>h1": {
      color: '#fff',
      margin: 0,
      fontSize: '1.9rem'
    },
  },
  languages: {
    fontSize: '1.2em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '45vh',
    maxHeight: 300,
    minHeight: 230,
    margin: '5vh 0 30px 0',
  },
  alert: {
    ...theme.alert
  },
  lgButton: {
    width: 230,
    height: '30%',
    minHeight: 70,
    letterSpacing: 0.8,
    margin: 0,
    border: `2px dashed ${theme.palette.primary.light}`,
    background: 'inherit',
    color: '#fff',
    position: 'relative',
    fontSize: '1em',  
    boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",    
    "&:focus": {
      border: `2px dashed ${theme.palette.primary.main}`,
      color: theme.palette.primary.main,
      width: 250,
      height: '31%',
      fontSize: '1.3em',  
    },
  },
  image: {
    height: 90,
    position: 'absolute',
    transform: "rotate(24deg)",
    right: -10,
    top: 0
  },
  //eslint-disable-next-line no-useless-computed-key
  ['@media (max-height:500px)']: {
    component: {
      paddingTop: 20,
    }
  },
}));

const SetLanguage = ({languageHandler, viewHandler}) => {
  const classes = useStyles();
  const text = textData.start
  const [language, setLanguage] = React.useState();
  const [openAlert, setOpenAlert] = React.useState(false);
  const [playClickSound] = useSound(clickSound);
  const [playChangeSound] = useSound(changeSound);
  const [playAlertSound] = useSound(alertSound);
  
  const handleClose = () => {
    setOpenAlert(false);
  };

  const optionHandler = (id) => {
    setLanguage(id)
    playChangeSound()
  }

  const buttonHandler = () => {
    playClickSound()
    setTimeout(() => {
      if(language === undefined){
        playAlertSound();
        setOpenAlert(true);
      } else {
        languageHandler(language)
        viewHandler("intro")
      }
    }, 200);
  }

  return(
    <div className={classes.component}>
      <h1>{text.title}</h1>
      <Collapse in={openAlert}>
        <Alert
          action={
            <Button color="inherit" size="small" onClick={() => handleClose()}>
              {text.button}
            </Button>
          }
          className={classes.alert} 
          variant="filled" 
          severity="info"
          color="warning" 
        >
          {text.alertMessage}
        </Alert>
      </Collapse>
      <div className={classes.languages}>
        {text.languages.map(language => (
          <Button tabIndex="0" className={classes.lgButton}
            key={language.id}
            onClick={() => optionHandler(language.id)}
          >
            <p>{language.name}</p>
            <img className={classes.image} alt="fingerprint-flag" src={language.imgSrc}/> 
          </Button>
        ))}
      </div>
      <Button 
        variant="outlined"
        color="primary"
        size="large"
        onClick={() => buttonHandler()}>
        OK
      </Button>
    </div>
  )
}
 
export default SetLanguage;