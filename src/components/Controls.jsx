import React, { Component } from 'react'

class Controls extends Component {
  render() {
    return (
      <div className="time-range-container">
        <input
          style={{width: "897px"}}
          id="time-range"
          type="range"
          min="1700"
          max="2015"
          step="1"
          value={this.props.activeYear}
          onChange={this.props.updateYear}/>
      </div>
    )
  }
}


Controls.propTypes = {
  activeYear: React.PropTypes.number.isRequired,
  updateYear: React.PropTypes.func.isRequired,
}

export default Controls;
