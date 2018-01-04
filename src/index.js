import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import ProductApp from './components/ProductApp';
import registerServiceWorker from './registerServiceWorker';
//import Items from './utils/items';

const Items = [
               {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
               {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
               {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
             ];


ReactDOM.render(<ProductApp items = {Items}/>, document.getElementById('root'));
registerServiceWorker();
