import { Component, OnInit, ViewChild } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { Chart } from 'chart.js';
import { map } from 'rxjs-compat/operator/map';
import { identifierName } from '@angular/compiler';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})


export class WeatherComponent {

  datos: any;

  constructor(private _weather: WeatherService) { }

  ngOnInit() {

    this._weather.daysweather().subscribe(res => console.log(res))

    this._weather.daysweather().subscribe(res => this.datos = res)

    /*/ this._weather.daysweather().subscribe(res => {

      const weather = res['weather'].map((res: { id: any; }) => res.id);
      console.log(weather);

      const weather1 = res['weather'].map((res: { main: any; }) => res.main);
      console.log(weather1);

      const coord = (res.coord.lon);
      console.log(coord);

      const temp_max = (res.main.temp_max);
      console.log(temp_max);

      const temp_min = (res.main.temp_min);
      console.log(temp_min);

      // console.log(this.datos)
    }); /*/

  }

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {

    labels: ['day1', 'day2', 'day3', 'day4'],
    datasets: [
      { data: [10, 20, 30, 40], label: 'temp_max' },
      { data: [20, 30, 40, 50], label: 'temp_min' },
    ],

  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

}

/*/
 public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
 console.log(event, active);
}

public randomize(): void {
Only Change 3 values
this.barChartData.datasets[0].data = [
Math.round(Math.random() * 100),
59,
80,
Math.round(Math.random() * 100),
56,
Math.round(Math.random() * 100),
40];
this.chart?.update();
}
/*/