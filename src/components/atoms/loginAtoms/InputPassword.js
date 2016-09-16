import React from 'react';

const InputPassword =({placeholder,password})=> (
<input type="text"
  className="login-input l-center" 
  type="password"
  name="password"
  placeholder={placeholder}    
/>
);
export default InputPassword;
