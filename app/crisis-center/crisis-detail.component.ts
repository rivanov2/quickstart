import {Component} from "@angular/core";
import {Crisis} from "./crisis";
import {CrisisService} from "./crisis-service";
@Component({
  selector: 'crisis-detail',
  template: `
    <ul>
      <li *ngFor="let crisis of crises">
        {{ crisis.name }}  
        {{ crisis.description }}
      </li>  
    </ul>
  `
})
export class CrisisDetailComponent {
  crises: Crisis[];

  constructor(private service: CrisisService) {
    service.getCrises().subscribe(crises => {
      this.crises = crises.data;
    });
  }
}
