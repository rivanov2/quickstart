import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CrisisListComponent} from "./crisis-list.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: CrisisListComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class CrisisRoutingModule {}
