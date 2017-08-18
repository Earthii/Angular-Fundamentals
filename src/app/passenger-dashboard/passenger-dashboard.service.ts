import {Injectable} from '@angular/core'
import {Passenger} from "./models/passenger.interface";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


const PASSENGER_API: string = 'http://localhost:3000/passengers';

@Injectable()
export class PassengerDashboardService {

    constructor(private http: Http) {

    }

    getPassengers(): Promise<Passenger[]> {

        return this.http.get(PASSENGER_API).toPromise().then((response : Response) => response.json())
    }

    updatePassenger(passenger : Passenger): Observable<Passenger> {
        let headers = new Headers({
            'Content-Type' : 'application/json'
        })
        let options = new RequestOptions({
            headers : headers
        })
        return this.http.put(`${PASSENGER_API}/${passenger.id}`, passenger, options).map((response : Response) => response.json())
    }

    removePassenger(passenger : Passenger) :Observable<Passenger> {
        return this.http.delete(`${PASSENGER_API}/${passenger.id}`).map((response : Response) => response.json());
    }

}