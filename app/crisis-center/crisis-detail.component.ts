import {Component} from "@angular/core";
@Component({
  selector: 'crisis-detail',
  template: `
    <div>
     Details    
    <ng-content select="[crisis]"></ng-content>
    </div>
  `
})
export class CrisisDetailComponent {
  constructor() {
  }
}
