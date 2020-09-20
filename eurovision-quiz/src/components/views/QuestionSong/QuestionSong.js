import React from 'react';
import useSound from 'use-sound';
import { makeStyles } from '@material-ui/styles';
import Player from '../../common/Player/Player';
import AudiotrackOutlinedIcon from '@material-ui/icons/AudiotrackOutlined';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import ForwardIcon from '@material-ui/icons/Forward';
import {Button} from '@material-ui/core';
import clickSound from '../../../Sounds/click3.mp3';

const dance = 'dance';
const shadow = 'shadow';
const appear = 'appear';
const jump = 'jump';


const useStyles = makeStyles(theme => ({
  player: {
    opacity: 0,
    // width: 200,
    // height: 200,
    // top: '20%',
    // margin: 'auto',
    position: 'absolute',
  },
  component: {
    animation: `$${appear} .8s ease forwards`,
    opacity: 0,
    width: '75%',
    maxWidth: 400,
    height: '80vh',
    textAlign: 'right',
    position: 'relative',
  },
  playerLoader: {
    ...theme.center.absolute,
    zIndex: 2,
    '&:before': {
      content: '""',
      ...theme.center.absolute,
      ...theme.size.fullByDivice,
      background: '#000',
      opacity: 0.8,
      zIndex: -1,
    },
    '& *': {
      color: theme.palette.primary.main,
      fontSize: '2.5em',
      animation: `$${jump} 1.1s ease-in-out infinite`,
      width: 40,    
    },
    '& svg:nth-child(2)': {
      color: theme.palette.primary.main,
      animationDelay: '0.2s',
    },
    '& svg:last-child': {
      animationDelay: '0.4s',
    },
  },
  componentAnimation: (props) => (
    {
      width: 212,
      margin: 'auto',
      textAlign: 'center',
      height: 400,
      marginTop: 'calc((80vh - 400px)/2 - 24px);',
      '& img': {
        animationPlayState: 'run',
      },
      '& div':{
        animationPlayState: 'run',
      },
      '& div:first-child': {
        display: props.displayLoader,
      }
    }
  ),
  littleMan: {
    animation: `$${dance} 2s ease-in-out infinite`,
    height: '50vh',
  },
  shadow: {
    height: 18,
    width: '60%',
    borderRadius: '50%',
    background: '#000',
    opacity: 0.5,
    margin: 'auto',
    marginTop: 50,
    animation: `$${shadow} 2s ease-in-out infinite`,
  },
  [`@keyframes ${appear}`]: {
    '100%': {
      opacity: 1,
    },
  },
  [`@keyframes ${jump}`]: {
    '5%': {
      fontSize: '1.8em',
    },
    '30%': {
      fontSize: '2.5em',
    },
  },
  [`@keyframes ${dance}`]: {
    '0%': {
      transform: 'rotate(25deg)',
    },
    '50%': {
      transform: 'rotate(-25deg)',
    },
    '100%': {
      transform: 'rotate(25deg)',
    },
  },
  [`@keyframes ${shadow}`]: {
    '0%': {
      width: '80%',
    },
    '25%': {
      width: '60%',
    },
    '50%': {
      width: '80%',
    },
    '75%': {
      width: '60%',
    },
    '100%': {
      width: '80%',
    }  
  },
}));

const QuestionSong = (props) => {
  const [playButtonSound] = useSound(clickSound);
  const classes = useStyles(props);

  const handler = () => {
    playButtonSound()
    props.viewHandler("question")
  }

  return(
    <div className={classes.component}>  
      <Button className={classes.button} variant="outlined" color="secondary" size="small" onClick={() => handler()}><ForwardIcon/></Button>
      <div className={classes.player}>
        <Player songId={props.question.id} animHandler={props.animHandler} songStart={props.question.playerStart} songEnd={props.question.playerEnd} viewHandler={()=> props.viewHandler("question")}/>
      </div>
      <div className={classes.componentAnimation}> 
        <div className={classes.playerLoader}>
          <AudiotrackOutlinedIcon />
          <AudiotrackIcon />
          <AudiotrackOutlinedIcon />
        </div>
        <img className={classes.littleMan} alt='earphones' src="https://i.postimg.cc/B6MMMKck/earphones-152471-640.png"></img>
        <div className={classes.shadow}></div>
      </div>
    </div>
    

  );
}

export default QuestionSong;
