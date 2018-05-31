import React, { Component } from 'react';
import Image from './Image.jsx';
import Copy from './Copy.jsx';

const Row = (props) => {
	console.log(props)
	return(
		<div className="row">
			{props.imageLeft?(
				<div>
					<Image 
						src={props.src}
						imageClass={props.imageClass}
					/>
					<Copy
						copyClass={props.copyClass}
						text={props.text}
					/>
				</div>
			):(
				<div>
					<Copy
						copyClass={props.copyClass}
						text={props.text}
					/>
					<Image 
						src={props.src}
						imageClass={props.imageClass}
					/>
				</div>
			)}
		</div>
	)


}
export default Row;