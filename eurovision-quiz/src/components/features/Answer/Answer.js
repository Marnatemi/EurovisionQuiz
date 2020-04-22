import React from 'react';
import styles from './Answer.scss';
import Player from '../../common/Player/Player';
import { Card, CardContent, Typography, CardActions, CardHeader, Button, Divider, makeStyles  } from '@material-ui/core';

const demoContent = {
  title: "L’oiseau et l’enfant",
  artist: "Marie Myriam",
  year: 1977,
  country: "Francja",
  place: "Londyn (Anglia)"
}

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 12,
    minWidth: 256,
    textAlign: 'center',
  },
  header: {
    textAlign: 'left',
    spacing: 10,
  },
  list: {
    padding: '20px',
  },
  button: {
    margin: theme.spacing(1),
  },
  action: {
    display: 'flex',
    justifyContent: 'space-around',
  }
}));

function Answer() {
  const classes = useStyles();
  return (
    <Card className={classes.root} width="300px">
      <CardHeader title="Dobrze!" className={classes.header} />
      <Divider variant="left" />
      <CardContent>
        <Typography align="center">
        Utwór ten pod tytułem "
        <Typography variant="button" color="secondary">{demoContent.title}</Typography>" mogliśmy usłyszeć na eurowizyjnej scenie w 
        <Typography variant="button" color="secondary"> {demoContent.place}</Typography> w 
        <Typography variant="button" color="secondary"> {demoContent.year}</Typography> roku w wykonaniu 
        <Typography variant="button" color="secondary"> {demoContent.artist}</Typography>, reprezentując 
        <Typography variant="button" color="secondary"> {demoContent.country}</Typography>
        </Typography>
      </CardContent>
      <Divider variant="middle" />
      <CardContent>
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