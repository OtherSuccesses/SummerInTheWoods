import React, { Component } from 'react';

export class Landing extends Component {
	render() {
		return (
			<div>
				<Row>
					<Copy copyClass="col-sm-12 col-md-5" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste itaque nisi dignissimos adipisci eveniet quidem modi tempora nobis. Sed optio illum incidunt, excepturi vero itaque beatae doloribus similique earum perspiciatis!" />
					<Image src="../public/images/IMG_9467.jpg" />
				</Row>
			</div>
		);
	}
}
