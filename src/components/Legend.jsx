import React, { Component } from 'react'

class Legend extends Component {
  render() {
    return (
      <table className="legend-table">
        <tbody>
          <tr>
            <td>
              <table className="fit">
                <tbody>
                  <tr>
                    <td className="legend matter-state solid">black=<a href="/wiki/Solid" title="Solid"><span className="solid">solid</span></a></td>
                    <td className="legend matter-state liquid">green=<a href="/wiki/Liquid" title="Liquid"><span className="liquid">liquid</span></a></td>
                    <td className="legend matter-state gas">red=<a href="/wiki/Gas" title="Gas"><span className="gas">gas</span></a></td>
                    <td className="legend matter-state unknown-state">gray=unknown</td>
                    <td className="legend-description">
                      <span className="nowrap">
                        <b>Color of the atomic number</b> shows
                        <a href="/wiki/State_of_matter" title="State of matter">state of matter</a>
                        (at <a href="/wiki/Standard_conditions_for_temperature_and_pressure" title="Standard conditions for temperature and pressure">0&nbsp;°C and 1&nbsp;atm</a>)
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table className="fit">
                <tbody>
                  <tr>
                    <td className="legend occurrence primordial"><a href="/wiki/Primordial_element" title="Primordial element">Primordial</a></td>
                    <td className="legend occurrence from-decay"><a href="/wiki/Trace_radioisotope" title="Trace radioisotope"><span className="nowrap">From decay</span></a></td>
                    <td className="legend occurrence synthetic"><a href="/wiki/Synthetic_element" title="Synthetic element">Synthetic</a></td>
                    <td className="legend-description">
                      <span className="nowrap">
                        <b>Border</b> shows natural occurrence of the element
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td colSpan="11" style={{textAlign: 'left'}}><b>Background color</b> shows subcategory in the metal–metalloid–nonmetal trend:</td>
                  </tr>
                  <tr>
                    <td colSpan="6" className="category metal"><a href="/wiki/Metal" title="Metal">Metal</a></td>
                    <td rowSpan="2" className="category subcategory metalloid"><a href="/wiki/Metalloid" title="Metalloid">Metalloid</a></td>
                    <td colSpan="3" className="category nonmetal"><a href="/wiki/Nonmetal" title="Nonmetal">Nonmetal</a></td>
                    <td rowSpan="3" className="category unknown-subcategory">Unknown chemical properties</td>
                  </tr>
                  <tr>
                    <td className="subcategory alkali-metal"><a href="/wiki/Alkali_metal" title="Alkali metal">Alkali metal</a></td>
                    <td className="subcategory alkaline-earth-metal"><a href="/wiki/Alkaline_earth_metal" title="Alkaline earth metal">Alkaline earth metal</a></td>
                    <td className="subcategory lanthanide"><a href="/wiki/Lanthanide" title="Lanthanide">Lan&shy;thanide</a></td>
                    <td className="subcategory actinide"><a href="/wiki/Actinide" title="Actinide">Actinide</a></td>
                    <td className="subcategory transition-metal"><a href="/wiki/Transition_metal" title="Transition metal">Transition metal</a></td>
                    <td className="subcategory post-transition-metal"><a href="/wiki/Post-transition_metal" title="Post-transition metal">Post-&#8203;transition metal</a></td>
                    <td className="subcategory polyatomic-nonmetal"><a href="/wiki/Polyatomic_nonmetal" title="Polyatomic nonmetal">Polyatomic nonmetal</a></td>
                    <td className="subcategory diatomic-nonmetal"><a href="/wiki/Diatomic_nonmetal" title="Diatomic nonmetal">Diatomic nonmetal</a></td>
                    <td className="subcategory noble-gas"><a href="/wiki/Noble_gas" title="Noble gas">Noble gas</a></td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}
export default Legend;
