import { Event, window } from 'vscode';
import { ext } from '../extensionVariables';

export async function eventProducerCommand(): Promise<void> {
    // show the input box for user input
    window.showInputBox().then((value) => {
        ext.eventProvider.fire(value);
    });
}
