import React, { Component } from 'react';

export default class Cart extends Component {
constructor(props){
super(props)
}

render () {
     const {cartPrice } = this.props;
    return (
    <div>
    <h1>Cart Price </h1>
    <div>{cartPrice}</div>
    </div>
    );
}
}