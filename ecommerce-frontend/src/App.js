// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllProductsPage from './pages/AllProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllProductsPage} />
        <Route path="/product/:productId" component={ProductDetailPage} />
      </Switch>
    </Router>
  );
};

export default App;
