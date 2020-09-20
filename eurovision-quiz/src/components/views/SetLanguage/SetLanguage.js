import React from 'react';
import useSound from 'use-sound';
import { makeStyles } from '@material-ui/styles';
import {Button, Paper, Collapse} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import introSound from '../../../Sounds/Intro.mp3';
import clickSound from '../../../Sounds/click3.mp3';
import changeSound from '../../../Sounds/click1.mp3';


const useStyles = makeStyles(theme => ({
  component: {
    width: '100%',
    fontFamily: 'Anton',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    "&>h1": {
      letterSpacing: 0.8,
      marginTop: 0,
    },
  },
  languages: {
    fontSize: '1.2em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '45vh',
    margin: '50px 0 30px 0',
  },
  alert: {
    ...theme.alert
  },
  language: {
    width: 200,
    height: '10vh',
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


const SetLanguage = ({languageHandler, viewHandler, playBgMusic}) => {
  const classes = useStyles();

  const [language, setLanguage] = React.useState();
  const [openAlert, setOpenAlert] = React.useState(false);
  const [playClickSound] = useSound(clickSound);
  const [playChangeSound] = useSound(changeSound);


  React.useEffect(() => {
    console.log("SETLNG USE EFF", language)
  }) 

  const languages = [
    {id: "english", imgSrc:"https://i.postimg.cc/5yFWVWkH/united-kingdom-653010-640.png"},
    {id: "polski", imgSrc:"https://i.postimg.cc/tTcGw4DQ/poland-653060-640.png"},
    {id: "francais", imgSrc:"https://i.postimg.cc/nL0JKkDL/france-653001-640.png"}
  ]

  const handleClose = () => {
    setOpenAlert(false);
  };

  const optionHandler = (id) => {
    setLanguage(id)
    playChangeSound()
  }

  const buttonHandler = () => {
    if(language === undefined){
      setOpenAlert(true);
    } else {
      playClickSound()
      viewHandler("intro")
      languageHandler(language)
      playBgMusic()  
    }
  }

  return(
    <div className={classes.component}>
      <h1>choose your language</h1>
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
              Please choose your language
        </Alert>
      </Collapse>
      <div className={classes.languages}>
        {languages.map(language => (
          <Paper
          className={classes.language}
          key={language.id}
          onClick={() => optionHandler(language.id)}
          >
            <p>{language.id}</p>
            <img className={classes.image} alt="fingerprint-flag" src={language.imgSrc}/> 
          </Paper>
        ))}
      </div>
    <Button 
      variant="outlined"
      color="primary"
      size="large"
      onClick={buttonHandler} >
      OK
    </Button>
    </div>
  )
}
 
 export default SetLanguage;