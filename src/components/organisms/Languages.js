import React from 'react'

const Languages = ({changeLanguage}) => 
  <div className="languages-box">
    <button onClick={() => changeLanguage('es')}>ES</button>
    <button onClick={() => changeLanguage('en')}>EN</button>    
  </div>

export default Languages;