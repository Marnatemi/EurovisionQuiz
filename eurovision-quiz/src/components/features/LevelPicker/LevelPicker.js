import React from 'react';
import { Box, Divider } from '@material-ui/core';
import AudiotrackOutlinedIcon from '@material-ui/icons/AudiotrackOutlined';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    width: 250,
  },
  labelsTop: {
    fontSize: 25,
    color: '#deb445',
    textTransform: 'uppercase',
  },
  labelsBottom: {
    marginTop: 5,
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 50,
    margin: '15px 0 10px',
  },
});

const labelsBottom = {
  1: 'Wskaż wykonawcę utworu',
  2: 'Wybierz które państwo wygrało danym wkonaniem utworu',
  3: 'W którym roku został wykonany utwór',
};

const labelsTop = {
  1: 'Łatwy',
  2: 'Średni',
  3: 'Trudny',
};


const LevelPicker = () => {
  const [value, setValue] = React.useState(1);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  return (
      <Box className={classes.root} component="fieldset" mb={3} borderColor="transparent">
        {/* <Typography component="legend">Custom empty icon</Typography> */}
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
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
        />
        {value !== null && <Box className={classes.labelsTop} ml={2}>{labelsTop[hover !== -1 ? hover : value]}</Box>}
        <Divider variant="middle" />
        {value !== null && <Box className={classes.labelsBottom} ml={2}>{labelsBottom[hover !== -1 ? hover : value]}</Box>}
      </Box>
  );
}

export default LevelPicker;