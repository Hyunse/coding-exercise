import React, { Component } from 'react';
import './Palette.css';

class Palette extends Component {
  render() {
    const { colors, onSelectColor } = this.props;

    return (
      <div className="palette-item-list">
        {colors.map((color) => {
          return (
            <div
              className="palette-item"
              key={color}
              style={{ background: color }}
              onClick={() => onSelectColor(color)}
            />
          );
        })}
      </div>
    );
  }
}

export default Palette;
