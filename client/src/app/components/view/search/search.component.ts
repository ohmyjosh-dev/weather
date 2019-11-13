import { Component, OnInit } from '@angular/core'
import { WeatherService } from '../../../services/weather.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { IWeather } from 'src/app/interfaces/IWeather'
import { ISearch } from './../../../interfaces/ISearch'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  weather: IWeather
  searchForm: FormGroup
  processing: boolean = false
  subscription = null

  constructor(private weatherService: WeatherService, private formBuilder: FormBuilder) {
    this.createForm()
  }

  ngOnInit() {
    this.onSearchSubmit()
  }

  createForm() {
    this.searchForm = this.formBuilder.group({
      city: ['Whitby', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(100)])]
    })
  }

  disableForm() {
    this.searchForm.controls['city'].disable()
    this.processing = true
  }

  enableForm() {
    this.searchForm.controls['city'].enable()
    this.processing = false
  }
  setWeatherClass() {
    if (this.weather && this.weather.current_observation) {
      const condition = this.weather.current_observation.condition.code;
      return 'condition_' + condition
    } else {
      return ''
    }
  }
  onSearchSubmit() {
    this.disableForm()
    const searchParams: ISearch = {
      city: this.searchForm.get('city').value
    }

    if (!searchParams.city) {
      console.log({ success: false, message: 'No Search Parameters Detected' })
      this.enableForm()
      return
    }

    try {
      this.subscription = this.weatherService.getWeather(searchParams).subscribe(
        (res: IWeather) => {
          console.log(res)
          this.weather = res
          this.enableForm()
        },
        err => {
          console.log(err)
        }
      )
    } catch (error) {
      console.log(error)
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }
}
