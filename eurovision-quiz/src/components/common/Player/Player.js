import React from 'react';
import YouTube from 'react-youtube';
 
class Player extends React.Component {
  render() {
    const opts = {
      height: '200',
      width: '200',
      playerVars: {
        autoplay: 1,
        start:"634",
        end: "648",
        controls: 0,
        disablekb: 1,
        fs: 0,
        showinfo: 0,
        rel:1
      },
    };
 
    return <YouTube videoId="MB8cNvZ5ymQ" opts={opts} onReady={this.onReady} onEnd={this.onEnded} />;
  }
 
  onReady(event) {
    event.target.playVideo();
  }
  onEnded() {
    console.log('ENDED!!!')
  }
}

export default Player;