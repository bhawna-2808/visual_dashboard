import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public chartData: ChartData<'bar'>;
  public chartOptions: ChartOptions<'bar'> = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      }
    }
  };
  public chartType: ChartType = 'bar';
  public chartLabels: Label[] = ['Label 1', 'Label 2']; // Example labels
  public chartColors: Color[] = [
    {
      backgroundColor: 'rgba(63,81,181,0.2)',
      borderColor: 'rgba(63,81,181,1)',
      borderWidth: 1
    }
  ];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((data: any) => {
      this.chartData = {
        labels: data.labels, // Replace with your data labels
        datasets: [
          {
            data: data.values, // Replace with your data values
            label: 'Sample Data',
            backgroundColor: 'rgba(63,81,181,0.2)',
            borderColor: 'rgba(63,81,181,1)',
            borderWidth: 1
          }
        ]
      };
    });
  }
}
