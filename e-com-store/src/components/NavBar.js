import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo/logo.svg';
import { ButtonContainer } from './Button';
import { NavWrapper } from './NavWrapper';

export default class NavBar extends Component {
	render() {
		return (
			<div>
				<NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
					{/* 
				https://www.iconfinder.com/icons/1243689/call_phone_icon
				Creative Commons (Attribution 3.0 Unported);
				https://www.iconfinder.com/Makoto_msk */}
					<Link to="/">
						<img src={Logo} alt="Home Page" className="navbar-brand" />
					</Link>
					<ul className="navbar-nav align-items-center">
						<li className="nav-item ml-5" />
						<Link to="/" className="nav-link">
							Le Monde Matrice
						</Link>
					</ul>
					<Link to="/cart" className="ml-auto">
						<ButtonContainer>
							<span className="mr-2">
								<i className="fas fa-cart-plus" />
							</span>
							My Cart
						</ButtonContainer>
					</Link>
				</NavWrapper>
			</div>
		);
	}
}
