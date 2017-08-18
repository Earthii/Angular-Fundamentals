import {Component, OnChanges, Input, Output, EventEmitter} from '@angular/core'

import {Passenger} from '../../models/passenger.interface'

@Component({
    selector: 'passenger-detail',
    styleUrls:['passenger-tail.component.scss'],
    template:`
        <div>
            <span class="status" [class.checked-in]="detail.checkedIn"></span>
            <div>
                <div *ngIf="editing">
                    <input type="text" [value]="detail.fullname" (input)="onNameChange(name.value)" #name>
                </div>
                <div *ngIf="!editing">{{detail.fullname}}</div>
                <div class="date">
                    Check in date : {{ detail.checkedInDate? (detail.checkedInDate | date:'yMMMd'):"Not checked in"}}
                </div>
            </div>
        </div>
        <button (click)="toggleEdit()">{{editing? "Done":"Edit"}}</button><button (click)="onRemove()">Remove</button>
    `
})
export class PassengerDetailComponent implements OnChanges{

    @Input() //will be passed by reference... nature of JS
    detail: Passenger;

    @Output()
    remove: EventEmitter<any> = new EventEmitter();

    @Output()
    edit: EventEmitter<any> = new EventEmitter();

    editing : boolean  = false;

    constructor(){

    }

    ngOnChanges(changes){
        //make a deep clone to prevent data shared between parent and child
        if(changes.detail){
            this.detail = Object.assign({}, changes.detail.currentValue)
        }
    }

    onNameChange(value : string){
        this.detail.fullname = value;
    }

    toggleEdit(){
        if(this.editing){
            this.edit.emit(this.detail)
        }
        this.editing = !this.editing;
    }

    onRemove(){
        this.remove.emit(this.detail);
    }
}