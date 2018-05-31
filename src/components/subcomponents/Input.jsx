import React, { Component } from 'react';

export class Input extends Component {
	render() {
		return (
			<div class={this.props.class}>
				<label for={this.props.name}>{this.props.labelText}</label>
				<input type={this.props.type} name={this.props.name} class="form-control" id={!this.props.id?this.props.name:this.props.id}></input>
			</div>
		);
	}
}

