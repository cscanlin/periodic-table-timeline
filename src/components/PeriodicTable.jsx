import React, { Component } from 'react'

import ElementGrid from './ElementGrid'
import Legend from './Legend'
import Controls from './Controls'

const START_YEAR = 1700
const CURRENT_YEAR = new Date().getFullYear()

class PeriodicTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeYear: START_YEAR,
      timer: null,
      speed: 12,
    }
    this.play = this.play.bind(this)
    this.pause = this.pause.bind(this)
    this.incrementYear = this.incrementYear.bind(this)
    this.onSlide = this.onSlide.bind(this)
    this.increaseSpeed = this.increaseSpeed.bind(this)
    this.decreaseSpeed = this.decreaseSpeed.bind(this)
  }

  onKeyPress(e) {
    console.log(e);
  }

  sortElements(key = "discoveryYear") {
    return Object.values(this.props.elementData).sort((a, b) => a[key] - b[key])
  }

  play() {
    if (this.state.activeYear === CURRENT_YEAR) {
      this.setState({activeYear: START_YEAR})
    }
    if (!this.state.timer) {
      this.setState({timer: setInterval(this.incrementYear, 100)})
    }
  }

  pause() {
    clearInterval(this.state.timer)
    this.setState({timer: null})
  }

  increaseSpeed() {
    this.setState({speed: this.state.speed < 96 ? this.state.speed * 2 : this.state.speed})
  }

  decreaseSpeed() {
    this.setState({speed: this.state.speed > 1 ? this.state.speed / 2 : this.state.speed})
  }

  incrementYear() {
    const nextYear = Math.min(CURRENT_YEAR, this.state.activeYear + (this.state.speed/10))
    this.setState({activeYear: nextYear})
    if (this.state.activeYear >= CURRENT_YEAR) {
      this.pause()
    }
  }

  onSlide(event) {
    this.setState({activeYear: parseInt(event.target.value)});
  }

  render() {
    return (
      <div className="periodic-table">
        <Controls
          activeYear={this.state.activeYear}
          onSlide={this.onSlide}
          play={this.play}
          pause={this.pause}
          isPlaying={this.state.timer !== null}
          increaseSpeed={this.increaseSpeed}
          decreaseSpeed={this.decreaseSpeed}
          />
        <table className="table">
          <ElementGrid
            elementData={this.props.elementData}
            activeYear={this.state.activeYear}
          />
          <tbody>
            <tr className="row">
              <td colSpan="19" style={{fontSize: '90%'}}>
                <Legend/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

PeriodicTable.propTypes = {
  elementData: React.PropTypes.object.isRequired
}

export default PeriodicTable;
