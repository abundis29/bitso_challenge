import React, { Component } from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import AmCharts from '@amcharts/amcharts3-react';

function generateData() {
  var firstDate = new Date();

  var dataProvider = [];

  for (var i = 0; i < 100; ++i) {
    var date = new Date(firstDate.getTime());

    date.setDate(i);

    dataProvider.push({
      date: date,
      value: Math.floor(Math.random() * 100)
    });
  }

  return dataProvider;
}

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataProvider: generateData(),
      timer: null
    };
  }

  componentDidMount() {
    this.setState({
      // Update the chart dataProvider every 3 seconds
      timer: setInterval(() => {
        this.setState({
          dataProvider: generateData()
        });
      }, 3000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  render() {
    const config = {
      type: 'serial',
      theme: 'light',
      marginRight: 40,
      marginLeft: 40,
      autoMarginOffset: 20,
      mouseWheelZoomEnabled: true,
      valueAxes: [
        {
          id: 'v1',
          axisAlpha: 0,
          position: 'left',
          ignoreAxisWidth: true
        }
      ],
      balloon: {
        borderThickness: 1,
        shadowAlpha: 0
      },
      graphs: [
        {
          id: 'g1',
          balloon: {
            drop: true,
            adjustBorderColor: false,
            color: '#ffffff'
          },
          bullet: 'round',
          bulletBorderAlpha: 1,
          bulletColor: '#FFFFFF',
          bulletSize: 5,
          hideBulletsCount: 50,
          lineThickness: 2,
          title: 'red line',
          useLineColorForBulletBorder: true,
          valueField: 'value',
          balloonText: "<span style='font-size:18px;'>[[value]]</span>"
        }
      ],
      chartScrollbar: {
        graph: 'g1',
        oppositeAxis: false,
        offset: 30,
        scrollbarHeight: 80,
        backgroundAlpha: 0,
        selectedBackgroundAlpha: 0.1,
        selectedBackgroundColor: '#888888',
        graphFillAlpha: 0,
        graphLineAlpha: 0.5,
        selectedGraphFillAlpha: 0,
        selectedGraphLineAlpha: 1,
        autoGridCount: true,
        color: '#AAAAAA'
      },
      chartCursor: {
        pan: true,
        valueLineEnabled: true,
        valueLineBalloonEnabled: true,
        cursorAlpha: 1,
        cursorColor: '#258cbb',
        limitToGraph: 'g1',
        valueLineAlpha: 0.2,
        valueZoomable: true
      },
      valueScrollbar: {
        oppositeAxis: false,
        offset: 50,
        scrollbarHeight: 10
      },
      categoryField: 'date',
      categoryAxis: {
        parseDates: true,
        dashLength: 1,
        minorGridEnabled: true
      },
      dataProvider: this.state.dataProvider
    };
    return (
      <Grid className="chart">
        <Row className="no-padding">
          <Col xs={1} md={12} mdOffset={0} className="chart-">
            <h6 className="clearType">CHART</h6>
            <AmCharts.React
              style={{ width: '100%', height: '500px' }}
              options={config}
            />
          </Col>
        </Row>
        <Row className="no-padding">
          <Col xs={1} md={6} mdOffset={0} className="chart-">
            <h6 className="clearType">POSTURAS DE COMPRA</h6>
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
          <Col xs={1} md={6} mdOffset={0} className="chart-">
            <h6 className="clearType">POSTURAS DE VENTA</h6>
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
        </Row>
      </Grid>
    );
  }
}
export default Chart;
