import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Player from '../../common/Player/Player';
import AudiotrackOutlinedIcon from '@material-ui/icons/AudiotrackOutlined';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';


const dance = 'dance';
const shadow = 'shadow';
const appear = 'appear'
const jump = 'jump'


const useStyles = makeStyles(theme => ({
  player: {
    opacity: 0,
    position: 'absolute',
  },
  playerLoader: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    background: '#000',
    opacity: 0.8,
    '& svg:first-child, svg:last-child': {
      color: theme.palette.primary.main,
    },
    '& svg:nth-child(2)': {
      color: theme.palette.secondary.main,
      animationDelay: '0.9s',
    },
    '& svg:last-child': {
      animationDelay: '1.8s',
    },
    '& *': {
      fontSize: '2.5em',
      animation: `$${jump} 3s ease-in-out infinite`,
      width: 40,
    },
  },
  componentAnimation: {
    animation: `$${appear} .8s ease forwards`,
    opacity: 0,
    '& img, div': {
      animationPlayState: 'paused',
    }
  },
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
      fontSize: '2em',
    },
    '10%': {
      marginTop: 0,
    },
    '15%': {
      fontSize: '2.5em',
    },
    '25%': {
      marginTop: '-10%',
    },
    '50%': {
      marginTop: 0,
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

const QuestionSong = () => {
  const classes = useStyles();

  return(
    <div> 
      <div className={classes.player}>
        <Player songStart={634} songEnd={648} />
      </div>    
      <div className={classes.componentAnimation}> 
        <div className={classes.playerLoader}>
          <AudiotrackOutlinedIcon />
          <AudiotrackIcon />
          <AudiotrackOutlinedIcon />
        </div>
        {/* przy state.questionSongIsReady: true playerLoader- display: none componentAnimation: bez pause */}
        <img className={classes.littleMan} alt='earphones' src="https://i.postimg.cc/B6MMMKck/earphones-152471-640.png"></img>
        <div className={classes.shadow}></div>
      </div>
      
    </div>
    

  );
}

export default QuestionSong;
