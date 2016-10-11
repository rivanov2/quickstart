import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Crisis} from "./crisis";
import {CrisisListComponent} from "./crisis-list.component";
import {CrisisService} from "./crisis-service";
import {CrisisRoutingModule} from "./crisis-routing.module";
@NgModule({
  imports: [ CommonModule, CrisisRoutingModule ],
  declarations: [ CrisisListComponent ],
  providers: [ CrisisService ],
  exports: [ CrisisListComponent ]
})
export class CrisisModule {}

export {
  Crisis
}
