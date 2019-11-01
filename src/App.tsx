import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import Header from '~pages/header/Header';
import Home from '~pages/Home';
import Test from '~pages/Test';
import { IProps } from './types';

const App: React.FC<IProps> = props => {
  console.log(props);
  return (
    <div>
      <Header />
      <div>
        <Switch>
          <Route exact path="/" render={() => <Home name={'Root!'} />} />
          <Route path="/test" render={() => <Test name={'Test!'} />} />
          <Redirect path="*" to="/" />
        </Switch>
      </div>
    </div>
  );
};

export default withRouter(App);
