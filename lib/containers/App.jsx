import React from 'react';
import Root from './Root.jsx';
import { createStore } from 'redux';
import { Provider } from 'redux/react';
import * as reducers from '../reducers';

const store = createStore(reducers);

export default class App {
  render () {
    return (
      <Provider store={store}>
        {() => <Root /> }
      </Provider>
    );
  }
}
