import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import './index.css';
import { store, history} from './store';

import { Route, Router } from 'react-router-dom';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
), document.getElementById('root'));

registerServiceWorker();
