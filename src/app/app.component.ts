import { Component, VERSION } from '@angular/core';
import { TemperatureDataService } from './services/temperature-data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Weather Data';

  tempData:Array<any> = [];

  constructor(private service: TemperatureDataService) {
    this.service.getTemperature().subscribe((response) => {
      this.tempData = response.items[0].forecasts;
      console.log(response.items[0].forecasts);
    });
  }
}
