import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Layout from './components/layout';
import Reactotron from 'reactotron-react-js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/store';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </div>
      </Router>
    );
  }
}

// first our route components
const Main = ({ match }) => (
  <div className="App">
    <Provider store={store}>
      <Layout simbol={match.params.simbol} fiat={match.params.fiat} />
    </Provider>
  </div>
);

////////////////////////////////////////////////////////////
// then our route config
const routes = [
  {
    path: '/:operation/:id/:simbol/:fiat',
    component: Main
  }
  // ,
  // {
  //   path: "/Tacos",
  //   component: Tacos,
  //   routes: [
  //     {
  //       path: "/tacos/bus",
  //       component: Bus
  //     },
  //     {
  //       path: "/tacos/cart",
  //       component: Cart
  //     }
  //   ]
  // }
];

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);

const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
);

const ComponentWithRegex = ({ match }) => (
  <div>
    <h3>Only asc/desc are allowed: {match.params.direction}</h3>
  </div>
);

export default App;
