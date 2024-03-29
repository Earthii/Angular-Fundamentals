import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule} from '@angular/common'
import { FormsModule } from '@angular/forms'
import {RouterModule, Routes} from '@angular/router'

import { PassengerDashboardModule } from './passenger-dashboard/passenger.dashboard.module'

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component'
import { NotFoundComponent } from './not-found.component'



const routes: Routes = [
    {
        path : '',
        redirectTo:'passengers',
        pathMatch:'full'
    },
    {
        path : '**',
        component : NotFoundComponent,

    }
]

@NgModule({
  declarations : [
      AppComponent,
      HomeComponent,
      NotFoundComponent
  ],
  bootstrap: [
      AppComponent
  ],
  imports: [
      BrowserModule,
      CommonModule,
      FormsModule,
      RouterModule.forRoot(routes, {useHash:true}),

      PassengerDashboardModule
  ]
})
export class AppModule {}