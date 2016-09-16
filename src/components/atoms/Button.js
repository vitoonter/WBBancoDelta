import React from 'react';

const Button = ({text,className,link})=> (
<Link to={link}>
	<button type="button" className={className}>{text}</button>
</Link>
);
export default Button; 



