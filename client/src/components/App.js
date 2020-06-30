import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
        <Route path="/">
          <h1>Hello You!</h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
