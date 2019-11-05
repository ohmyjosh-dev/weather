import { Component, OnInit } from '@angular/core'
import { WeatherService } from '../../../services/weather.service'
import { Observable } from 'rxjs/internal/Observable'
import { IWeather } from 'src/app/interfaces/IWeather'
import { ISearch } from './../../../interfaces/ISearch'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  weather: Observable<IWeather>
  city: ISearch = {
    city: 'copenhagen'
  }

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    try {
      this.weather = this.weatherService.getWeather(this.city)
    } catch (error) {
      console.log(error)
    }
  }

  /* searchForm = this.formBuilder.group({
    search: ['']
  }) */

}
