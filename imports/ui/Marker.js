import React, { Component } from 'react';
import classnames from 'classnames';

export default class extends Component {
  render() {
    const { degree, radius, label, type = 'solid' } = this.props;
    return (
      <div
        className={classnames('marker', type)}
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
