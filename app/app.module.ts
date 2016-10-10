import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {HeroesModule} from "./heroes/heroes.module";
import {HttpModule} from "@angular/http";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryService} from "./in-memory.service";
import {CrisisModule} from "./crisis-center/crisis.module";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    CrisisModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryService),
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
