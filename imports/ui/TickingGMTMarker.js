import React, { Component } from 'react';
import moment from 'moment';

import Marker from './Marker';

export default class extends Component {
  constructor(props, context) {
    super(props, context);

    this.getDegree = () => {
      const utc = moment.utc(moment());
      const tocks = 24 * 60;
      const theta = 60 * utc.hours() + utc.minutes();
      return 360 * (theta / tocks) + 180;
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
    const { length } = this.props;
    const { degree } = this.state;

    return (
      <Marker radius={length} degree={degree} label="Greenwich Mean Time" />
    );
  }
}
