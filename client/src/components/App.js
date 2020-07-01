import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Question from './Question/Question.js'

function App() {
  return (
    <>
      <Switch>
        <Route path="/">
          <h1>Hello You!</h1>
          <Question />
        </Route>
      </Switch>
    </>
  );
}

export default App;
