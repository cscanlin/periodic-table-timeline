import React from 'react'
import ReactDOM from 'react-dom'
import PeriodicTable from './components/PeriodicTable'
import './periodic_table.css'
import elementData from './element_data.json';

ReactDOM.render(
  <PeriodicTable elementData={elementData}/>,
  document.getElementById('root')
)
