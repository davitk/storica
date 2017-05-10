import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './components/app';
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Products from './containers/products'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);



ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={browserHistory}>
          <Route   path="/" component={App}>
              <IndexRoute   component={Home}/>
              <Route   path="about" component={About}/>
              <Route   path="products" component={Products}/>
              <Route   path="contact" component={Contact}/>
          </Route>
      </Router>
  </Provider>
  , document.querySelector('.all-content-wrapper'));
