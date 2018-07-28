import React, { Component } from 'react';
import classnames from 'classnames';

import Ring from './Ring';
import Tick from './Tick';
import TickingMarker from './TickingMarker';
import TickingHourHand from './TickingHourHand';
import TickingSecondsHand from './TickingSecondsHand';

export default class extends Component {
  rings = 2;

  ticks = [
    { tick: '01' },
    { tick: '02' },
    { tick: '03' },
    { tick: '04' },
    { tick: '05' },
    { tick: '06', shade: 'light', label: 'Dusk' },
    { tick: '07', shade: 'light' },
    { tick: '08', shade: 'dark' },
    { tick: '09', shade: 'dark' },
    { tick: '10', shade: 'dark' },
    { tick: '11', shade: 'dark' },
    { tick: '12', shade: 'dark', label: 'Midnight' },
    { tick: '01', shade: 'dark' },
    { tick: '02', shade: 'dark' },
    { tick: '03', shade: 'dark' },
    { tick: '04', shade: 'dark' },
    { tick: '05', shade: 'dark' },
    { tick: '06', shade: 'light', label: 'Dawn', flip: true },
    { tick: '07', shade: 'light' },
    { tick: '08' },
    { tick: '09' },
    { tick: '10' },
    { tick: '11' },
    { tick: '12', label: 'Noon' }
  ];

  seconds = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];

  render() {
    const { size } = this.props;

    return (
      <div className="clock" style={{ width: size, height: size }}>
        <div className="rings">
          {Array(this.rings)
            .fill(0)
            .map((r, i) => (
              <Ring key={i} index={i} size={size} rings={this.rings} />
            ))}
        </div>

        <div className="hours ticks">
          {this.ticks.map(({ tick, shade, label, flip }, i) => {
            const deg = ((i + 1) * 360) / this.ticks.length;
            return (
              <Tick
                slice={360 / this.ticks.length}
                indent={35}
                key={deg}
                radius={size / 2}
                degree={deg}
                tick={tick}
                shade={shade}
                label={label}
                flip={flip}
              />
            );
          })}
        </div>

        <div className="seconds ticks">
          {this.seconds.map((s, i) => {
            const deg = ((i + 1) * 360) / this.seconds.length;
            return <Tick key={i} radius={size / 6} degree={deg} tick={s} />;
          })}
        </div>

        <div className="hands">
          <TickingMarker length={size / 2} />

          <TickingHourHand label="San Francisco" timezone="US/Pacific" />
          <TickingHourHand label="Helsinki" timezone="Europe/Helsinki" />
          <TickingHourHand label="Bangkok" timezone="Asia/Bangkok" />
          <TickingHourHand label="East Coast" timezone="US/Eastern" />
          <TickingHourHand
            label="Aguascalientes"
            timezone="America/Mexico_City"
          />
          <TickingHourHand label="Lagos" timezone="Africa/Lagos" />
          <TickingHourHand label="Melbourne" timezone="Australia/Melbourne" />
          <TickingHourHand label="Amsterdom" timezone="Europe/Oslo" />

          <TickingSecondsHand length={size / 6 - 10} />
        </div>
      </div>
    );
  }
}
