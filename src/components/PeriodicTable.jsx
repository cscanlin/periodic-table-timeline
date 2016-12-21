import React, { Component } from 'react'
import ChemicalElement from './ChemicalElement'
import Legend from './Legend'
import Controls from './Controls'

const SINGLE_ASTERISK = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Asterisks_one.svg/16px-Asterisks_one.svg.png'
const DOUBLE_ASTERISK = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Asterisks_2_%28vertical%29.svg/16px-Asterisks_2_%28vertical%29.svg.png'

const YEAR = new Date().getFullYear()

class PeriodicTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeYear: 1700,
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

  play() {
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
    const nextYear = Math.min(YEAR, this.state.activeYear + (this.state.speed/10))
    this.setState({activeYear: nextYear})
    if (this.state.activeYear >= YEAR) {
      this.pause()
    }
  }

  onSlide(event) {
    this.setState({activeYear: parseInt(event.target.value)});
  }

  displayElement(elementName) {
    const element = this.props.elementData[elementName]
    const shouldShow = element.discoveryYear <= this.state.activeYear
    return <ChemicalElement {...element} shouldShow={shouldShow}/>
  }

  showSingleRow() {
    return this.state.activeYear >= 1803
  }

  showDoubleRow() {
    return this.state.activeYear >= 1789
  }

  render() {
    return (
      <div className="app">
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
          <tbody>
            <tr className="row">
              <td>{this.displayElement("hydrogen")}</td>
              <td colSpan="17"></td>
              <td>{this.displayElement("helium")}</td>
            </tr>
            <tr className="row">
              <td>{this.displayElement("lithium")}</td>
              <td>{this.displayElement("beryllium")}</td>
              <td colSpan="11"></td>
              <td>{this.displayElement("boron")}</td>
              <td>{this.displayElement("carbon")}</td>
              <td>{this.displayElement("nitrogen")}</td>
              <td>{this.displayElement("oxygen")}</td>
              <td>{this.displayElement("fluorine")}</td>
              <td>{this.displayElement("neon")}</td>
            </tr>
            <tr className="row">
              <td>{this.displayElement("sodium")}</td>
              <td>{this.displayElement("magnesium")}</td>
              <td colSpan="11"></td>
              <td>{this.displayElement("aluminium")}</td>
              <td>{this.displayElement("silicon")}</td>
              <td>{this.displayElement("phosphorus")}</td>
              <td>{this.displayElement("sulfur")}</td>
              <td>{this.displayElement("chlorine")}</td>
              <td>{this.displayElement("argon")}</td>
            </tr>
            <tr className="row">
              <td>{this.displayElement("potassium")}</td>
              <td>{this.displayElement("calcium")}</td>
              <td></td>
              <td>{this.displayElement("scandium")}</td>
              <td>{this.displayElement("titanium")}</td>
              <td>{this.displayElement("vanadium")}</td>
              <td>{this.displayElement("chromium")}</td>
              <td>{this.displayElement("manganese")}</td>
              <td>{this.displayElement("iron")}</td>
              <td>{this.displayElement("cobalt")}</td>
              <td>{this.displayElement("nickel")}</td>
              <td>{this.displayElement("copper")}</td>
              <td>{this.displayElement("zinc")}</td>
              <td>{this.displayElement("gallium")}</td>
              <td>{this.displayElement("germanium")}</td>
              <td>{this.displayElement("arsenic")}</td>
              <td>{this.displayElement("selenium")}</td>
              <td>{this.displayElement("bromine")}</td>
              <td>{this.displayElement("krypton")}</td>
            </tr>
            <tr className="row">
              <td>{this.displayElement("rubidium")}</td>
              <td>{this.displayElement("strontium")}</td>
              <td></td>
              <td>{this.displayElement("yttrium")}</td>
              <td>{this.displayElement("zirconium")}</td>
              <td>{this.displayElement("niobium")}</td>
              <td>{this.displayElement("molybdenum")}</td>
              <td>{this.displayElement("technetium")}</td>
              <td>{this.displayElement("ruthenium")}</td>
              <td>{this.displayElement("rhodium")}</td>
              <td>{this.displayElement("palladium")}</td>
              <td>{this.displayElement("silver")}</td>
              <td>{this.displayElement("cadmium")}</td>
              <td>{this.displayElement("indium")}</td>
              <td>{this.displayElement("tin")}</td>
              <td>{this.displayElement("antimony")}</td>
              <td>{this.displayElement("tellurium")}</td>
              <td>{this.displayElement("iodine")}</td>
              <td>{this.displayElement("xenon")}</td>
            </tr>
            <tr className="row">
              <td>{this.displayElement("caesium")}</td>
              <td>{this.displayElement("barium")}</td>
              <td className="center asterisk">
                <img
                  style={{display: this.showSingleRow() ? 'inline': 'none'}}
                  alt='asterisk'
                  src={SINGLE_ASTERISK}
                />
              </td>
              <td>{this.displayElement("lutetium")}</td>
              <td>{this.displayElement("hafnium")}</td>
              <td>{this.displayElement("tantalum")}</td>
              <td>{this.displayElement("tungsten")}</td>
              <td>{this.displayElement("rhenium")}</td>
              <td>{this.displayElement("osmium")}</td>
              <td>{this.displayElement("iridium")}</td>
              <td>{this.displayElement("platinum")}</td>
              <td>{this.displayElement("gold")}</td>
              <td>{this.displayElement("mercury")}</td>
              <td>{this.displayElement("thallium")}</td>
              <td>{this.displayElement("lead")}</td>
              <td>{this.displayElement("bismuth")}</td>
              <td>{this.displayElement("polonium")}</td>
              <td>{this.displayElement("astatine")}</td>
              <td>{this.displayElement("radon")}</td>
            </tr>
            <tr className="row">
              <td>{this.displayElement("francium")}</td>
              <td>{this.displayElement("radium")}</td>
              <td className="center asterisk">
                <img
                  style={{display: this.showDoubleRow() ? 'inline': 'none'}}
                  alt='double asterisk'
                  src={DOUBLE_ASTERISK}
                />
              </td>
              <td>{this.displayElement("lawrencium")}</td>
              <td>{this.displayElement("rutherfordium")}</td>
              <td>{this.displayElement("dubnium")}</td>
              <td>{this.displayElement("seaborgium")}</td>
              <td>{this.displayElement("bohrium")}</td>
              <td>{this.displayElement("hassium")}</td>
              <td>{this.displayElement("meitnerium")}</td>
              <td>{this.displayElement("darmstadtium")}</td>
              <td>{this.displayElement("roentgenium")}</td>
              <td>{this.displayElement("copernicium")}</td>
              <td>{this.displayElement("nihonium")}</td>
              <td>{this.displayElement("flerovium")}</td>
              <td>{this.displayElement("moscovium")}</td>
              <td>{this.displayElement("livermorium")}</td>
              <td>{this.displayElement("tennessine")}</td>
              <td>{this.displayElement("oganesson")}</td>
            </tr>
            <tr className="row">
              <td colSpan="19" style={{height: '1.4em'}}></td>
            </tr>
            <tr className="row">
              <td></td>
              <td></td>
              <td className="center asterisk">
                <img
                  style={{display: this.showSingleRow() ? 'inline': 'none'}}
                  alt='asterisk'
                  src={SINGLE_ASTERISK}
                />
              </td>
              <td>{this.displayElement("lanthanum")}</td>
              <td>{this.displayElement("cerium")}</td>
              <td>{this.displayElement("praseodymium")}</td>
              <td>{this.displayElement("neodymium")}</td>
              <td>{this.displayElement("promethium")}</td>
              <td>{this.displayElement("samarium")}</td>
              <td>{this.displayElement("europium")}</td>
              <td>{this.displayElement("gadolinium")}</td>
              <td>{this.displayElement("terbium")}</td>
              <td>{this.displayElement("dysprosium")}</td>
              <td>{this.displayElement("holmium")}</td>
              <td>{this.displayElement("erbium")}</td>
              <td>{this.displayElement("thulium")}</td>
              <td>{this.displayElement("ytterbium")}</td>
            </tr>
            <tr className="row">
              <td></td>
              <td></td>
              <td className="center asterisk">
                <img
                  style={{display: this.showDoubleRow() ? 'inline': 'none'}}
                  alt='double asterisk'
                  src={DOUBLE_ASTERISK}
                />
              </td>
              <td>{this.displayElement("actinium")}</td>
              <td>{this.displayElement("thorium")}</td>
              <td>{this.displayElement("protactinium")}</td>
              <td>{this.displayElement("uranium")}</td>
              <td>{this.displayElement("neptunium")}</td>
              <td>{this.displayElement("plutonium")}</td>
              <td>{this.displayElement("americium")}</td>
              <td>{this.displayElement("curium")}</td>
              <td>{this.displayElement("berkelium")}</td>
              <td>{this.displayElement("californium")}</td>
              <td>{this.displayElement("einsteinium")}</td>
              <td>{this.displayElement("fermium")}</td>
              <td>{this.displayElement("mendelevium")}</td>
              <td>{this.displayElement("nobelium")}</td>
            </tr>
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
