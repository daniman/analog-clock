import React, { Component } from 'react';

import Hand from './Hand';

export default class extends Component {
  constructor(props, context) {
    super(props, context);

    const d = new Date();
    this.state = {
      minutes: d.getMinutes()
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const d = new Date();
      this.setState({ minutes: d.getMinutes() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { length } = this.props;
    const { minutes } = this.state;

    return (
      <Hand degree={(360 * minutes) / 60} length={length} type="minutes" />
    );
  }
}
