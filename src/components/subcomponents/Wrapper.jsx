import React from "react";

const Wrapper = props => {
	return (
		<div className={props.wrapperClass}>
			{props.children}
		</div>
	)
}
export default Wrapper;