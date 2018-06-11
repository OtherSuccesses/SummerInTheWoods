import React, { Component } from 'react';
import ImageTextRow from "./subcomponents/ImageTextRow.jsx";
import firebase from "./firebase.js";

const database = firebase.database();
const textBoxClass = "col-md-7";
const imageClass = "col-md-5"; 
const text = ["We are excited to offer a summer camp where free play is paramount, where mud, dirt, water and art are our curriculum, and most of all, where children can be children! We would love for your child to join us!","We draw inspiration from Montessori and Reggio Emilia philosophies and our program is based outdoors with an emphasis on unstructured, child-led play.", "Our mornings at camp will vary depending on the interests of the children will often involve creating artwork with lots of different materials (clay, sculpture, painting, collage, etc.), exploring the natural environment, building, reading, resting, caring for our animals, and working both independently and collaboratively.","Most of all, we want to offer a camp that captures the magic that we remember from our own childhood summers- a camp where children are simply free to play."];
const images = [require("../images/IMG_9917.JPG"), require("../images/IMG_9553.JPG"), require("../images/IMG_9790.JPG"), require("../images/IMG_9467.JPG")];
// const messageRef = database.ref("/messages");
const imageStyle = {
    width: '100%',
    height: 'auto'
};
class Landing extends Component {
	componentDidMount = () => {

	}
	handleSubmit = e => {
		e.preventDefault();
	}
	render() {
		return (
			<div>
				{images.map((image, i)=> {
					console.log(image, i);
					return(
						<ImageTextRow 
							key={i} 
							imageLeft={i%2}
							textBoxClass={textBoxClass} 
							imageClass={imageClass}
							imageStyle={imageStyle}
							src={images[i]}
							text={text[i]}
						/>
					)

				})}
			</div>
		);
	}
}
export default Landing;