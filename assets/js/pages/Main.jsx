//@flow
'use strict';
import React from 'react';
import {ThemeProvider} from 'react-css-themr';
import App from './App.jsx';
import theme from '../theme/theme';

export default function Main() {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
};

