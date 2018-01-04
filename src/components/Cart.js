import React, { Component } from 'react';

export default class Cart extends Component {
constructor(props){
super(props)
}

render () {
    return (
    <div>
    <h1>Cart Price </h1>
    <div>{this.props.cartPrice}</div>
    </div>
    );
}
}