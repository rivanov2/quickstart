import {Routes, RouterModule} from "@angular/router";

const routes:Routes = [
  { path: '', loadChildren: 'app/heroes/heroes.module' },
  { path: 'crisis-center', loadChildren: 'app/crises/crisis.module' }
];

export default RouterModule.forRoot(routes);
