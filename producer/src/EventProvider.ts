import { Event, EventEmitter } from 'vscode';
import { IProviderEvent } from './IProviderEvent';
import { ProviderEvent } from './ProviderEvent';

export class EventProvider {
    private _onDidEventFire: EventEmitter<IProviderEvent>;

    constructor() {
        this._onDidEventFire = new EventEmitter<IProviderEvent>();
    }

    get onDidEventFire(): Event<IProviderEvent> {
        return this._onDidEventFire.event;
    }

    fire(data?: string): void {
        this._onDidEventFire.fire(new ProviderEvent(data));
    }
}