import { Component, OnInit } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  /**
   * Barchart
   */

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          display: true ,
          color: "#444444"
        },
      }],
      yAxes: [{
        gridLines: {
          display: true ,
          color: "#444444"
        },
      }]
    }
  };

  //Chart Labels
  public barChartLabels: string[] = ['2011', '2012', '2013', '2014', '2015', '2016', '2017'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;
  //Chart data
  public barChartData: any[] = [
    { data: [66, 55, 83, 82, 56, 51, 43], label: 'Loss' },
    { data: [29, 38, 40, 21, 82, 30, 89], label: 'Profit' }
  ];
  // Chart events
  public chartClicked(e: any): void {
    console.log(e);
  }
  // Chart events
  public chartHovered(e: any): void {
    console.log(e);
  }

  /**
   * DoughnutChart
   */
  public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';

  public doughnutChartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
  };

  /**
   * LinesChart
   */

  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

}
