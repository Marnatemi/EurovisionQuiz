import React from 'react';
import useSound from 'use-sound';
import { Box, Divider } from '@material-ui/core';
import AudiotrackOutlinedIcon from '@material-ui/icons/AudiotrackOutlined';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/styles';
import {Paper} from  '@material-ui/core'
import changeSound from '../../../Sounds/click1.mp3';


const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 292,
    width: '94vw',
    height: '31%',
    minHeight: 130,
    margin: 0,
    border: `2px dashed ${theme.palette.primary.light}` ,
    padding: '10px 0',
    background: 'inherit',
    color: '#fff',
    "& fieldset":{
      paddingLeft: 0,
      paddingRight: 0,
    }
  },
  labelsTop: {
    fontSize: 25,
    color: theme.palette.primary.main,
    textTransform: 'uppercase',
    margin: 0,
  },
  labelsBottom: {
    margin: '5px 0',
  },
  rating: {
    fontSize: 50,
  },
}));

const labelsTopEng = {
  1: 'easy',
  2: 'medium',
  3: 'expert',
};


const LevelPicker = ({text, handler}) => {
  const [value, setValue] = React.useState(1);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();
  const [playChangeSound] = useSound(changeSound);
  const setLevelFromLabel = (value) => {
    return labelsTopEng[value]
  }

  return (
    <Paper className={classes.root}>

      <Box  component="fieldset" className={classes.box} mb={3} borderColor="transparent">
        <Rating
          className={classes.rating}
          name="level-picker"
          size="large"
          value={value}
          max={3}
          defaultValue={1}
          precision={1}
          emptyIcon={<AudiotrackOutlinedIcon fontSize="inherit" />}
          icon={<AudiotrackIcon fontSize="inherit" />}
          onChange={(event, newValue) => {
            playChangeSound()
            setValue(newValue);
            handler(setLevelFromLabel(newValue));
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
            //playChangeSound()
          }}
        />
        {value !== null && <Box className={classes.labelsTop} ml={2}>{text.labelsTop[hover !== -1 ? hover : value]}</Box>}
        <Divider variant="middle" />
        {value !== null && <Box className={classes.labelsBottom} ml={2}>{text.labelsBottom[hover !== -1 ? hover : value]}</Box>}
      </Box>
      </ Paper>
  );
}

export default LevelPicker;