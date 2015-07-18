import React, { Component } from 'react';
import Root from './Root.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from '../reducers';

const store = createStore(reducers);

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        {() => <Root /> }
      </Provider>
    );
  }
}
