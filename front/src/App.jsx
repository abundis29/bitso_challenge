import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Layout from './components/layout';


class App extends Component {
  constructor (props){
    super(props)
    console.log("this is my init")
    const trades = [
      {id:0, time:"0", btc_amount:""},
      {id:2, time:"0", btc_amount:""}
    ]
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
