import {NgModule} from "@angular/core";
import {HeroService} from "./hero.service";
import {HeroDetailComponent} from "./heroes-detail.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HeroRoutingModule} from "./hero-routing.module";
import {HeroListComponent} from "./heroes-list-component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroRoutingModule
  ],
  providers: [
    HeroService
  ],
  declarations: [
    HeroDetailComponent,
    HeroListComponent
  ]
})
export class HeroesModule {}
