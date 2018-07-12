import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { enthusiasm } from './reducers/index';
import { IStoreState } from './types/index';
import { EnthusiasmAction } from './actions/index';
import Hello from './containers/Hello';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore<IStoreState, EnthusiasmAction, any, any>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'Typescript',
});

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
