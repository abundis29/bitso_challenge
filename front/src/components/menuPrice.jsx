import React, { Component } from 'react';
import { MenuItem, NavDropdown } from 'react-bootstrap';
import { create } from 'apisauce';

class MenuPrice extends React.Component {
  constructor(props) {
    super(props);
    var MenuItems = [];
    this.state = {
      title: '',
      item: MenuItems,
      data: []
    };

    fetch('https://api.bitso.com/v3/ticker/').then(response => {
      // console.log(response.json());
      var i = -1;
      response.json().then(data => {
        console.log(data.payload[0].book);
        this.state.title = data.payload[0].book;
        this.state.data = data.payload;
        this.getName();
        // this.setState = { data: data.payload, title: data.payload[0]}
        this.state.data.forEach(element => {
          console.log(element.name);
          i += 1;
          const menuItem = (
            <MenuItem
              key={i}
              eventKey={i}
              onClick={this.change.bind(this, i)}
              value={element.book}
            >
              {element.book} = {element.last}
            </MenuItem>
          );
          MenuItems.push(menuItem);
          // console.log(menuItem);
          this.setState = { item: MenuItems };
        });

        console.log(this.state);
      });
    });
  }
  change(ev, i) {
    console.log(ev, i.currentTarget);
    this.setState = { title: i.currentTarget };
  }
  componentWillMount() {}
  getName() {
    console.log(this.state.title);

    if (this.state.title != '') {
      return this.state.title;
    }
    return 'hola que';
  }

  render() {
    return (
      <NavDropdown title={this.getName()} id="basic-nav-dropdown">
        <div>{this.state.item}</div>
      </NavDropdown>
    );
  }
}

export default MenuPrice;
