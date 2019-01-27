import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo/logo.svg';
import styled from 'styled-components';

const ButtonContainer = styled.button`
	text-transform: capitalize;
	font-size: 1.4rem;
	background: transparent;
	border: 0.05rem solid var(--mainWhite);
	color: var(--mainWhite);
	border-radius: 0.5rem;
	padding: 0.2rem 0.5rem;
	cursor: pointer;
	margin: 0.2rem 0.5rem 0;
	transition: all 0.5s easie-in-out;
	&:hover {
		background: var(--lightYellow);
	}
	&:focus {
		outline: none;
	}
`;

const NavWrapper = styled.nav`
	background-color: var(--navDark);
	.nav-link {
		color: var(--mainWhite) !important;
		font-size: 1.3rem;
		text-transform: capitalize !important;
		&:hover {
			color: var(--mainYellow) !important;
		}
	}
`;

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
						<img src={Logo} alt="Navigation bar brand telephone icon" />
					</Link>
					<ul className="navbar-nav align-items-center">
						<li className="nav-item ml-5" />
						<Link to="/" className="nav-link">
							Products
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
