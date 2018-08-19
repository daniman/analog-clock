import React, { Component } from 'react';
import moment from 'moment-timezone';
import classnames from 'classnames';

class Hand extends Component {
  render() {
    const {
      degree,
      length,
      label,
      tertiary,
      type,
      height,
      interval
    } = this.props;

    return (
      <div
        className={classnames(['hand', type, interval])}
        style={{
          width: length,
          height: height,
          borderRadius: height,
          transform: `translate(-${height / 2}px, -50%) rotateZ(${degree -
            90}deg)`,
          transformOrigin: `${height / 2}px 50%`
        }}
      >
        {tertiary && <i>{tertiary}</i>}
        {label && <span>{label}</span>}
      </div>
    );
  }
}

export default class extends Component {
  constructor(props, context) {
    super(props, context);
    const { interval, timezone = 'Etc/GMT-0' } = props;

    /**
     * Called every second to calculate the proper degree for the hand.
     * We call every second even on minute and hour hands so their positions
     * are accurate to the second.
     */
    this.getDegree = () => {
      const tz = moment().tz(timezone);
      const { degree } = this.state || {};

      if (interval === 'seconds') {
        return degree + 360 / 60;
      } else if (interval === 'minutes') {
        return ((tz.minutes() + tz.seconds() / 60) / 60) * 360;
      } else {
        const theta = 60 * tz.hours() + tz.minutes() + tz.seconds() / 60;
        const tocks = 24 * 60;
        return 360 * (theta / tocks) + 180; // + 180 because the clock us "upside down", midnight is 180 not 0
      }
    };

    const tz = moment().tz(timezone);
    this.state = {
      degree:
        interval === 'seconds' ? 360 * (tz.seconds() / 60) : this.getDegree()
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ degree: this.getDegree() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { length, height, label, type, timezone, interval } = this.props;
    const { degree } = this.state;

    const tz = moment().tz(timezone);
    const d = new Date();
    const samesame = tz && tz.hours() === d.getHours();

    const offset = tz && tz.utcOffset() / 60;

    return (
      <Hand
        interval={interval}
        degree={degree}
        length={length}
        type={type || (samesame && 'accent')}
        height={height}
        label={label}
        tertiary={tz && `UTC ${offset > 0 ? '+' : '-'}${Math.abs(offset)}`}
      />
    );
  }
}
