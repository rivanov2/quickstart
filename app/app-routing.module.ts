import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CrisisListComponent} from "./crisis-center/crisis-list.component";
import {HeroListComponent} from "./heroes/heroes-list-component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'crisis-center', component: CrisisListComponent },
      { path: '', component: HeroListComponent,  }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
