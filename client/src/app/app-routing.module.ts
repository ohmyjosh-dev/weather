import { NgModule } from "@angular/core"
import { Routes, RouterModule } from "@angular/router"

import { SearchComponent } from "./components/view/search/search.component"
import { PageNotFoundComponent } from "./components/view/page-not-found/page-not-found.component"

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: SearchComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
