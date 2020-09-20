import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico-rosquinha',
  templateUrl: './grafico-rosquinha.component.html',
  styleUrls: ['./grafico-rosquinha.component.css']
})
export class GraficoRosquinhaComponent implements OnInit {

  public doughnutChartLabels = false;
  public doughnutChartData: MultiDataSet = [
    [25, 25, 25, 25]
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public donutColors=[
    {
      backgroundColor: [
        'rgba(24, 156, 161, 1)',
        'rgba(255, 184, 0, 1)',
        'rgba(255, 76, 97, 1)',
        'rgba(119, 206, 50, 1)'
    ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}