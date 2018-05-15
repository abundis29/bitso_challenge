import React from 'react';
import { Navbar, NavItem, Nav, MenuItem, NavDropdown } from 'react-bootstrap';
import Logo from './logo';
import MenuPrice from './menuPrice';
import Avatar from './avatar';
import NightSwitch from './nightSwitch';

class Navigation extends React.Component {
  constructor() {
    super();
    const layoutStyle = {
      marginTop: 20,
      fontSize: 20,
      border: '1px solid #DDD'
    };
  }

  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Text className="navText">| EXCHANGE</Navbar.Text>

          <Nav pullRight>
            <MenuPrice />
            <NavDropdown eventKey={3} title="Wallet" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>

            <NavDropdown eventKey={3} title="Exchange" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>

            <NavItem eventKey={1} href="#">
              Ayuda
            </NavItem>

            {/* <Avatar /> */}
            <NavDropdown eventKey={3} title="Usario" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>

            <NightSwitch />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
