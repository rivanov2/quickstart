import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CrisisListComponent} from "./crisis-center/crisis-list.component";
import {HeroListComponent} from "./heroes/heroes-list-component";
import {CrisisRoutingModule} from "./crisis-center/crisis-routing.module";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'crisis-center', component: CrisisListComponent},
      {path: 'heroes', component: HeroListComponent,}
    ]),
    CrisisRoutingModule
  ],
  exports: [
    RouterModule,
    CrisisRoutingModule
  ]
})
export class AppRoutingModule {
}
