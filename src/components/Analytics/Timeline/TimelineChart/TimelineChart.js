import React from "react";
import { Chart } from "react-charts";
import "./TimelineChart.css";
 
function TimelineChart({points}) {
  const data = React.useMemo(
    () => [
      {
        label: "",
        data: points
      },
    ],
    []
  );
 
  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" }
    ],
    []
  );

  return (
    <div className="timeline-chart">
      <Chart className="line-chart" data={data} axes={axes} />
    </div>
  )
}

export default TimelineChart;