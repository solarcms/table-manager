/**
 * Created by n0m4dz on 1/6/16.
 */
require('../scss/app.scss')

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './router'

import createStore from './lib/createStore';
const store = createStore();

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);






