import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from '~pages/header/Header';
import Home from '~pages/Home';
import Test from '~pages/Test';

interface Props {}

const App: React.FC<Props> = () => (
  <div>
    <Header />
    <div>
      <Switch>
        <Route exact path="/" render={() => <Home name={'Root!'} />} />
        <Route path="/test" render={() => <Test name={'Test!'} />} />
        {/* <Route
          path="/project"
          render={() => <div>hihi<div>}
        />
          <Route component={() => <div>nomatch</div>} /> */}
      </Switch>
    </div>
  </div>
);

export default App;
