import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { throwError as observableThrowError, Observable } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { IWeather } from './../interfaces/IWeather'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  private options: {
    headers: HttpHeaders
  }

  createAuthenticationHeaders() {
    this.options = {
      headers: new HttpHeaders({})
    }
  }

  getWeather(): any {
    let weather: IWeather

    const weatherApi = 'http://localhost:8080/weather'
    const response: Promise<IWeather> = fetch(weatherApi)
      .then(res => res.json())
      .catch(err => {
        throw new Error(err)
      })
    return response
  }

  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message || 'Server Error')
  }
}
