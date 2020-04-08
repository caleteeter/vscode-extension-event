import { ext } from './extensionVariables';

export namespace coreApi {
    export let eventApi = {
        getEvent() {
            return ext.eventProvider.onDidEventFire;
        }
    };
}