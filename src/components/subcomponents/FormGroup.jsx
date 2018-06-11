import React from 'react';

const FormGroup = props => {
	return (
		<div className={props.formGroupClass}>
			{props.children}
		</div>
	)
}

export default FormGroup;