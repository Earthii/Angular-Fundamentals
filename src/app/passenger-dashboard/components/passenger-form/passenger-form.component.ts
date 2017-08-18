import {Component, EventEmitter, Input, Output} from '@angular/core'
import {Passenger} from '../../models/passenger.interface'
import {Baggage} from "../../models/baggage.interface";

@Component({
    selector:'passenger-form',
    template:`
        <form #form="ngForm" (ngSubmit)="handleSubmit(form.value, form.valid)" novalidate>
            Initial values : {{detail | json}}
            <br>

            <br>
            <div>
                <div>
                    <span>Passenger name:</span>
                    <input type="text" name="fullname" [ngModel]="detail?.fullname" #fullname="ngModel" required> 
                    <span *ngIf="fullname.errors?.required && fullname.dirty">
                        Passenger name is required
                    </span>
                </div>
                <div>
                    <span>Passenger id:</span>
                    <input type="number" name="id" [ngModel]="detail?.id" #id="ngModel" required>
                    <span *ngIf="id.errors?.required && id.dirty">
                        Passenger id is required
                    </span>
                </div>
                <div>
                    <span>Checked in:</span>
                    <label>
                        <input type="radio" name="checkedIn" [value]="true" [ngModel]="detail?.checkedIn" (ngModelChange)="toggleCheckIn($event)">
                        yes
                    </label>
                    <label>
                        <input type="radio" name="checkedIn" [value]="false" [ngModel]="detail?.checkedIn" (ngModelChange)="toggleCheckIn($event)">
                        no
                    </label>
                </div>
                <div *ngIf="form.value.checkedIn">
                    Check in date :
                    <input type="number" name="checkInDate" [ngModel]="detail?.checkedInDate">
                </div>
                <div>
                    Handicap : 
                    <input type="checkbox" name="handicap" [ngModel]="detail?.handicap" (ngModelChange)="toggleHandicap($event)">
                </div>
                <div>
                    Luggage
                    <select
                        name="baggage"
                        [ngModel]="detail?.baggage">
                        <option *ngFor="let item of baggage" [value]="item.key" [selected]="item.key === detail?.baggage">{{item.value}}</option>
                    </select>
                    <select
                            name="baggage"
                            [ngModel]="detail?.baggage">
                        <option *ngFor="let item of baggage" [ngValue]="item.key">{{item.value}}</option>
                    </select>
                </div>
            </div>
            <div>
                <button type="submit" [disabled]="form.invalid">Update Passenger</button>
            </div>
            <br>
            <div>Valid : {{form.valid | json}}</div>
            <div>Invalid : {{form.invalid | json}}</div>
            Form values : {{form.value | json}}
        </form>
    `
})
export class PassengerFormComponent{

    @Input()
    detail : Passenger;

    @Output()
    update : EventEmitter<Passenger> = new EventEmitter<Passenger>();

    baggage : Baggage[] =[{
        key:"none",
        value:"No baggage"
    },{
        key:"hand-only",
        value:"Hand baggage"
    },{
        key:"hold-only",
        value:"Hold baggage"
    },{
        key:"hand-hold",
        value:"Hand and Hold baggage"
    }]

    toggleCheckIn(checkedIn : boolean){
        if(checkedIn){
            this.detail.checkedInDate = Date.now();
        }else{
            this.detail.checkedInDate = null;
        }
        this.detail.checkedIn = checkedIn;
    }

    toggleHandicap(handicap : boolean){
        this.detail.handicap = handicap;
    }

    handleSubmit(passenger: Passenger, valid:boolean){
        if(valid){
            this.update.emit(passenger);
        }
    }
}