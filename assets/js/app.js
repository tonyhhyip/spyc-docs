//@flow
'use strict';

require('promise-polyfill');
require('whatwg-fetch');

import React from 'react';
import ReactDom from 'react-dom';

import Main from './pages/Main.jsx';

const app = <Main />;

ReactDom.render(app, document.getElementById('react-root'));