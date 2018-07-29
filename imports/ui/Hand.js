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
            type == 'seconds'
              ? 'translate(-2px, -50%)'
              : 'translate(-14px, -50%)',
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
        {label}
      </div>
    );
  }
}
