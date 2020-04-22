import React from 'react';
import styles from './Spiral.scss'

class Spiral extends React.Component {
  time (id) {
    const demoContent = [
      ["634", "648"],
      ["650", "663"],
    ];
  
    return "https://www.youtube.com/embed/MB8cNvZ5ymQ?controls=0&amp;autoplay=1&disablekb=1&fs=0&showinfo=0&rel=1&start=" + demoContent[id][0] + "&end=" + demoContent[id][1];
  }

  changeThis () {
    console.log("Ended");
  }

  render () {
    return(
    <div className={styles.component}>
    <div className={styles.film} >
    <iframe width="400" height="300" src={this.time.bind(this)(0)} onEnded={() => this.changeThis()} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
    <iframe width="400" height="300" src={this.time.bind(this)(1)} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
    </div>
  </div>
    )
  }
}

export default Spiral;