import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Crisis} from "./crisis";
import {CrisisListComponent} from "./crisis-list.component";
import {CrisisService} from "./crisis.service";
import {CrisisRoutingModule} from "./crisis-routing.module";
import {CrisisCenterComponent} from "./crisis-center.component";
import {CrisisDetailComponent} from "./crisis-detail.component";
import {CrisisCenterHomeComponent} from "./crisis-center-home.component";

@NgModule({
  imports: [ CommonModule, CrisisRoutingModule ],
  declarations: [
    CrisisCenterComponent,
    CrisisListComponent,
    CrisisDetailComponent,
    CrisisCenterHomeComponent
  ],
  providers: [ CrisisService ],
  exports: [
    CrisisCenterComponent,
    CrisisListComponent,
    CrisisDetailComponent,
    CrisisCenterHomeComponent
  ]
})
export class CrisisModule {}

export {
  Crisis
}
