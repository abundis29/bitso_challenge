import React, { Component } from 'react';

class NightSwitch extends Component {
  render() {
    return (
      <div className="elementNav">
        <div className="onoffswitch">
          <input
            type="checkbox"
            name="onoffswitch"
            className="onoffswitch-checkbox"
            id="myonoffswitch"
          />
          <label className="onoffswitch-label" htmlFor="myonoffswitch">
            <span className="onoffswitch-inner" />
            <span className="onoffswitch-switch" />
          </label>
        </div>
      </div>
    );
  }
}
export default NightSwitch;
