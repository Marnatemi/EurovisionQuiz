import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import {Paper} from  '@material-ui/core';
import quizData from '../../../data/quizData.json';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 250,
    width: '80vw',
    padding: '17px 20px 10px',
    background: 'inherit',
    color: '#fff',
    border: `2px dashed ${theme.palette.primary.light}` ,
    textAlign: 'left',
  },
}));

const firstESCYear = quizData[0].year
const lastESCYear = quizData[quizData.length - 1].year
const erlierESCYear = quizData[quizData.length - 21].year

const marks = [
  {
    value: firstESCYear,
    label: firstESCYear,
  },
  {
    value: erlierESCYear,
    label: erlierESCYear,
  },
  {
    value: lastESCYear,
    label: lastESCYear,
  },
];

function valuetext(value) {
  return `${value}`;
}

 const YearsPicker = ({text, handler}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState([erlierESCYear, lastESCYear]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    handler(newValue)
  };


  return (
    <Paper className={classes.root}>
      <Typography id="years-picker" gutterBottom>
        {text}
      </Typography>
      <Slider
        color="primary"
        value={value}
        min={firstESCYear}
        max={lastESCYear}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="years-picker"
        getAriaValueText={valuetext}
        marks={marks}
      />
    </Paper>
  );
}

export default YearsPicker;