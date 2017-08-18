import { Component, OnInit } from '@angular/core'
import { Passenger } from '../../models/passenger.interface'
import {PassengerDashboardService} from "../../passenger-dashboard.service";

@Component({
    selector : 'passenger-dashboard',
    styleUrls: [
        './passenger.dashboard.component.scss'
    ],
    template: `
        <div>
            <passenger-count [items]="passengers"></passenger-count>
            <br>
            <div *ngFor="let passenger of passengers">
                {{passenger.fullname}}
            </div>
            <br>
            <passenger-detail *ngFor="let passenger of passengers;"
                [detail]="passenger"
                (remove)="handleRemove($event)"
                (edit)="handleEdit($event)"                            
            >
            </passenger-detail>
        </div>
    `

})
export class PassengerDashboardComponent implements OnInit{
    passengers : Passenger[];

    constructor(private passengerService:PassengerDashboardService){

    }

    ngOnInit(){
        this.passengerService.getPassengers().then((data : Passenger[]) => {
            this.passengers = data
        });
    }

    handleEdit(event){
        console.log(event);
        // let index = this.passengers.findIndex(passenger => passenger.id == event.id);
        // this.passengers[index].fullname = this.passengers.find(passenger => passenger.id == event.id).fullname

        this.passengerService.updatePassenger(event).subscribe((data : Passenger) => {
            this.passengers = this.passengers.map((passenger : Passenger) => {
                if(passenger.id === event.id){
                    passenger = Object.assign({}, passenger, event);
                }
                return passenger;
            }, (response) => {})

        })
    }

    handleRemove(event){
        this.passengerService.removePassenger(event).subscribe((data : Passenger) =>{
            this.passengers = this.passengers.filter(passenger => passenger.id !== event.id);
        })
    }
}
