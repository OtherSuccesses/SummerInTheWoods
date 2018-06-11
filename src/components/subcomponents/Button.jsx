import React from "react";

const Button = props => {
	return (
		<button 
			className={props.buttonClass}
			id={props.buttonId}
		>
			{props.buttonText}
		</button>
	)
}
export default Button;