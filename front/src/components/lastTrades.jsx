import React, { Component } from 'react';
import { Grid, Row, Col, Table, NavDropdown } from 'react-bootstrap';
import { create } from 'apisauce';

// define the api
const api = create({
  baseURL: 'https://api.bitso.com/v3/',
  headers: { Accept: 'application/json' }
});

export default class LastTrades extends Component {
  Items = [];
  constructor(props) {
    super(props);

    this.state = {
      simbol: 'btc',
      fiat: 'mxn',
      trades: [],
      rows: this.Items
    };

    console.log(this.state);

    api
      .get('trades?book=btc_mxn')
      .then(response => {
        this.state.trades = response.data.payload;
        this.state.trades.forEach(item => {
          console.log(item.amount);

          // this.state.rows.push(<tr amount={item.amount} />)
          this.Items.push(
            <tr>
              <td>{item.amount}</td>
            </tr>
          );
        });
        console.log(this.state.rows);
        this.setState = { items: this.Items };
      })
      .then(console.log, 'hjkl');
  }

  render() {
    return (
      <Col xs={6} md={3} className="sidebar">
        <NavDropdown>
          <div>{this.state.item}</div>
        </NavDropdown>
        <h6>ULTIMOS TRADES</h6>
        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>Precio</th>
              <th>Monto</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.state.rows}</td>
            </tr>
            {this.state.rows}
          </tbody>
        </Table>
      </Col>
    );
  }
}
