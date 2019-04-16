import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import ProductsComponent from './components/ProductsComponent';
import CartComponent from './components/CartComponent';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <HeaderComponent/>
          <Route exact path="/" component={ProductsComponent}></Route>
          <Route exact path="/cart" component={CartComponent}></Route>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
