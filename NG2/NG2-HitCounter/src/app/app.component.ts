import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hit Counter App!';

  count: number = 100;  

  incCount(event) {
    this.count += Number.parseInt(event.incBy);
  }

}
