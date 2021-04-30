import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Content from './Content';

import Content2 from './Content2';


const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}

      <Route exact path='/learn' component={Content2}>This is second</Route>
    </Switch>
  );
}

export default Main;