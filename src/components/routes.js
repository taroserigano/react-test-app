

import React from 'react';
import { Route, IndexRoute } from 'react-router';

/**
 * Import all page components here
 */
import App from './components/App';
import Content from './components/Content';
import Content2 from './components/Content2';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route.
 */
export default (
  <Route path="/" component={App}>
    <IndexRoute component={Content} />
    <Route path="/Content2" component={Content1} />
  </Route>
);