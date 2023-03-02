import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { } from './chartSlice'

import _ from 'lodash';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import HighchartsExporting from 'highcharts/modules/exporting';
HighchartsExporting(Highcharts);

export const ChartView = () => {

    const dispatch = useDispatch()

    
const options = {
    chart: {
      type: 'pie',
      // width: 500,
      // height: 500,
    },
    title: {
      text: 'Disney Characters',
    },
    subtitle: {
      text: 'Hover to see the list of movies whose characters participate',
    },
    accessibility: {
      announceNewData: {
          enabled: true
      },
      point: {
          valueSuffix: '%'
      }
  },
    xAxis: {
      type: 'category',
    },
    yAxis: {
      title: {
        text: 'Total percent market share',
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        pointPadding: 0.4,
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          format: '{point.y:.1f}%',
        },
      },
    },
  
    tooltip: {
      headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat:
        '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
    },
  
    series: [
      {
        name: 'Disney Characters',
        colorByPoint: true,
        data: [
          {
            name: 'Allan-a-Dale',
            y: 65,
          },
          {
            name: 'Allie',
            y: 35,
           },
        ],
      },
    ],
    credits: {
        enabled: false,
      },
  };
    return (
        <>
        <div className="chart">
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      </> 
    )
}