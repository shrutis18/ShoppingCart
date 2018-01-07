import React, { Component } from 'react';
import Product from './Product';
import Cart from './Cart';

export default class ProductApp extends Component {
    constructor(props){
    super(props)
    }

  render() {
  const { cartPrice} = this.props;
  var tableStyle = {
       padding: 10,
       color: "#444",
       border: "3px solid orange",
       width: "30%",
       height: "200px",
       margin:"400px",
       letterSpacing: 0,
       overflow: "hidden",
       fontSize: 20,
       fontVariant: "large-caps",
       align:"center"
   };
    return (
        <div>
        <table style = {tableStyle}>
            <Product prop ={this.props}/>
            <Cart cartPrice = {cartPrice}/>
        </table>
        </div>
    );
    }
}