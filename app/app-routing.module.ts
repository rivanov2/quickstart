import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CrisisRoutingModule} from "./crisis-center/crisis-routing.module";
import {HeroRoutingModule} from "./heroes/hero-routing.module";

@NgModule({
  imports: [
    RouterModule.forRoot([]),
    HeroRoutingModule,
    CrisisRoutingModule
  ],
  exports: [
    RouterModule,
    CrisisRoutingModule,
    HeroRoutingModule
  ]
})
export class AppRoutingModule {
}
