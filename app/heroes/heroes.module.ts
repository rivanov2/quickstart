import {NgModule} from "@angular/core";
import {HeroService} from "./hero.service";
import {HeroDetailComponent} from "./heroes-detail.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HeroListComponent} from "./heroes-list-component";
import heroesRoutes from './hero-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    heroesRoutes
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
