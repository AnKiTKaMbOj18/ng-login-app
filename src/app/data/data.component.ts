import { Component, OnInit } from '@angular/core';
import { AppService, myData } from '../app.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  data: myData[];

  constructor(private myService: AppService) {}

  ngOnInit() {
    this.myService.getData().subscribe(data => {
      this.data = data;
    });
  }
}
