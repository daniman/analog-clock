import React, { Component } from 'react';
import classnames from 'classnames';

export default class extends Component {
  render() {
    const {
      className,
      radius = 0,
      indent = 0,
      degree = 0,
      line = false,
      value,
      slice,
      shade,
      label,
      flip
    } = this.props;
    const torad = angle => angle * (Math.PI / 180);

    return (
      <div className={classnames(className, 'tick')}>
        {shade && (
          <div
            className="slice"
            style={{ transform: `rotate(${degree - 90}deg)` }}
          >
            <div
              className={classnames(['bg', shade])}
              style={{
                color: 'orange',
                borderRightWidth: radius,
                borderBottomWidth: Math.abs(
                  radius * Math.tan(torad(180 - slice))
                )
              }}
            />
          </div>
        )}
        {line && (
          <div
            className="line"
            style={{ width: radius, transform: `rotate(${degree - 90}deg)` }}
          >
            <div className={classnames(['label', { flip }])}>{label}</div>
          </div>
        )}
        {value && (
          <div
            className="value"
            style={{
              left: (radius - indent) * Math.sin(torad(180 - degree)),
              top: (radius - indent) * Math.cos(torad(180 - degree))
            }}
          >
            {value}
          </div>
        )}
      </div>
    );
  }
}
