import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ButtonNote from '../ButtonNote/ButtonNote';


const noteX = "noteX";
const noteY = "noteY";

const useStyles = makeStyles(theme => ({
  noteAnimX: {
      width: 25,
      height: 25,
      bottom: '-10%',
      // left: 'calc(50% - 40px)',
      position: 'absolute',
      animation: `$${noteX} 1.5s ease infinite alternate`,
      '&:nth-of-type(1)': {
        animationDelay: props => `calc(${1} * ${props.animDelay}s)`,
        '&>*': {
          animationDelay: props => `calc(${1.6} + ${props.animDelay}s)`,
        }
      },
      '&:nth-of-type(2)': {
        animationDelay: props => `calc(${3} * ${props.animDelay}s)`,
        '&>*': {
          animationDelay: props => `calc(${3} * ${props.animDelay}s)`,
        }
      },
      '&:nth-of-type(3)': {
        animationDelay: props => `calc(${5.7} * ${props.animDelay}s)`,
        '&>*': {
          animationDelay: props => `calc(${4.8} * ${props.animDelay}s)`,
        }
      },
      '&:nth-of-type(4)': {
        animationDelay: props => `calc(${0.6} * ${props.animDelay}s)`,
        '&>*': {
          animationDelay: props => `calc(${6.6} * ${props.animDelay}s)`,
        }
      },
      '&:nth-of-type(5)': {
        color: '#fff',
        animationDelay: props => `calc(${2.4} * ${props.animDelay}s)`,
        '&>*': {
          animationDelay: props => `calc(${7.9} * ${props.animDelay}s)`,
        }
      }
    },
  noteAnimY: {
    opacity: 0,
    width: 25,
    height: 25,
    animation: `$${noteY} 8s linear infinite`,
  },
  [`@keyframes ${noteX}`]: {
    '0%': {
      transform: 'translateX(0)',
    },
    '100%': {
      transform: 'translateX(-50px)',
    },
  },
  [`@keyframes ${noteY}`]: {
    '0%': {
      transform: 'translateY(0)',
      opacity: 1,
    },
    '15%': {
      transform: 'translateY(-30px)',
    },
    '30%': {
      transform: 'translateY(-70px)',
    },
    '45%': {
      transform: 'translateY(-105px)',
    },
    '60%': {
      transform: 'translateY(-140px)',
    },
    '75%': {
      transform: 'translateY(-190px)',
    },
    '90%': {
      transform: 'translateY(-210px)',
    },
    '100%': {
      transform: 'translateY(-230px)',
      opacity: 1,

    },
  },
}));


const BannerLine = (props) => {
  const classes = useStyles(props);
  console.log(props);
  return (
    <div className={classes.line}>
      {props.notes.map(note => (
        <div className={classes.noteAnimX} key={note.id}>
          <div className={classes.noteAnimY}>
            <ButtonNote
            variant={note.variant}
            color={note.color}
            radius={note.radius}
            size={note.size}/>
           </div>
        </div>
      ))}
    </div>  
  );
}

export default BannerLine;