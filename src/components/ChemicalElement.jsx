import React, { Component } from 'react'

class ChemicalElement extends Component {
  shouldComponentUpdate(nextProps) {
    return this.props.shouldShow !== nextProps.shouldShow
  }

  discoveryYearFormatted() {
    const discovered = this.props.discoveryYear
    return discovered < 0 ? `~${Math.abs(discovered)} BCE` : discovered
  }

  render() {
    const elementStyle = {display: this.props.shouldShow ? 'block' : 'none'}
    return (
      <span>
        <a style={elementStyle} href={'https://en.wikipedia.org' + this.props.wikiLink} title={this.props.elementName}>
          <span className={`element ${this.props.subcategory} ${this.props.occurrence}`}>
            <span className="element-name-text" dangerouslySetInnerHTML={{__html: this.props.nameText}} />
            <span className={`atomic-number ${this.props.matterState}`}>{this.props.atomicNumber}</span>
            <span className="atomic-symbol">{this.props.atomicSymbol}</span>
            <span className="discovery-year nowrap">{this.discoveryYearFormatted()}</span>
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
  shouldShow: React.PropTypes.bool.isRequired,
}

export default ChemicalElement;
