import React, { Component } from 'react';

const Textarea = props => {
	render() {
		return (
			<div class={props.class}>
				<label for={props.name}>Message</label>
				<textarea name={props.name} id={id} class="form-control" rows="10"></textarea>
			</div>
		);
	}
}
