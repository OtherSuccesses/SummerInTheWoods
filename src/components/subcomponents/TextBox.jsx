import React from 'react';

const TextBox = props => {
	return (
		<div className={props.textBoxClass}>
			<p>{props.text}</p>
		</div>
	);
}

export default TextBox;