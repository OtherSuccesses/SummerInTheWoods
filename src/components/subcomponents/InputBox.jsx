import React from 'react';

const InputBox = ( {name, labelText, type, id} ) => {
	return (
		<div>
			<label for={name}>{labelText}</label>
			<input type={type} name={name} className="form-control" id={id}></input>
		</div>
	);
}
export default InputBox;

