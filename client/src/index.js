
import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './containers/App'
import Theme from './components/theme/base/Theme'
import {BrowserRouter as Router} from 'react-router-dom'

import { ThemeProvider } from 'styled-components';

import './index.css'

import { theme } from './components/theme/base/theme-settings';
import { Provider } from 'react-redux';
import store from './store'


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Router>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Theme layout={<App/>}/>
        </ThemeProvider>
      </Provider>
    </Router>
)