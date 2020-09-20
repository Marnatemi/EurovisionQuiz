import React from 'react';
import { makeStyles } from '@material-ui/styles';
import BannerLine from './BannerLine';


const useStyles = makeStyles(theme => ({
  banner: {
    ...theme.center.absolute,
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'space-around',
    top: '30%',
    width: '75vw',
    maxWidth: '350px',
    height: '40%',
    border: `2px solid ${theme.palette.primary.main}` ,
  },
}));

const notes1 = [
  {id: 1, variant: 'full', color: '#E2C577', size: '1.8em', radius: '-16'},
  {id: 2, variant: 'full', color: '#E2C577', size: '1.5em', radius: '-5'},
  {id: 3, variant: 'outlined', color: '#fff', size: '1.5em', radius: '-20'},
  {id: 4, variant: 'outlined', color: '#E2C577', size: '2em', radius: '3'},
  {id: 5, variant: 'outlined', color: '#fff', size: '1.5em', radius: '12'},
]
const notes2 = [
  {id: 1, variant: 'full', color: '#fff', size: '2em', radius: '6'},
  {id: 2, variant: 'outlined', color: '#E2C577', size: '1.8em', radius: '-10'},
  {id: 3, variant: 'outlined', color: '#fff', size: '1.5em', radius: '12'},
  {id: 4, variant: 'full', color: '#fff', size: '1.5em', radius: '-6'},
  {id: 5, variant: 'full', color: '#E2C577', size: '1.8em', radius: '8'},
]
const notes3 = [
  {id: 1, variant: 'outlined', color: '#fff', size: '1.5em', radius: '-12'},
  {id: 2, variant: 'full', color: '#fff', size: '2em', radius: '-5'},
  {id: 3, variant: 'full', color: '#E2C577', size: '1.8em', radius: '20'},
  {id: 4, variant: 'full', color: '#E2C577', size: '2em', radius: '-10'},
  {id: 5, variant: 'outlined', color: '#E2C577', size: '1.5em', radius: '15'},
]

const notes4 = [
  {id: 1, variant: 'full', color: '#E2C577', size: '1.8em', radius: '-10'},
  {id: 2, variant: 'otlined', color: '#fff', size: '1.5em', radius: '-2'},
  {id: 3, variant: 'outlined', color: '#E2C577', size: '2em', radius: '-22'},
  {id: 4, variant: 'full', color: '#E2C577', size: '1.5em', radius: '5'},
  {id: 5, variant: 'full', color: '#fff', size: '1.8em', radius: '18'},
]


const Banner = () => {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <BannerLine notes={notes1} className={classes.line} animDelay={1.3} />
      <BannerLine notes={notes2} className={classes.line} animDelay={2} />
      <BannerLine notes={notes3} className={classes.line} animDelay={1}/>
      <BannerLine notes={notes4} className={classes.line} animDelay={1.7} />
    </div>
  );
}

export default Banner;