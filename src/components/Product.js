import React, { Component } from 'react';

export default class Product extends Component {
constructor(props) {
super(props)
this.state = {finalPrice: 0}
}

addToCart = (price) => {
    this.state.finalPrice += price
    this.props.getPriceFromProduct(this.state.finalPrice)
}

getPrice = this.props.getPriceFromProduct;

    render() {
    const rows = [];
    this.props.items.forEach((item) => {rows.push(
    <div key= {item.id}>{item.title}  {item.price} <button onClick={() => this.addToCart(item.price)}>Add</button></div>
    )
    });
        return (
            <div>{rows}</div>
        );
    }

}