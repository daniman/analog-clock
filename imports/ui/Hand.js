import React, { Component } from 'react';
import classnames from 'classnames';

export default class extends Component {
  render() {
    const { degree, length, label, tertiary, type, accent } = this.props;

    return (
      <div
        className={classnames(['hand', type, { accent }])}
        style={{
          width: length,
          transform: classnames([
            {
              'translate(-2px, -50%)': type === 'seconds',
              'translate(-4px, -50%)': type === 'minutes',
              'translate(-14px, -50%)': type !== 'seconds' && type !== 'minutes'
            },
            `rotate(${degree - 90}deg)`
          ])
        }}
      >
        {tertiary && (
          <i>
            UTC {tertiary > 0 && '+'}
            {tertiary}
          </i>
        )}
        <span>{label}</span>
      </div>
    );
  }
}
