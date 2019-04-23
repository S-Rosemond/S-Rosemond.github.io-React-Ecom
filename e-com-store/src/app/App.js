import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';
import NavBar from './../components/NavBar';
import ProductList from './../components/ProductList';
import Details from './../components/Details';
import Cart from './../components/Cart/';
import Default from './../components/Default';
import Modal from './../components/Modal';

class App extends Component {
	render() {
		return (
			<Fragment>
				<NavBar />
				<Switch>
					<Route path="/" component={ProductList} exact={true} />
					<Route path="/details" component={Details} />
					<Route path="/cart" component={Cart} />
					<Route component={Default} />
				</Switch>
				<Modal />
			</Fragment>
		);
	}
}

export default App;
