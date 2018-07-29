import React, { Component } from 'react';
import classnames from 'classnames';

import Clock from './Clock';

class Patch extends Component {
  render() {
    const lscolor = localStorage.getItem('apollo:clock');
    const { color, cb } = this.props;
    return (
      <div
        className={classnames(['patch', color])}
        onClick={() => {
          cb(color);
        }}
      >
        {color === lscolor ? <span className="check">✓</span> : null}
      </div>
    );
  }
}

export default class extends Component {
  constructor(props) {
    super(props);
    this.setColor = this.setColor.bind(this);
  }

  setColor(color) {
    localStorage.setItem('apollo:clock', color);
    this.forceUpdate();
  }

  render() {
    const color = localStorage.getItem('apollo:clock');

    return (
      <div className={classnames('home', color || 'light')}>
        <Clock size={650} />
        <div className="signature">
          <a href="https://github.com/daniman/analog-clock" target="_blank">
            Made with ♥ for the Apollo team
          </a>
        </div>
        <div className="patches">
          <Patch color="lightest" cb={this.setColor} />
          <Patch color="lighter" cb={this.setColor} />
          <Patch color="light" cb={this.setColor} />
          <Patch color="mediumlight" cb={this.setColor} />
          <Patch color="medium" cb={this.setColor} />
          <Patch color="mediumdark" cb={this.setColor} />
          <Patch color="dark" cb={this.setColor} />
          <Patch color="darker" cb={this.setColor} />
          <Patch color="darkest" cb={this.setColor} />
        </div>
      </div>
    );
  }
}
