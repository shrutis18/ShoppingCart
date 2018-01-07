import React, { Component } from 'react';

export default class Product extends Component {
        constructor(props) {
        super(props)
    }

    render() {
    const { prop } = this.props;
    const rows = [];
    prop.items.forEach((item) => {rows.push(
    <div key= {item.id}>{item.title}  {item.price} <button onClick={() => prop.addToCart(item.price)}>Add</button></div>
    )
    });
        return (
            <div>{rows}</div>
        );
    }
}