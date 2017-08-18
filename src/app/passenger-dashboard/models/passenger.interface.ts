import {Baggage} from './baggage.interface'

export interface Passenger {
    id: number;
    fullname: string;
    checkedIn: boolean;
    handicap?: boolean;
    checkedInDate ?: number | null
    baggage: string
}
