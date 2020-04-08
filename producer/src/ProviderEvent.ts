import { IProviderEvent } from "./IProviderEvent";

export class ProviderEvent implements IProviderEvent {
    data: string;
    constructor(inputData?: string) {
        if (inputData) {
            this.data = inputData;
        } else {
            this.data = 'default';
        }
    }
}