import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../Context/context';
import PropTypes from 'prop-types';

export default class Product extends Component {
	render() {
		const { id, title, img, price, inCart } = this.props.product;
		return (
			<div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
				<div className="card">
					<div className="img-container p-5" onClick={() => console.log('clicked')}>
						<Link to="/details">
							<img src={img} alt={title} className="card-img-top" />
						</Link>
						<button className="cart-btn" disabled={!inCart} onClick={() => console.log('added to cart')}>
							{inCart ? (
								<p className="text-capitalize mb-0" disabled>
									in cart
								</p>
							) : (
								<i className="fas fa-cart-plus" />
							)}
						</button>
					</div>
					<div className="card-footer d-flex justify-content-between">
						<h5 className="align-self-center mb-0">{title}</h5>
						<h5 className=" font-italic mb-0">
							<span className="mr-1">$</span>
							{price}
						</h5>
					</div>
				</div>
			</div>
		);
	}
}

Product.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number,
		img: PropTypes.string,
		title: PropTypes.string,
		price: PropTypes.number,
		inCart: PropTypes.bool
	}).isRequired
};
