import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Player from '../../common/Player/Player';
import AudiotrackOutlinedIcon from '@material-ui/icons/AudiotrackOutlined';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';


const dance = 'dance';
const shadow = 'shadow';
const appear = 'appear';
const jump = 'jump';


const useStyles = makeStyles(theme => ({
  player: {
    opacity: 0,
    position: 'absolute',
  },
  component: {
    animation: `$${appear} .8s ease forwards`,
    opacity: 0,
  },
  playerLoader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    '&:before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '100vw',
      height: '100vh',
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
      '& img, div': {
        animationPlayState: props.runAnim,
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

  const classes = useStyles(props);
  console.log(props)
  return(
    <div className={classes.component}> 
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
