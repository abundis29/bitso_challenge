import React, { Component } from 'react';

class VerticalTab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabName: 'MERCADOS'
    };
  }

  getInitialState() {
    return { showHideSidenav: 'hidden' };
  }

  toggleSidenav() {
    console.log('ok');
    var css = this.props.showHideSidenav === 'hidden' ? 'show' : 'hidden';
    this.setState({ showHideSidenav: css });
  }
  render() {
    return (
      <div className="vertical-tab clickable">
        <i
          className="fas fa-chevron-right clearType tab-chevron"
          onClick={this.toggleSidenav.bind(this)}
        />
        <p className="rotateX clearType">{this.state.tabName}</p>
      </div>
    );
  }
}
export default VerticalTab;
