import React from 'react';
import ReactDOM from 'react-dom';
import ListPosts from './Containers/ListPosts';
import registerServiceWorker from './registerServiceWorker';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './Reducers/index';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Containers/Login';
import CreateAccount from './Containers/CreateAccount';
import LoadingComponent from './Containers/LoadingComponent';
import AuthenticatedComponent from './Containers/AuthenticatedComponent';
import PostDetail from './Containers/PostDetail';

import { composeWithDevTools } from 'redux-devtools-extension';

// import ListUsers from './Containers/ListUsers';
// const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const createStoreWithMiddleware = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk),
));
ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <BrowserRouter>
      <LoadingComponent>
        <Switch>
          <Route path="/CreateAccount" component={CreateAccount}/>
          <Route path="/Login" component={Login}/>
          {/* <Route exact path="/" component={Login}/> */}
          <AuthenticatedComponent>
            <Route path="/:id" component={PostDetail}/>
            <Route exact path="/" component={ListPosts}/>
          </AuthenticatedComponent>
        </Switch>
      </LoadingComponent>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
