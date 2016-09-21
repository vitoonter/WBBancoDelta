import React from 'react';

const HelpText = ({text, aditional_text}) => (
	<div>
	  {text}
	  <span className="security-info">
	    {aditional_text}
	  </span>
	</div>
);

export default HelpText;
