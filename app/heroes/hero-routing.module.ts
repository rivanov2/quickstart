import {RouterModule, Routes} from "@angular/router";
import {HeroDetailComponent} from "./heroes-detail.component";
import {HeroListComponent} from "./heroes-list-component";

const routes:Routes = [
  { path: 'heroes', component: HeroListComponent },
  { path: 'hero/:id', component: HeroDetailComponent }
]
export default RouterModule.forChild(routes);
