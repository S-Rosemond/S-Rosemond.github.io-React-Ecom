import React, { Component, Fragment } from 'react';
import Product from './Product';
import Title from './Title';

export default class ProductList extends Component {
	state = {
		products: [],
		title: 'products',
		name: 'our'
	};
	render() {
		return (
			<Fragment>
				<div className="py-5">
					<div className="container">
						<Title name={this.state.name} title={this.state.title} />
						<div className="row" />
					</div>
				</div>
			</Fragment>
			//<Product />
		);
	}
}
