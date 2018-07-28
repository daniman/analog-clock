import React, { Component } from 'react';

export default class extends Component {
  render() {
    const { size, rings, index } = this.props;
    const width = size / (rings + 1);
    return (
      <div
        key={index}
        className="ring"
        style={{
          width: size - width * (index + 1),
          height: size - width * (index + 1)
        }}
      />
    );
  }
}
