import React from 'react';

const Input =({ placeholder,id,type }) =>
  <input
    className="form-control" 
    id={id}
    type ={type} 
    placeholder={placeholder}
  />

export default Input;

