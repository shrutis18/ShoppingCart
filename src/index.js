import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {connect, Provider} from 'react-redux';
import './index.css';
import ProductApp from './components/ProductApp';
import reducer from './reducer/reducer';
import registerServiceWorker from './registerServiceWorker';
import {mapStateToProps,mapDispatchToProps} from './actions/actions.js';

const store = createStore(reducer);

const ProductAppWithStore = connect(mapStateToProps, mapDispatchToProps)(ProductApp);

ReactDOM.render(<Provider store = {store}>
<ProductAppWithStore />
</Provider>,document.getElementById('root')
);
registerServiceWorker();
