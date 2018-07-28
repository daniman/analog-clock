import React, { Component } from 'react';

import Hand from './Hand';

export default class extends Component {
  constructor(props, context) {
    super(props, context);

    const d = new Date();
    this.state = {
      seconds: d.getSeconds()
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const d = new Date();
      this.setState({ seconds: d.getSeconds() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { length } = this.props;
    const { seconds } = this.state;

    return (
      <Hand degree={(360 * seconds) / 60} length={length} type="seconds" />
    );
  }
}
