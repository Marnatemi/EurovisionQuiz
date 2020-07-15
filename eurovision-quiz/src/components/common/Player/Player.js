import React from 'react';
import YouTube from 'react-youtube';
import Skeleton from '@material-ui/lab/Skeleton';
import { withStyles } from '@material-ui/core/styles';

const useStyles = ({
  active: {
    left: '50%',
    transform: 'translateX(-50%)',
    width: 210,
    position: 'absolute',
  },
  hide: {
    display: 'none',
  }
});
 
class Player extends React.Component {
  constructor(props) {
    super(props);
  
    this.onReady = this.onReady.bind(this);
    this.onEnded = this.onEnded.bind(this);
    this.state = {
      isLoading: true
    }
  }


  render() {
    const { classes, songStart, songEnd } = this.props;
    console.log(this.state);
    const opts = {
      height: '200',
      width: '200',
      playerVars: {
        autoplay: 1,
        start: songStart,
        end: songEnd,
        controls: 0,
        disablekb: 1,
        fs: 0,
        showinfo: 0,
        rel:1
      },
    };

    return (
      <div>
        <div className={this.state.isLoading ? `${classes.active}` : `${classes.hide}` }>
          <Skeleton variant="text" width={210} />
          <Skeleton variant="circle" width={40} height={40} />
          <Skeleton variant="rect" width={210} height={118} />
        </div>
      <YouTube videoId="MB8cNvZ5ymQ" opts={opts} onReady={this.onReady} onEnd={this.onEnded} />

      </div>
    );
  }
 
  onReady(event) {
    event.target.playVideo();
    this.setState({
      isLoading: false
    })
  }
  onEnded() {
    console.log('ENDED!!!')
  }
}

export default withStyles(useStyles)(Player)