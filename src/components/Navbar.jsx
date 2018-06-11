import React, { Component } from 'react';

class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className="navbar-default clearfix">
					<div className="row">
						<div className="col-sm-11">
							<p className="navbar-text pull-left">Summer In The Woods</p>
						</div>
						<div className="dropdown pull-right col-sm-1">
	  					<button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
								<i className="fas fa-bars"></i>
						  </button>
	  					<ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
		    				<li><a>Check Availability</a></li>
		    				<li><a>Contact</a></li>
		    				<li><a>Application</a></li>
		    				<li role="separator" className="divider"></li>
		    				<li><a>Parent Login</a></li>
	  					</ul>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;