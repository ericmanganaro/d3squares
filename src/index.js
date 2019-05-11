import React from "react";
import { render } from "react-dom";
import * as d3 from "d3";

import Colors from "./Colors";

let scale = d3
  .scaleLinear()
  .domain([1, 10])
  .range([2, 400]);

console.log(scale(10));

const App = () => (
  <div>
    <svg width="600" height="600" id="svg">
      <Colors data={d3.range(20)} width={200} height={100} />
      <Colors
        data={[10, 15, 10, 2, 3, 4, 5, 6, 7]}
        width={200}
        height={100}
        x={0}
        y={150}
      />
    </svg>
  </div>
);

render(<App />, document.getElementById("root"));
