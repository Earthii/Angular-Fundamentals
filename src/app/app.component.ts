import {Component} from '@angular/core'

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.scss'],
    template: `
        <div class="app">
            <router-outlet></router-outlet>
        </div>
        `

})
export class AppComponent {

    title: string;
    name: string = 'Eric';

    constructor() {
        this.title = 'Ultimate Angular';
    }
    handleClick(value : string){
       console.log(value)
    }
    handleChange(value : string ){
        this.name = value
    }

}