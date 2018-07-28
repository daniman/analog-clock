import React, { Component } from 'react';

export default class extends Component {
  render() {
    const { degree, radius, label, labelBottom } = this.props;
    return (
      <div
        className="marker"
        style={{
          width: radius,
          transform: `rotate(${degree - 90}deg)`
        }}
      >
        <div className="labels">{label}</div>
      </div>
    );
  }
}
