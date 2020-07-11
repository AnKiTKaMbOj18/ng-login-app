import { Component } from '@angular/core';
import { AppService, myData } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text = 'my-app';
  superman = 'superman';
  data: myData[];

  updateValue(event) {
    this.text = event.target.value;
  }
  constructor(private myService: AppService) {}

  ngOnInit() {
    this.myService.getData().subscribe(data => {
      this.data = data;
    });
  }
}
