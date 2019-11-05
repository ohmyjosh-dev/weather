import { Component, OnInit } from '@angular/core'
import { WeatherService } from '../../../services/weather.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Observable } from 'rxjs/internal/Observable'
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
  subscription = null;

  constructor(private weatherService: WeatherService, private formBuilder: FormBuilder) {
    this.createForm()
  }

  ngOnInit() {}

  createForm() {
    this.searchForm = this.formBuilder.group({
      city: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(100)
        ])
      ]
    })
  }

  disableForm() {
    this.searchForm.controls['city'].disable()
  }

  enableForm() {
    this.searchForm.controls['city'].enable()
  }
  onSearchSubmit() {
    this.processing = true
    this.disableForm()
    const searchParams: ISearch = {
      city: this.searchForm.get('city').value
    }

    try {
      this.subscription = this.weatherService.getWeather(searchParams).subscribe(
        (res: IWeather) => {
          this.weather = res
          this.processing = false;
          this.enableForm();
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
