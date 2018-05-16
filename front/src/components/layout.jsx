import React, { Component } from 'react';
import Navigation from './navbar';
import HeadlineStats from './headlineStats';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import VerticalTab from './verticalTab';
import Chart from './chart';
import Reactotron from 'reactotron-react-js';

import PropTypes from 'prop-types';

class Layout extends React.Component {
  constructor(props) {
    super(props);
    const layoutStyle = {
      // margin: 20,
      padding: 20,
      border: '1px solid #DDD'
    };

    this.state = {
      simbol: props.simbol,
      fiat: props.fiat
    };
    Reactotron.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <div style={this.layoutStyle}>
          <Navigation />
          <HeadlineStats />
          <Grid>
            <Row className="show-grid">
              <Col xs={6} md={3} className="sidebar">
                <h6>ULTIMOS TRADES</h6>
                <Table striped bordered condensed hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td colSpan="2">Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>

              <Col className="trade-container">
                <Chart />
              </Col>
              <Col className="tab-container">
                <VerticalTab />
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Layout;
