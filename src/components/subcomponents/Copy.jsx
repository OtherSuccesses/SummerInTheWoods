import React from 'react';

const Copy = ( {copyClass, text}) => {
	return (
		<div className={copyClass}>
			<p>{text}</p>
		</div>
	);
}

export default Copy;