import React, { Component } from 'react';
import moment from 'moment-timezone';
import classnames from 'classnames';

class Hand extends Component {
  render() {
    const { degree, length, label, tertiary, type, height } = this.props;

    return (
      <div
        className={classnames(['hand', type])}
        style={{
          width: length,
          height: height,
          borderRadius: height,
          transform: `translate(-${height / 2}px, -50%) rotate(${degree -
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

    this.getDegree = () => {
      const tz = moment().tz(timezone);

      if (interval === 'seconds') {
        return (360 * tz.seconds()) / 60;
      } else if (interval === 'minutes') {
        return (360 * tz.minutes()) / 60;
      } else {
        // interval === 'hours'
        const tocks = 24 * 60;
        const theta = 60 * tz.hours() + tz.minutes();
        return 360 * (theta / tocks) + 180; // + 180 because the clock us "upside down", midnight is 180 not 0
      }
    };

    this.state = {
      degree: this.getDegree()
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
    const { length, height, label, type, timezone } = this.props;
    const { degree } = this.state;

    const tz = moment().tz(timezone);
    const d = new Date();
    const samesame = tz && tz.hours() === d.getHours();

    const offset = tz && tz.utcOffset() / 60;

    return (
      <Hand
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
