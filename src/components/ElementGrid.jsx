import React, { Component } from 'react'
import ChemicalElement from './ChemicalElement'

const SINGLE_ASTERISK = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Asterisks_one.svg/16px-Asterisks_one.svg.png'
const DOUBLE_ASTERISK = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Asterisks_2_%28vertical%29.svg/16px-Asterisks_2_%28vertical%29.svg.png'

class ElementGrid extends Component {

  displayElement(elementName) {
    const element = this.props.elementData[elementName]
    const shouldShow = element.discoveryYear <= this.props.activeYear
    return <ChemicalElement {...element} shouldShow={shouldShow}/>
  }

  showSingleRow() {
    return this.props.activeYear >= 1803
  }

  showDoubleRow() {
    return this.props.activeYear >= 1789
  }

  render() {
    return (
      <tbody>
        <tr className="row">
          {this.displayElement("hydrogen")}
          <td colSpan="17"></td>
          {this.displayElement("helium")}
        </tr>
        <tr className="row">
          {this.displayElement("lithium")}
          {this.displayElement("beryllium")}
          <td colSpan="11"></td>
          {this.displayElement("boron")}
          {this.displayElement("carbon")}
          {this.displayElement("nitrogen")}
          {this.displayElement("oxygen")}
          {this.displayElement("fluorine")}
          {this.displayElement("neon")}
        </tr>
        <tr className="row">
          {this.displayElement("sodium")}
          {this.displayElement("magnesium")}
          <td colSpan="11"></td>
          {this.displayElement("aluminium")}
          {this.displayElement("silicon")}
          {this.displayElement("phosphorus")}
          {this.displayElement("sulfur")}
          {this.displayElement("chlorine")}
          {this.displayElement("argon")}
        </tr>
        <tr className="row">
          {this.displayElement("potassium")}
          {this.displayElement("calcium")}
          <td></td>
          {this.displayElement("scandium")}
          {this.displayElement("titanium")}
          {this.displayElement("vanadium")}
          {this.displayElement("chromium")}
          {this.displayElement("manganese")}
          {this.displayElement("iron")}
          {this.displayElement("cobalt")}
          {this.displayElement("nickel")}
          {this.displayElement("copper")}
          {this.displayElement("zinc")}
          {this.displayElement("gallium")}
          {this.displayElement("germanium")}
          {this.displayElement("arsenic")}
          {this.displayElement("selenium")}
          {this.displayElement("bromine")}
          {this.displayElement("krypton")}
        </tr>
        <tr className="row">
          {this.displayElement("rubidium")}
          {this.displayElement("strontium")}
          <td></td>
          {this.displayElement("yttrium")}
          {this.displayElement("zirconium")}
          {this.displayElement("niobium")}
          {this.displayElement("molybdenum")}
          {this.displayElement("technetium")}
          {this.displayElement("ruthenium")}
          {this.displayElement("rhodium")}
          {this.displayElement("palladium")}
          {this.displayElement("silver")}
          {this.displayElement("cadmium")}
          {this.displayElement("indium")}
          {this.displayElement("tin")}
          {this.displayElement("antimony")}
          {this.displayElement("tellurium")}
          {this.displayElement("iodine")}
          {this.displayElement("xenon")}
        </tr>
        <tr className="row">
          {this.displayElement("caesium")}
          {this.displayElement("barium")}
          <td className="center asterisk">
            <img
              style={{display: this.showSingleRow() ? 'inline': 'none'}}
              alt='asterisk'
              src={SINGLE_ASTERISK}
            />
          </td>
          {this.displayElement("lutetium")}
          {this.displayElement("hafnium")}
          {this.displayElement("tantalum")}
          {this.displayElement("tungsten")}
          {this.displayElement("rhenium")}
          {this.displayElement("osmium")}
          {this.displayElement("iridium")}
          {this.displayElement("platinum")}
          {this.displayElement("gold")}
          {this.displayElement("mercury")}
          {this.displayElement("thallium")}
          {this.displayElement("lead")}
          {this.displayElement("bismuth")}
          {this.displayElement("polonium")}
          {this.displayElement("astatine")}
          {this.displayElement("radon")}
        </tr>
        <tr className="row">
          {this.displayElement("francium")}
          {this.displayElement("radium")}
          <td className="center asterisk">
            <img
              style={{display: this.showDoubleRow() ? 'inline': 'none'}}
              alt='double asterisk'
              src={DOUBLE_ASTERISK}
            />
          </td>
          {this.displayElement("lawrencium")}
          {this.displayElement("rutherfordium")}
          {this.displayElement("dubnium")}
          {this.displayElement("seaborgium")}
          {this.displayElement("bohrium")}
          {this.displayElement("hassium")}
          {this.displayElement("meitnerium")}
          {this.displayElement("darmstadtium")}
          {this.displayElement("roentgenium")}
          {this.displayElement("copernicium")}
          {this.displayElement("nihonium")}
          {this.displayElement("flerovium")}
          {this.displayElement("moscovium")}
          {this.displayElement("livermorium")}
          {this.displayElement("tennessine")}
          {this.displayElement("oganesson")}
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
          {this.displayElement("lanthanum")}
          {this.displayElement("cerium")}
          {this.displayElement("praseodymium")}
          {this.displayElement("neodymium")}
          {this.displayElement("promethium")}
          {this.displayElement("samarium")}
          {this.displayElement("europium")}
          {this.displayElement("gadolinium")}
          {this.displayElement("terbium")}
          {this.displayElement("dysprosium")}
          {this.displayElement("holmium")}
          {this.displayElement("erbium")}
          {this.displayElement("thulium")}
          {this.displayElement("ytterbium")}
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
          {this.displayElement("actinium")}
          {this.displayElement("thorium")}
          {this.displayElement("protactinium")}
          {this.displayElement("uranium")}
          {this.displayElement("neptunium")}
          {this.displayElement("plutonium")}
          {this.displayElement("americium")}
          {this.displayElement("curium")}
          {this.displayElement("berkelium")}
          {this.displayElement("californium")}
          {this.displayElement("einsteinium")}
          {this.displayElement("fermium")}
          {this.displayElement("mendelevium")}
          {this.displayElement("nobelium")}
        </tr>
      </tbody>
    )
  }
}


ElementGrid.propTypes = {
  elementData: React.PropTypes.object.isRequired,
  activeYear: React.PropTypes.number.isRequired,
}

export default ElementGrid;
