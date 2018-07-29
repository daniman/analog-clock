import React, { Component } from 'react';
import moment from 'moment-timezone';

import Hand from './Hand';

export default class extends Component {
  constructor(props, context) {
    super(props, context);

    this.getDegree = () => {
      const tz = moment().tz(props.timezone);

      const tocks = 24 * 60;
      const theta = 60 * tz.hours() + tz.minutes();

      return 360 * (theta / tocks) + 180; // + 180 because the clock us "upside down", midnight is 180 not 0
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
    const { label, timezone, accent = false } = this.props;
    const { degree } = this.state;
    const tz = moment().tz(timezone);
    const d = new Date();

    return (
      <Hand
        accent={tz.hours() === d.getHours()}
        length={200}
        degree={degree}
        label={label}
        tertiary={tz.utcOffset() / 60}
      />
    );
  }
}
