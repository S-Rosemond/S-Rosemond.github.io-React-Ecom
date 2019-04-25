import React, { Component } from 'react';

export default class Default extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
						<h1 className="display-3">404</h1>
						<h2>error: page Not found</h2>
						<h4>
							the requested url:
							<span className="text-primary">{this.props.location.pathname}</span>was not found
						</h4>
					</div>
				</div>
			</div>
		);
	}
}
