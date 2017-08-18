import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule} from '@angular/common'
import { FormsModule } from '@angular/forms'
import {RouterModule, Routes} from '@angular/router'

import { PassengerDashboardModule } from './passenger-dashboard/passenger.dashboard.module'

import { AppComponent } from './app.component'


const routes: Routes = [{

}]

@NgModule({
  declarations : [
      AppComponent
  ],
  bootstrap: [
      AppComponent
  ],
  imports: [
      BrowserModule,
      CommonModule,
      FormsModule,
      RouterModule.forRoot(routes)),

      PassengerDashboardModule
  ]
})
export class AppModule {}