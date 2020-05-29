import React from 'react';
import { makeStyles } from '@material-ui/styles';
import AudiotrackOutlinedIcon from '@material-ui/icons/AudiotrackOutlined';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';

const useStyles = makeStyles(theme => ({
  root: {
  },
  icon: (props) => (
    {
      color: props.color,
      position: 'absolute',
      opacity: 1,
      fontSize: props.size, 
      marginLeft: props.position,
      transform: `rotate(${props.radius}deg)`,
    }
  ),
}));

const ButtonNote = (props) => {
  const classes = useStyles(props);
  const {variant} = props

  if(variant === "outlined")
  return (
      <AudiotrackOutlinedIcon className={classes.icon} />
  );
  else return (
      <AudiotrackIcon className={classes.icon}/>
  );
}

export default ButtonNote;