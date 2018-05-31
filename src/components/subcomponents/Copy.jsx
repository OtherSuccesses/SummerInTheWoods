import React from 'react';

export const Copy = ( {copyClass, text}) => {
		return (
			<div className={copyClass}>
				<p>{text}</p>
			</div>
		);
	}
}
