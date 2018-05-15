import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Layout from './components/layout';
import Reactotron from 'reactotron-react-js';

class App extends Component {
  constructor(props) {
    super(props);
    Reactotron.log('hello rendering world');

    // this.state = { rows: [<p key="1"> this is my row</p>,<p key="2"> this is my row</p>]}
  }

  render() {
    return (
      <div className="App">
        <Layout />
        {/* {this.state.rows} */}
      </div>
    );
  }
}

export default App;
