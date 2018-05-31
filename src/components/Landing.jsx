import React, { Component } from 'react';

import Row from "./subcomponents/Row.jsx";
import Image from "./subcomponents/Image.jsx";
import Copy from "./subcomponents/Copy.jsx";
const copyClass = "col-sm-12 col-md-7";
const imageClass = "col-sm-12 col-md-5"; 
const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium facilis temporibus, sit molestias ipsum aliquam, quasi, voluptate mollitia nemo quisquam eligendi molestiae, blanditiis harum labore error sequi ipsam! Cum, odio.";
const alt = "Children Playing";
const images = ["../../images/IMG_9444.JPG", "../../images/IMG_9533.JPG", "../../images/IMG_9558.JPG", "../../images/IMG_9767.JPG"];
export default class Landing extends Component {

	render() {
		return (
			<div>
				{images.map((image, i)=> {
					console.log("i",i)
					return(
						<Row 
							key={i} 
							imageLeft={i%2}
							copyClass={copyClass} 
							imageClass={imageClass}
							src={image}
							text={text}
						/>
					)

				})}
			</div>
		);
	}
}
