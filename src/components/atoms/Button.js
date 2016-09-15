import React, { Component } from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'

const Button = ({text,className,link})=> (
<Link to={link}>
	<button type="button" className={className}>{text}</button>
</Link>
);
export default Button; 



