import React, { Component } from 'react';
import moment from 'moment';
import classnames from 'classnames';

class Marker extends Component {
  render() {
    const { degree, radius, label, type = 'solid', flip } = this.props;
    return (
      <div
        className={classnames('marker', { flip })}
        style={{
          width: radius,
          transform: `rotate(${degree - 90}deg)`,
          borderTopStyle: type
        }}
      >
        <div className="labels">{label}</div>
      </div>
    );
  }
}

export default class extends Component {
  constructor(props, context) {
    super(props, context);
    const { timezone, opposite = false } = props;

    this.getDegree = () => {
      const tz = moment().tz(timezone);
      const tocks = 24 * 60;
      const theta = 60 * tz.hours() + tz.minutes();
      return 360 * (theta / tocks) + (opposite ? 0 : 180);
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
    const { length, label, type = '' } = this.props;
    const { degree } = this.state;

    return (
      <Marker
        radius={length}
        degree={degree}
        label={label}
        type={type}
        flip={degree % 360 > 0 && degree % 360 <= 180 ? false : true}
      />
    );
  }
}
