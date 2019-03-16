import React, { Component, Fragment } from 'react';
import Product from './Product';
import Title from './Title';
import { ProductConsumer } from '../Context/context';

export default class ProductList extends Component {
	render() {
		return (
			<Fragment>
				<div className="py-5">
					<div className="container">
						<Title name="our" title="Products" />
						<div className="row">
							<ProductConsumer>
								{providerContext => {
									return providerContext.products.map(product => (
										<Product key={product.id} product={product} />
									));
								}}
							</ProductConsumer>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}
