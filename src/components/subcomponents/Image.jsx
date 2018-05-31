import React, { Component } from 'react';

export class Image extends Component {
	render() {
		return (
			<div class={this.props.class}>
				<img src={this.props.src}></img>
			</div>
		);
	}
}
