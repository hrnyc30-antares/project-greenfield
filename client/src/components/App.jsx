import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Products from './Products';

function App() {
  return (
    <Switch>
      <Route path="/product/:id">
        <h1>Product</h1>
      </Route>
      <Route path="/products" component={Products} />
      <Route path="/">
        <h1>Home</h1>
      </Route>
    </Switch>
  );
}

export default App;
