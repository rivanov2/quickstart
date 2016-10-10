import {Component} from "@angular/core";
import {Crisis} from "./crisis";
import {CrisisService} from "./crisis-service";

@Component({
    templateUrl: 'app/crisis-center/crisis-list.component.html'
})
export class CrisisListComponent {
  crises: Crisis[];
  constructor(private service: CrisisService) {
    service.getCrises().subscribe(crises => {
      this.crises = crises.data;
    });
  }
}
