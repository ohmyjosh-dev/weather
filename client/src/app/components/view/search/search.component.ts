import { Component, OnInit } from "@angular/core"
import { WeatherService } from "../../../services/weather.service"
import { share } from 'rxjs/internal/operators/share'

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {

  forecast: any

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {

    try {
      this.forecast = this.weatherService.getWeather().pipe(share())
    } catch (error) {
      console.log(error)
    }
  }
}
