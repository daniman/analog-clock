import React, { Component } from 'react';
import classnames from 'classnames';

export default class extends Component {
  render() {
    const { degree, length, label, type } = this.props;
    return (
      <div
        className={classnames(['hand', type])}
        style={{
          width: length,
          transform: classnames([
            type == 'seconds'
              ? 'translate(-2px, -50%)'
              : 'translate(-14px, -50%)',
            `rotate(${degree - 90}deg)`
          ])
        }}
      >
        {label}
      </div>
    );
  }
}
