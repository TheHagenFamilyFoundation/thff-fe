export class Grant {
    id: number;
    year: number;
    amount: number;
    Description: string;
    city: string;
    state: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}