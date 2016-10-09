import {Component} from "@angular/core";

@Component({
    selector: 'my-app',
    template: `
        <h1>Component Router</h1>
        <nav>
            <a  routerLink="" 
                routerLinkActive="router-link-active" 
                [routerLinkActiveOptions]="{ exact: true }">
                Home
             </a>
            <a  routerLink="/crisis-center" 
                routerLinkActive="router-link-active" 
                [routerLinkActiveOptions]="{ exact: true }">
                Crisis-Center
             </a>
        </nav>
        <router-outlet></router-outlet>
    `
})
export class AppComponent { }
