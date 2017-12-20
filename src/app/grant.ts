export class Grant {
    id: number;
    year: number;
    amount: number;
    description: string;
    city: string;
    state: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }

}