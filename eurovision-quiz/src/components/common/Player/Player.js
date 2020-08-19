import React from 'react';
import YouTube from 'react-youtube';
import Skeleton from '@material-ui/lab/Skeleton';
import { withStyles } from '@material-ui/core/styles';

const useStyles = ({
  active: {
    width: '60%',
    height: 260,
    marginTop: 40,
    left: '50%',
    transform: 'translateX(-50%)',
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
    console.log(props);
  }


  render() {
    const { classes, songStart, songEnd, songId } = this.props;
    console.log(this.state);
    const opts = {
      height: '260',
      width: '100%',
      playerVars: {
        //host: 'https://www.youtube.com',
        autoplay: 1,
        start: songStart,
        end: songEnd,
        controls: 0, 
        disablekb: 1,
        fs: 0,
        showinfo: 0,
        rel: 1,
        //origin: 'http://localhost:3000',
        //widget_referrer:'http://localhost:3000',
      },
    };

    const setVideoId = () => {
      let videoId = "MB8cNvZ5ymQ" // from 1956 to 2017
      if (songId === 62 || songId === 63){videoId = "GCIa80rd7sM"} // 2018, 2019
      return videoId
    }

    return (
      <div>
        <div className={this.state.isLoading ? `${classes.active}` : `${classes.hide}`}>
          <Skeleton variant="text" width={'100%'} />
          <Skeleton variant="circle" width={40} height={40} />
          <Skeleton variant="rect" width={"100%"} height={118} />
        </div>
      <YouTube videoId={setVideoId()} opts={opts} onReady={this.onReady} onEnd={this.onEnded} />
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
    if ( this.props.handler !== undefined){
      this.props.handler("question")
    }
  }
}

export default withStyles(useStyles)(Player)