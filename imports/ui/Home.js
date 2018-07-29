import React, { Component } from 'react';
import classnames from 'classnames';

import Clock from './Clock';

export default class extends Component {
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
          <div
            className="patch light"
            onClick={() => {
              this.setColor('light');
            }}
          />
          <div
            className="patch dark"
            onClick={() => {
              this.setColor('dark');
            }}
          />
        </div>
      </div>
    );
  }
}
