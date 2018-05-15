import React, { Component } from 'react';
import Navigation from './navbar';

class Layout extends React.Component {
  constructor() {
    super();
    const layoutStyle = {
      margin: 20,
      padding: 20,
      border: '1px solid #DDD'
    };
  }

  render() {
    return (
      <div style={this.layoutStyle}>
        <Navigation />

        {/* {props.children} */}
      </div>
    );
  }
}

export default Layout;
