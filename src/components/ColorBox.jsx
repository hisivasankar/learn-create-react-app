import React, {Component} from 'react';

export function getSizeText(x, y) {
    return `${x}x${y}`;
  }
  
export default class ColorBox extends Component {
    render() {
        let style = {
            backgroundColor: this.props.color,
            width: `${this.props.width}px`,
            height: `${this.props.height}px`
        }, sText = getSizeText(this.props.width, this.props.height);
        return (<div style={style}>{sText}</div>);
    }
}
  