import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {CrisisListComponent} from "./crisis-center/crisis-list.component";
import {AppRoutingModule} from "./app-routing.module";
import {HeroesModule} from "./heroes/heroes.module";
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemHeroService} from "./in-mem-hero.service";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemHeroService)
  ],
  declarations: [
    AppComponent,
    CrisisListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
