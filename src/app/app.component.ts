import {Component} from '@angular/core'

interface nav{
    link: string;
    name: string;
    exact: boolean
}

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.scss'],
    template: `
        <div class="app">
            <nav>
                <a *ngFor="let item of nav" 
                   [routerLink]="item.link"
                   routerLinkActive="active" 
                   [routerLinkActiveOptions]="{exact:item.exact}">{{item.name}}</a>
            </nav>
            <router-outlet></router-outlet>
        </div>
        `

})
export class AppComponent {

    nav :nav[] = [
        {
            link:'/',
            name:'Home',
            exact:true
        },
        {
            link:'/passengers',
            name:'Passengers',
            exact:true
        },
        {
            link:'ops',
            name:'404',
            exact:false
        }
    ]

}