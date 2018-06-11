import React from 'react';
import Button from './subcomponents/Button.jsx';
import FormGroup from './subcomponents/FormGroup.jsx';
import Row from './subcomponents/Row.jsx';
import Wrapper from './subcomponents/Wrapper.jsx';
import InputBox from './subcomponents/InputBox.jsx';

const MessageForm = props => {
	return (
		<Wrapper>
			<Row>
				<FormGroup formGroupClass="col-md-6 col-sm-12">
					<InputBox 
						name='name'
						type='text'
						lableText="Name"
						id="name"
					/>
					<InputBox
						name="email"
						type="text"
						lableText="E-mail"
						id="email"
					/>
				</FormGroup> 
			</Row>
			<Row>
				<FormGroup formGroupClass="col-sm-12">
					<InputBox
						name="message"
						type="text"
						lableText="Type your message here."
						id="message"
					/>
				</FormGroup>
			</Row>
			<Row>
				<FormGroup formGroupClass="col-md-4 col-sm-6">
					<Button 
						buttonClass="btn btn-primary"
						buttonId="submit"
						buttonText="Send Message"
					/>
				</FormGroup>
				<FormGroup formGroupClass="col-md-4 col-sm-6">
					<Button 
						buttonClass="btn btn-danger"
						buttonId="clear"
						buttonText="Clear"
					/>
				</FormGroup>
			</Row>
		</Wrapper>
	)
} 
export default MessageForm;