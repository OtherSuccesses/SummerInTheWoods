import React, { Component } from 'react';

export class Copy extends Component {
	render() {
		return (
			<div class={this.props.class}>
				<p>{this.props.text}</p>
			</div>
		);
	}
}
