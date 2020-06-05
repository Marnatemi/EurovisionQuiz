import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import {Paper} from  '@material-ui/core'


const useStyles = makeStyles(theme => ({
  root: {
    width: 250,
    padding: '17px 20px 10px',
    background: 'inherit',
    color: '#fff',
    border: `2px dashed ${theme.palette.primary.light}` ,
    textAlign: 'left',
  },
}));


const marks = [
  {
    value: 1956,
    label: '1956',
  },
  {
    value: 1999,
    label: '1999',
  },
  {
    value: 2019,
    label: '2019',
  },
];

function valuetext(value) {
  return `${value}`;
}

 const YearsPicker = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(1999);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Typography id="years-picker" gutterBottom>
        Przedział czasowy
      </Typography>
      <Slider

        color="primary"
        track="inverted"
        value={value}
        min={1956}
        max={2019}
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