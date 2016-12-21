import React, { Component } from 'react'

class ChemicalElement extends Component {
  show() {
    return this.props.discoveryYear <= this.props.activeYear
  }

  render() {
    const elementStyle = {
        display: this.show() ? 'block' : 'none'
    }
    return (
      <span>
        <a style={elementStyle} href={this.props.wikiLink} title={this.props.elementName}>
          <span className={`element ${this.props.subcategory} ${this.props.occurrence}`}>
            <span className="element-name-text" dangerouslySetInnerHTML={{__html: this.props.nameText}} />
            <span className={`atomic-number ${this.props.matterState}`}>{this.props.atomicNumber}</span>
            <span className="atomic-symbol">{this.props.atomicSymbol}</span>
          </span>
        </a>
      </span>
    )
  }
}


ChemicalElement.propTypes = {
  wikiLink: React.PropTypes.string.isRequired,
  elementName: React.PropTypes.string.isRequired,
  subcategory: React.PropTypes.string.isRequired,
  occurrence: React.PropTypes.string.isRequired,
  nameText: React.PropTypes.string.isRequired,
  matterState: React.PropTypes.string.isRequired,
  atomicNumber: React.PropTypes.number.isRequired,
  atomicSymbol: React.PropTypes.string.isRequired,
  discoveryYear: React.PropTypes.number.isRequired,
  activeYear: React.PropTypes.number.isRequired,
}

export default ChemicalElement;
