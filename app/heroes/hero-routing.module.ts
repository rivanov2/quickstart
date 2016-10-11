import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {HeroDetailComponent} from "./heroes-detail.component";
import {HeroListComponent} from "./heroes-list-component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'heroes', component: HeroListComponent },
      { path: 'hero/:id', component: HeroDetailComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class HeroRoutingModule {}
