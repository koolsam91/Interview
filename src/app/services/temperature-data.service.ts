import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class TemperatureDataService{
  constructor(private _http: HttpClient){

  }
  public getTemperature(): Observable<any>{
    return this._http.get("https://api.data.gov.sg/v1/environment/4-day-weather-forecast?date=2019-12-24");
  }
}