import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components/view/page-not-found/page-not-found.component';
import { SearchComponent } from './components/view/search/search.component';
import { WeatherComponent } from './services/weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    SearchComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
