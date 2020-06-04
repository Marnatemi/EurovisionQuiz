import React from 'react';
import Player from '../../common/Player/Player';
import { Card, CardContent, Typography, CardActions, CardHeader, Button, Divider  } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 12,
    minWidth: 250,
    maxWidth: 450,
    maxHeight: '700px',
    height: '95%',
    width: '95%',
    textAlign: 'center',
    background: theme.palette.primary.light,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  header: {
    textAlign: 'left',
    spacing: 10,
  },
  player: {
    height: '200px',
    padding: '5px',
  },
  button: {
    margin: '5px',
  },
  action: {
    display: 'flex',
    justifyContent: 'space-around',
  }
}));

const Answer = ({title, year, artist, country, place, message}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} height="400px">
      <CardHeader title={message} className={classes.header} />
      <Divider variant="middle" />
      <CardContent>
        <Typography align="center">
        Utwór ten pod tytułem "
        <Typography variant="button" color="primary"> {title} </Typography>" mogliśmy usłyszeć na eurowizyjnej scenie w 
        <Typography variant="button" color="primary"> {place}</Typography> w 
        <Typography variant="button" color="primary"> {year}</Typography> roku w wykonaniu 
        <Typography variant="button" color="primary"> {artist}</Typography>, reprezentując 
        <Typography variant="button" color="primary"> {country}</Typography>
        </Typography>
      </CardContent>
      <Divider variant="middle" />
      <CardContent className={classes.player}>
        <Player />
      </CardContent>
      <Divider variant="middle" />
      <CardActions className={classes.action}>
        <Button variant="contained" color="primary" className={classes.button}>
          Dalej
        </Button>
      </CardActions>
    </Card>
  );
}

export default Answer;