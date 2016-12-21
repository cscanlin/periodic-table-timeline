import React, { Component } from 'react'
import ChemicalElement from './ChemicalElement'

class PeriodicTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeYear: 1700,
    }
  }
  render() {
    return (
      <table className="table">
        <tbody>
          <tr>
            <td><ChemicalElement {...this.props.elementData["hydrogen"]} {...this.state}/></td>
            <td colSpan="17"></td>
            <td><ChemicalElement {...this.props.elementData["helium"]} {...this.state}/></td>
          </tr>
          <tr>
            <td><ChemicalElement {...this.props.elementData["lithium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["beryllium"]} {...this.state}/></td>
            <td colSpan="11"></td>
            <td><ChemicalElement {...this.props.elementData["boron"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["carbon"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["nitrogen"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["oxygen"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["fluorine"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["neon"]} {...this.state}/></td>
          </tr>
          <tr>
            <td><ChemicalElement {...this.props.elementData["sodium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["magnesium"]} {...this.state}/></td>
            <td colSpan="11"></td>
            <td><ChemicalElement {...this.props.elementData["aluminium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["silicon"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["phosphorus"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["sulfur"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["chlorine"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["argon"]} {...this.state}/></td>
          </tr>
          <tr>
            <td><ChemicalElement {...this.props.elementData["potassium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["calcium"]} {...this.state}/></td>
            <td></td>
            <td><ChemicalElement {...this.props.elementData["scandium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["titanium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["vanadium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["chromium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["manganese"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["iron"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["cobalt"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["nickel"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["copper"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["zinc"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["gallium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["germanium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["arsenic"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["selenium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["bromine"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["krypton"]} {...this.state}/></td>
          </tr>
          <tr>
            <td><ChemicalElement {...this.props.elementData["rubidium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["strontium"]} {...this.state}/></td>
            <td></td>
            <td><ChemicalElement {...this.props.elementData["yttrium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["zirconium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["niobium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["molybdenum"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["technetium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["ruthenium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["rhodium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["palladium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["silver"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["cadmium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["indium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["tin"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["antimony"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["tellurium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["iodine"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["xenon"]} {...this.state}/></td>
          </tr>
          <tr>
            <td><ChemicalElement {...this.props.elementData["caesium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["barium"]} {...this.state}/></td>
            <td className="center" style={{width: 106, height: 98}}>
              <img alt='asterisk' src={'//upload.wikimedia.org/wikipedia/commons/thumb/4/49/Asterisks_one.svg/16px-Asterisks_one.svg.png'}/>
            </td>
            <td><ChemicalElement {...this.props.elementData["lutetium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["hafnium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["tantalum"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["tungsten"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["rhenium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["osmium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["iridium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["platinum"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["gold"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["mercury"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["thallium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["lead"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["bismuth"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["polonium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["astatine"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["radon"]} {...this.state}/></td>
          </tr>
          <tr>
            <td><ChemicalElement {...this.props.elementData["francium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["radium"]} {...this.state}/></td>
            <td className="center" style={{width: 106, height: 98}}>
              <img alt='double asterisk' src={'//upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Asterisks_2_%28vertical%29.svg/16px-Asterisks_2_%28vertical%29.svg.png'}/>
            </td>
            <td><ChemicalElement {...this.props.elementData["lawrencium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["rutherfordium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["dubnium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["seaborgium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["bohrium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["hassium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["meitnerium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["darmstadtium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["roentgenium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["copernicium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["nihonium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["flerovium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["moscovium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["livermorium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["tennessine"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["oganesson"]} {...this.state}/></td>
          </tr>
          <tr>
            <td colSpan="19" style={{height: '1.4em'}}></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td className="center" style={{width: 106, height: 98}}>
              <img alt='asterisk' src={'//upload.wikimedia.org/wikipedia/commons/thumb/4/49/Asterisks_one.svg/16px-Asterisks_one.svg.png'}/>
            </td>
            <td><ChemicalElement {...this.props.elementData["lanthanum"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["cerium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["praseodymium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["neodymium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["promethium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["samarium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["europium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["gadolinium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["terbium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["dysprosium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["holmium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["erbium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["thulium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["ytterbium"]} {...this.state}/></td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td className="center" style={{width: 106, height: 98}}>
              <img alt='double asterisk' src={'//upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Asterisks_2_%28vertical%29.svg/16px-Asterisks_2_%28vertical%29.svg.png'}/>
            </td>
            <td><ChemicalElement {...this.props.elementData["actinium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["thorium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["protactinium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["uranium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["neptunium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["plutonium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["americium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["curium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["berkelium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["californium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["einsteinium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["fermium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["mendelevium"]} {...this.state}/></td>
            <td><ChemicalElement {...this.props.elementData["nobelium"]} {...this.state}/></td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td colSpan="19" style={{fontSize: '90%'}}></td>
          </tr>
          <tr>
          <td colSpan="19">

          </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

PeriodicTable.propTypes = {
  elementData: React.PropTypes.object.isRequired
}

export default PeriodicTable;
