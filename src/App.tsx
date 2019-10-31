import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Header from '@pages/header/Header';
import Home from '@pages/Home';

interface Props {}

const App: React.FC<Props> = () => (
  <div>
    <Header />
    <div>
      <Switch>
        <Route exact path="/" render={() => <Home name={'Root'} />} />
        <Route path="/home" render={() => <Home name={'Home'} />} />
        {/* <Route
          path="/project"
          render={() => <div>hihi<div>}
        />
          <Route component={() => <div>nomatch</div>} /> */}
      </Switch>
    </div>
  </div>
);

export default withRouter(App);
