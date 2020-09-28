import React from 'react';
import useSound from 'use-sound';
import { makeStyles } from '@material-ui/styles';
import {Button, Paper, Collapse} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import clickSound from '../../../Sounds/click3.mp3';
import changeSound from '../../../Sounds/click1.mp3';
import alertSound from '../../../Sounds/alert.mp3';


const useStyles = makeStyles(theme => ({
  component: {
    width: '100%',
    fontFamily: 'Anton',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    "&>h1": {
      letterSpacing: 0.8,
      margin: 0,
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
    margin: '50px 0 30px 0',
  },
  alert: {
    ...theme.alert
  },
  language: {
    width: 200,
    height: '10vh',
    maxHeight: 67,
    margin: 0,
    border: `2px dashed ${theme.palette.primary.light}` ,
    padding: '10px 20px',
    background: 'inherit',
    color: '#fff',
    position: 'relative',
    "& p": {
      margin: 0,
      ...theme.center.absolute,
    },
    "&:hover": {
      border: `2px dashed ${theme.palette.primary.main}` ,
      color: theme.palette.primary.main,
      width: 210,
      height: '11vh',
      fontSize: '1.3em',
    }
  },
  image: {
    height: 90,
    position: 'absolute',
    transform: "rotate(24deg)",
    right: -10,
    top: 0,
  }
}));


const SetLanguage = ({text, languageHandler, viewHandler}) => {
  const classes = useStyles();

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
          <Paper
          className={classes.language}
          key={language.id}
          onClick={() => optionHandler(language.id)}
          >
            <p>{language.name}</p>
            <img className={classes.image} alt="fingerprint-flag" src={language.imgSrc}/> 
          </Paper>
        ))}
      </div>
    <Button 
      variant="outlined"
      color="primary"
      size="large"
      onClick={() => buttonHandler()} >
      OK
    </Button>
    </div>
  )
}
 
 export default SetLanguage;