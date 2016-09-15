import React, { Component } from 'react';

const Input =({placeholder,id,type})=> (
  <input type="text" 
    className="form-control" 
    id={id}
    type ={type} 
    placeholder={placeholder}
  />
);
export default Input;

