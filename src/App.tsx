import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import { IProps } from './types';

import Header from '~pages/header/Header';
import Home from '~pages/Home';
import Sample from '~/pages/Sample';

const App: React.FC<IProps> = () => {
  return (
    <div>
      <Header />
      <div>
        <Switch>
          <Route exact path="/" render={() => <Home name="Root!" />} />
          <Route path="/test" render={() => <Sample name="Test!" />} />
          <Redirect path="*" to="/" />
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(App);
