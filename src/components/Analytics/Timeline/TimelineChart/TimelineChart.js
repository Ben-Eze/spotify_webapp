import React from 'react'
import { Chart } from 'react-charts'
 
function TimelineChart({points}) {
  const data = React.useMemo(
    () => [
      {
        label: '',
        data: points
      },
    ],
    []
  )
 
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )
 
  const lineChart = (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <div
      style={{
        width: '400px',
        height: '300px'
      }}
    >
      <Chart data={data} axes={axes} />
    </div>
  )

  return lineChart;
}

export default TimelineChart;