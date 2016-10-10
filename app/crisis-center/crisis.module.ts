import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {Crisis} from "./crisis";
import {CrisisListComponent} from "./crisis-list.component";
import {CrisisService} from "./crisis-service";
@NgModule({
  imports: [ CommonModule ],
  declarations: [ CrisisListComponent ],
  providers: [ CrisisService ],
  exports: [ CrisisListComponent ]
})
export class CrisisModule {}

export {
  Crisis
}
