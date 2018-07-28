import React, { Component } from 'react';
import classnames from 'classnames';

import Ring from './Ring';
import Tick from './Tick';
import Hand from './Hand';
import Marker from './Marker';

export default class extends Component {
  rings = 2;

  ticks = [
    { tick: '13' },
    { tick: '14' },
    { tick: '15' },
    { tick: '16' },
    { tick: '17' },
    { tick: '18', shade: 'light', label: 'Dusk' },
    { tick: '19', shade: 'light' },
    { tick: '20', shade: 'dark' },
    { tick: '21', shade: 'dark' },
    { tick: '22', shade: 'dark' },
    { tick: '23', shade: 'dark' },
    { tick: '24', shade: 'dark', label: 'Midnight' },
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
          <Marker
            radius={size / 2}
            degree={340}
            labelTop="Greenwich Mountain Time"
            labelBottom="July 28 ↓"
          />

          <Hand degree={45} length={200} label="San Francisco" />
          <Hand degree={0} length={200} label="East Coast" />
          <Hand degree={180} length={200} label="Helsinki & Lagos" />
          <Hand degree={195} length={200} label="Melbourne" />

          <Hand degree={90} length={size / 6 - 10} type="seconds" />
        </div>
      </div>
    );
  }
}
