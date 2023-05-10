import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent {
  Highcharts=Highcharts
  chartOptions={}

  constructor(){
    this.chartOptions={
      chart: {
          type: 'area'
      },
      title: {
          text: 'Yearly placement Evaluation 2022-2023',
          align: 'center'
      },
      subtitle: {
          text: 'Luminar Technolab',
          align: 'center'
      },
      xAxis: {
        categories:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov','Dec']
      
    },
      yAxis: {
          title: {
              useHTML: true,
              text: 'No of placements'
          }
      },
      credits:{
      enabled:false,
      },
      tooltip: {
          shared: true,
          headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>'
      },
      plotOptions: {
         
          area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                  lineWidth: 1,
                  lineColor: '#666666'
              }
          }
      },
      series: [{
          name: 'Big Data',
          data: [13234, 12729, 11533, 17798, 10398,12811,12541,12981,19891, 15483, 16196,16214]
      }, {
          name: 'MEARN',
          data: [13234, 12729, 11533, 17798, 10398,12811,12541,12981,19891, 15483, 16196,16214]
  
      }, {
          name: 'TESTING',
          data: [13234, 12729, 11533, 17798, 10398,12811,12541,12981,19891, 15483, 16196,16214]
      }, {
          name: 'PYTHON',
          data: [13234, 12729, 11533, 17798, 10398,12811,12541,12981,19891, 15483, 16196,16214]
  
      }, {
          name: '.NET',
          data: [13234, 12729, 11533, 17798, 10398,12811,12541,12981,19891, 15483, 16196,16214]
      }]
  }
  HC_exporting(Highcharts);  
  }
}
