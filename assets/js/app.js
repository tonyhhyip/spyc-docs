//@flow
'use strict';
import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import Main from './pages/Main.jsx';

const app = (
  <Router history={hashHistory}>
    <Route path='*' component={Main}/>
  </Router>
);

ReactDom.render(app, document.getElementById('react-root'));