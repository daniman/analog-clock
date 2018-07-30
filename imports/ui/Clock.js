import React, { Component } from 'react';

import Ring from './Ring';
import Tick from './Tick';
import TickingMarker from './TickingMarker';
import TickingHand from './TickingHand';

import config from '../config';

export default class extends Component {
  render() {
    const { size } = this.props;

    return (
      <div className="clock" style={{ width: size, height: size }}>
        <div className="center">
          {config.ticks.map(({ value, shade, label, flip }, i) => {
            const deg = ((i + 1) * 360) / config.ticks.length;
            return (
              <Tick
                className="hours"
                slice={360 / config.ticks.length}
                indent={35}
                key={deg}
                radius={size / 2}
                degree={deg}
                value={value}
                shade={shade}
                label={label}
                flip={flip}
                line={true}
              />
            );
          })}

          {Array(config.rings)
            .fill(0)
            .map((r, i) => (
              <Ring key={i} index={i} size={size} rings={config.rings} />
            ))}

          {config.seconds.map((s, i) => {
            const deg = ((i + 1) * 360) / config.seconds.length;
            return (
              <Tick
                className="seconds"
                key={i}
                radius={size / 6}
                degree={deg}
                value={s}
              />
            );
          })}

          {config.markers.map(({ label, timezone, opposite, type }) => (
            <TickingMarker
              length={size / 2}
              key={label}
              label={label}
              timezone={timezone}
              type={type}
              opposite={opposite}
            />
          ))}

          {config.hands.map(({ label, timezone }) => (
            <TickingHand
              height={28}
              length={220}
              key={timezone}
              label={label}
              timezone={timezone}
            />
          ))}

          <TickingHand
            height={8}
            length={size / 8}
            interval="minutes"
            type="ticker"
          />

          <TickingHand
            height={4}
            length={size / 6 - 10}
            interval="seconds"
            type="ticker"
          />

          <div className="fulcrum" />
        </div>
      </div>
    );
  }
}
