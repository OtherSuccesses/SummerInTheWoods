import React from 'react';
import Image from './Image.jsx';
import TextBox from './TextBox.jsx';
import Row from './Row.jsx';


const alt = "Children Playing";
const ImageTextRow = props => {
	return(
		<Row>
			{props.imageLeft?(
				<div>
					<Image 
						src={props.src}
						imageClass={props.imageClass}
						style={props.imageStyle}
						alt={alt}
					/>
					<TextBox
						textBoxClass={props.textBoxClass}
						text={props.text}
					/>
				</div>
			):(
				<div>
					<TextBox
						textBoxClass={props.textBoxClass}
						text={props.text}
					/>
					<Image 
						src={props.src}
						imageClass={props.imageClass}
						style={props.imageStyle}
						alt={alt}
					/>
				</div>
			)}
		</Row>
	)


}
export default ImageTextRow;