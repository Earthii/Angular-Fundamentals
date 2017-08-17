export interface Passenger {
    id: number;
    fullname: string;
    checkedIn: boolean;
    checkedInDate ?: number
    children?: Child[];
}

export interface Child {
    name: string;
    age: number;
}
