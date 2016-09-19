import React from 'react'
import Steps from './Steps';

const BoxHeader = ({step, text, className, colors})=> (
  <div className={className}>
    <h5>{step}</h5>
    <h4>{text}</h4>
    <Steps colors={colors}/>
  </div>
)

export default BoxHeader;
