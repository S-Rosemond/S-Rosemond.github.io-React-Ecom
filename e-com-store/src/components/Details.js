import React, { Component } from 'react';
import { ProductConsumer } from '../Context/context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
	render() {
		return (
			<ProductConsumer>
				{value => {
					const { id, company, info, title, img, price, inCart } = value.detailProduct;
					return (
						<div className="container py-5">
							<div className="row">
								<div className="col-10 mx-auto text-center  my-5">
									<h1>{title}</h1>
								</div>
							</div>
							<div className="row">
								<div className="col-10 mx-auto col-md-6 my-3 ">
									<img src={img} alt={title} className="img-fluid" />
								</div>
								<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
									<h2>model: {title}</h2>
									<h4 className="text-title text-uppercase text-muted mt-3 mb-2 ">
										made by: <span className="text-uppercas3">{company}</span>
									</h4>
									<h4>
										<strong>
											price : <span className="mr-1">$</span>
											{price}
										</strong>
									</h4>
									<p className="text-capitalize font-weight-bold mt-3 mb-0">
										Some info about the product:
									</p>
									<p className="text-muted lead alert alert-secondary">{info}</p>
									<div>
										<Link to="/">
											<ButtonContainer bg={'#ff6100'}>back to Products</ButtonContainer>
										</Link>
										<ButtonContainer
											bg={'var(--lightBlue)'}
											disabled={inCart ? true : false}
											onClick={() => {
												value.addToCart(id);
											}}
										>
											{inCart ? 'inCart' : 'Add to cart'}
										</ButtonContainer>
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</ProductConsumer>
		);
	}
}
