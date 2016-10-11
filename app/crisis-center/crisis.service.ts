import {Injectable} from "@angular/core";
import {Crisis} from "./crisis";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'
import {Observable} from "rxjs";

@Injectable()
export class CrisisService {
  apiURL = 'api/crises';

  constructor(private http: Http) {}

  getCrises() : Observable<{ data: Crisis[] }> {
   return this.http.get(this.apiURL).map<{ data: Crisis[] } >(response =>
     response.json());
  }

  getCrisis(id: number) {
    return this.getCrises()
    .map<Crisis[]>(json => json.data)
    .map(crisisArray => 
      crisisArray.map(crisis => {
        return new Crisis(crisis.id, crisis.name);
      })
      .find(crisis => 
        crisis.id === id 
      )
    );
  }
}
