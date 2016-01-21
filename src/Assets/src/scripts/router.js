/**
 * Created by n0m4dz on 1/10/16.
 */
import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom'
import history from 'history'
import {browserHistory, Router, Route, Link, IndexRoute} from 'react-router'
import TableContainer from './containers/TableContainer'
import FieldContainer from './containers/FieldContainer'

export default () => {
    return (
        <Router history={browserHistory}>
            <Route path="/" component={TableContainer}/>
            <Route path="/table/:name" component={FieldContainer}/>
        </Router>
    )
}


