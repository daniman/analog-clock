import React, { Component } from 'react';
import classnames from 'classnames';

export default class extends Component {
  render() {
    const {
      radius = 0,
      indent = 0,
      degree = 0,
      tick,
      slice,
      shade,
      label,
      flip
    } = this.props;
    const torad = angle => angle * (Math.PI / 180);

    return (
      <div className="tock">
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
        <div
          className="line"
          style={{ width: radius, transform: `rotate(${degree - 90}deg)` }}
        >
          <div className={classnames(['label', { flip }])}>{label}</div>
        </div>
        <div
          className="tick"
          style={{
            left: (radius - indent) * Math.sin(torad(180 - degree)),
            top: (radius - indent) * Math.cos(torad(180 - degree))
          }}
        >
          {tick}
        </div>
      </div>
    );
  }
}
