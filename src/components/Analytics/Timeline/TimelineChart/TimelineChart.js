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