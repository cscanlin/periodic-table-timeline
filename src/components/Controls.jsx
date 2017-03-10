import React, { Component } from 'react'

import ControlButton from './ControlButton'

import play from '../images/play.svg'
import pause from '../images/pause.svg'
import increaseSpeed from '../images/increaseSpeed.svg'
import decreaseSpeed from '../images/decreaseSpeed.svg'

class Controls extends Component {

  playPauseButton() {
    if (this.props.isPlaying) {
      return <ControlButton imageSource={pause} onClick={this.props.pause}/>
    } else {
      return <ControlButton imageSource={play} onClick={this.props.play}/>
    }
  }

  render() {
    return (
      <div className="controls-container">
        <div className="slider-container">
          <input
            id="time-range"
            className="fit"
            type="range"
            min="1700"
            max="2015"
            step="1"
            value={this.props.activeYear}
            onChange={this.props.onSlide}/>
          <span>{Math.floor(this.props.activeYear)}</span>
        </div>
        <ControlButton imageSource={decreaseSpeed} onClick={this.props.decreaseSpeed}/>
        {this.playPauseButton()}
        <ControlButton imageSource={increaseSpeed} onClick={this.props.increaseSpeed}/>
      </div>
    )
  }
}


Controls.propTypes = {
  activeYear: React.PropTypes.number.isRequired,
  onSlide: React.PropTypes.func.isRequired,
  play: React.PropTypes.func.isRequired,
  pause: React.PropTypes.func.isRequired,
  increaseSpeed: React.PropTypes.func.isRequired,
  decreaseSpeed: React.PropTypes.func.isRequired,
  isPlaying: React.PropTypes.bool.isRequired,
}

export default Controls;
