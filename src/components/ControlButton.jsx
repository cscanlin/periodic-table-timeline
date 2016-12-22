import React, { Component } from 'react'

class ControlButton extends Component {
  render() {
    return (
      <input
        style={{padding: "0px 5px"}}
        type="image"
        src={this.props.imageSource}
        onClick={this.props.onClick}
        width={20}
        height={20}
      />
    )
  }
}


ControlButton.propTypes = {
  imageSource: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
}

export default ControlButton;
