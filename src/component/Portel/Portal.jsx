import React from 'react'
import ReactDOM from "react-dom";
import PoratalPage from './PoratalPage';

const Portal = (props) => {
  return ReactDOM.createPortal(<PoratalPage onHidePortal={props.onHidePortal}/> ,document.getElementById('portal'))
}

export default Portal