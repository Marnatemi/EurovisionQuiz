import React from 'react';
import { makeStyles } from '@material-ui/styles';
import {Button} from '@material-ui/core';
import ButtonNote from '../ButtonNote/ButtonNote';

const button = "button";
const noteX = "noteX";
const noteY = "noteY";

const useStyles = makeStyles(theme => ({
  root: {
    bottom: 0,
    alignSelf: 'flex-end',
  },
  button: {
    opacity: 0,
    animation: `$${button} 2s forwards`,
    animationDelay: '6s',
  },
  noteAnimX: {
    width: 25,
    height: 25,
    left: -17,
    position: 'absolute',
    bottom: 10,
    animation: `$${noteX} 2s ease infinite alternate`,
    '&:nth-of-type(1)': {
      animationDelay: '8.5s',
      '&>*': {
      animationDelay: '7.9s',
      }
    },
    '&:nth-of-type(2)': {
      animationDelay: '11.3s',
      '&>*': {
      animationDelay: '11.4s',
      }
    },
    '&:nth-of-type(3)': {
      animationDelay: '13.6s',
      '&>*': {
      animationDelay: '12.7s',
      }
    },
    '&:nth-of-type(4)': {
      animationDelay: '10s',
      '&>*': {
      animationDelay: '16s',
      }
    },
    '&:nth-of-type(5)': {
      color: '#fff',
      animationDelay: '14.8s',
      '&>*': {
      animationDelay: '20.3s',
      }
    },
  },
  noteAnimY: {
    opacity: 0,
    width: 25,
    height: 25,
    animation: `$${noteY} 6s linear infinite`,
  },
  [`@keyframes ${button}`]: {
    '100%': {
      opacity: '1', 
    }
  },
  [`@keyframes ${noteX}`]: {
    '0%': {
      transform: 'translateX(0)',
    },
    '100%': {
      transform: 'translateX(50px)',
    },
  },
  [`@keyframes ${noteY}`]: {
    '0%': {
      transform: 'translateY(0)',
      opacity: 0,
    },
    '10%': {
      transform: 'translateY(0)',
      opacity: 1,
    },
    '72%': {
      transform: 'translateY(-150)',
      opacity: 0.5,
    },
    '95%': {
      transform: 'translateY(-200px)',
      opacity: 0,
    },
    '100%': {
      transform: 'translateY(-220px)',
      opacity: 0,
    },
  },
}));

const notes = [
  {id: 1, variant: 'full', color: '#E2C577', size: '1.8em', radius: '-16'},
  {id: 2, variant: 'full', color: '#E2C577', size: '1.5em', radius: '-5'},
  {id: 3, variant: 'outlined', color: '#fff', size: '1.5em', radius: '-20'},
  {id: 4, variant: 'outlined', color: '#E2C577', size: '2em', radius: '3'},
  {id: 5, variant: 'outlined', color: '#fff', size: '1.5em', radius: '12'},
]

const AnimatedButton = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {notes.map(note => (
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
      <Button className={classes.button}
       variant="outlined"
       color="primary"
       size="large" >
      Graj
      </Button>
    </div>
    
  );
}

export default AnimatedButton;