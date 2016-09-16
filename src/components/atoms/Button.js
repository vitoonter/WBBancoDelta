import React from 'react';
import { Link } from 'react-router';

const Button = ({text,className,link})=> (
	<Link to={link}>
		<button type="button" className={className}>{text}</button>
	</Link>
);
export default Button; 



