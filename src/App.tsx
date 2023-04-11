import React from 'react';
import './i18n/i18n';
import { Provider } from 'react-redux';
import { store } from './state/store';
import Routing from './routing';

const App = () => {

  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
};

export default App;
