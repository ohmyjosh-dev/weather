import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"

import { AppRoutingModule } from "./app-routing.module"
import { HttpClientModule } from "@angular/common/http"
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from "./app.component"
import { PageNotFoundComponent } from "./components/view/page-not-found/page-not-found.component"
import { SearchComponent } from "./components/view/search/search.component";
import { TextInputComponent } from './components/element/text-input/text-input.component';
import { InputRefDirective } from './directives/input-ref.directive';
import { CardComponent } from './components/element/weather-card/weather-card.component';
import { UnitSelectorComponent } from './components/element/unit-selector/unit-selector.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, SearchComponent, TextInputComponent, InputRefDirective, CardComponent, UnitSelectorComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
