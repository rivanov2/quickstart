import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CrisisRoutingModule} from "./crisis-center/crisis-routing.module";
import {HeroRoutingModule} from "./heroes/hero-routing.module";

@NgModule({
  imports: [
    RouterModule.forRoot([
      // { path: '', redirectTo: '/crisis-center', pathMatch: 'full' }
      // {path: 'crisis-center', component: CrisisListComponent},
      // {path: 'heroes', component: HeroListComponent,}
    ]),
    HeroRoutingModule,
    CrisisRoutingModule
  ],
  exports: [
    RouterModule,
    CrisisRoutingModule,
    // HeroRoutingModule
  ]
})
export class AppRoutingModule {
}
