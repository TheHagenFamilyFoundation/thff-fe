export class Grant {
    id: number;
    Year: number;
    Amount: number;
    Description: string;
    City: string;
    State: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}