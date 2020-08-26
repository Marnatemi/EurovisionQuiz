import React from 'react';
import { Box, Divider } from '@material-ui/core';
import AudiotrackOutlinedIcon from '@material-ui/icons/AudiotrackOutlined';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/styles';
import {Paper} from  '@material-ui/core'
//import levelQuestions from '../../../data/levelQuestions.json';




const useStyles = makeStyles(theme => ({
  root: {
    width: 252,
    margin: 0,
    border: `2px dashed ${theme.palette.primary.light}` ,
    padding: '10px 20px',
    background: 'inherit',
    color: '#fff',
  },
  box: {
    marginBottom: 15,
    padding: 0,
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
    ...theme.center.flexbox,
    fontSize: 50,
    marginBottom: 10,
  },
}));

const labelsBottom = {
  1: '" Wskaż wykonawcę utworu "',
  2: '" Wybierz które państwo wygrało danym wkonaniem utworu "',
  3: '" Wskaż rok z którego pochodzi wykonanie "',
};

const labelsTop = {
  1: 'Łatwy',
  2: 'Średni',
  3: 'Expert',
};

const labelsTopEng = {
  1: 'easy',
  2: 'medium',
  3: 'expert',
};


const LevelPicker = ({handler}) => {
  const [value, setValue] = React.useState(1);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();
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
            setValue(newValue);
            handler(setLevelFromLabel(newValue));
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
        />
        {value !== null && <Box className={classes.labelsTop} ml={2}>{labelsTop[hover !== -1 ? hover : value]}</Box>}
        <Divider variant="middle" />
        {value !== null && <Box className={classes.labelsBottom} ml={2}>{labelsBottom[hover !== -1 ? hover : value]}</Box>}
      </Box>
      </ Paper>
  );
}

export default LevelPicker;