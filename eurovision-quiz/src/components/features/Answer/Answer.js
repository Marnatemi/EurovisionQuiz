import React from 'react';
import styles from './Answer.scss';
import Player from '../../common/Player/Player';
import { Card, CardContent, Typography, CardActions, CardHeader, Button, Divider  } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 12,
    minWidth: '250px',
    maxWidth: '300px',
    width: '95%',
    textAlign: 'center',
    background: '#deb445',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',

  },
  header: {
    textAlign: 'left',
    spacing: 10,
  },
  player: {
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
        <Typography variant="button" color="secondary">{title}</Typography>" mogliśmy usłyszeć na eurowizyjnej scenie w 
        <Typography variant="button" color="secondary"> {place}</Typography> w 
        <Typography variant="button" color="secondary"> {year}</Typography> roku w wykonaniu 
        <Typography variant="button" color="secondary"> {artist}</Typography>, reprezentując 
        <Typography variant="button" color="secondary"> {country}</Typography>
        </Typography>
      </CardContent>
      <Divider variant="middle" />
      <CardContent className={classes.player}>
        <Player />
      </CardContent>
      <Divider variant="middle" />
      <CardActions className={classes.action}>
        <Button variant="contained" color="secondary" className={classes.button}>
          Dalej
        </Button>
      </CardActions>
    </Card>
  );
}

export default Answer;