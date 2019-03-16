import React, { Component } from 'react';
import { storeProducts, detailProduct } from '../data/data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
	state = {
		products: [],
		detailProduct
	};
	componentDidMount() {
		this.setProducts();
	}
	setProducts = () => {
		let tempProducts = [];
		storeProducts.forEach(item => {
			const singleItem = { ...item };
			tempProducts = [...tempProducts, singleItem];
		});
		this.setState(() => {
			return { products: tempProducts };
		});
	};
	handleDetail = () => console.log('hello from detail');

	addToCart = id => console.log(`Add to cart ${id}`);

	render() {
		return (
			<ProductContext.Provider
				value={{
					...this.state,
					handleDetail: this.handleDetail,
					addToCart: this.addToCart
				}}
			>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };