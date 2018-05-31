import React from 'react';

export const Input = (props) => {
	return (
		<div className={this.props.class}>
			<label for={this.props.name}>{this.props.labelText}</label>
			<input type={this.props.type} name={this.props.name} className="form-control" id={!this.props.id?this.props.name:this.props.id}></input>
		</div>
	);
}

