import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { throwError as observableThrowError, Observable } from 'rxjs'
import { catchError } from 'rxjs/operators'
import { IWeather } from './../interfaces/IWeather'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  domain: string = 'http://localhost:8080'

  constructor(private http: HttpClient) {}

  private options: {
    headers: HttpHeaders
  }

  createAuthenticationHeaders() {
    this.options = {
      headers: new HttpHeaders({})
    }
  }

  getWeather(): Observable<IWeather> {
    return this.http.get<IWeather>(`${this.domain}/weather`).pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
    return observableThrowError(error.message || 'Server Error')
  }
}
