import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AllProducts from './pages/AllProducts';
import ProductPage from './pages/ProductPage';

const App = () => {
  const [products, setProducts] = useState([]);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <AllProducts products={products} setProducts={setProducts} />
        </Route>
        <Route path="/product/:id" exact>
          <ProductPage products={products} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
