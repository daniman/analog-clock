import React, { Component } from 'react';

export default class extends Component {
  render() {
    const { degree, radius, labelTop, labelBottom } = this.props;
    return (
      <div
        className="marker"
        style={{
          width: radius,
          transform: `rotate(${degree - 90}deg)`
        }}
      >
        <div className="labels">
          <div className="top">{labelTop}</div>
          <div className="bottom">{labelBottom}</div>
        </div>
      </div>
    );
  }
}
