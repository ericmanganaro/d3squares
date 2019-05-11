import React, { Component } from "react";
import Swatch from "./Swatch";
import * as d3 from "d3";

class Colors extends Component {
  colors = d3.schemeCategory20;
  width = d3.scaleBand();
  height = d3.scaleLinear();

  componentWillMount() {
    this.updateD3(this.props);
  }

  componentWillUpdate(newProps) {
    this.updateD3(newProps);
  }

  updateD3(props) {
    this.width.domain(props.data).range([0, props.width]);
    this.height.domain(d3.extent(props.data)).range([0, props.height]);
  }

  render() {
    const { data, height, x = 0, y = 0 } = this.props;
    return (
      <g transform={`translate(${x},${y})`}>
        {data.map(i => (
          <Swatch
            color={this.colors[i]}
            width={this.width.step()}
            height={this.height(i)}
            x={this.width(i)}
            y={height - this.height(i)}
          />
        ))}
      </g>
    );
  }
}

export default Colors;
