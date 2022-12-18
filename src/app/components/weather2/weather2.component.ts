import { Component } from '@angular/core';
import { Chart, registerables, ChartData, ChartType } from 'chart.js';
import { WeatherService } from '../../services/weather.service';
Chart.register(...registerables)

@Component({
  selector: 'app-weather2',
  templateUrl: './weather2.component.html',
  styleUrls: ['./weather2.component.scss']
})
export class Weather2Component {

  constructor(private _weather: WeatherService) { }

  ChartData: any;
  iddata: any[] = [];
  realdata: any[] = [];
  colordata: any[] = [];

  ngOnInit(): void {
    this._weather.daysweather().subscribe(res => { this.ChartData = res
    
    if (this.ChartData != null) {
      for (let i = 0; i < this.ChartData.length; i++) {
        console.log(this.ChartData[i]);
        this.iddata.push(this.ChartData[i].id);
       // this.labeldata.push(this.ChartData[i].id);
       // this.labeldata.push(this.ChartData[i].id);

      }
      this.RenderChart(this.iddata, 'bar', 'barchart');
      this.RenderChart(this.iddata, 'pie', 'piechart');
      this.RenderChart(this.iddata, 'doughnut', 'dochart');
      this.RenderChart(this.iddata, 'polarArea', 'polarchart');
      this.RenderChart(this.iddata, 'radar', 'radarchart');

    }
  })
    console.log(this.ChartData);
  }
  
  RenderChart(iddata:any, type:any, id:any ) {

    const myChart = document.getElementById('myChart');

    new Chart(id, {
      type: type,
      data: {
        labels: ['1','2','3','4','5','6','7','8','9','10'],
        datasets: [{
          label: 'id',
          data: iddata,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
