import React, { Component } from 'react';

export class Textarea extends Component {
	render() {
		return (
			<div class={this.props.class}>
				<label for={this.props.name}>Message</label>
				<textarea name={this.props.name} id={!this.props.id?this.props.name:this.props.id} class="form-control" rows="10"></textarea>
			</div>
		);
	}
}
