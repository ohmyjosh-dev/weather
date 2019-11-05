import { Component, OnInit } from "@angular/core"
import { WeatherService } from "../../../services/weather.service"

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {

  currentWeather

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    try {
      const forecast = this.weatherService.getWeather()
      debugger
    } catch (error) {
      console.log(error)
    }
  }
}
