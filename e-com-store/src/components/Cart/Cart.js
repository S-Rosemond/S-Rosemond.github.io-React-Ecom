import React, { Component } from 'react';
import { ProductConsumer } from '../../Context/context.js';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default class Cart extends Component {
	render() {
		return (
			<section>
				<ProductConsumer>
					{value => {
						const { cart } = value;
						if (cart.length > 0) {
							return (
								<React.Fragment>
									<Title name="your" title="cart items" />
									<CartColumns />
									<CartList value={value} />
									<CartTotals value={value} history={this.props.history} />
								</React.Fragment>
							);
						} else {
							return <EmptyCart />;
						}
					}}
				</ProductConsumer>
			</section>
		);
	}
}
