import * as vscode from 'vscode';
import { packageJson } from '../constants';

export async function eventConsumerCommand(): Promise<void> {
    let producerExt = vscode.extensions.getExtension('ctmsft.vscode-event-emitter');
    producerExt.activate().then(() => {
        let importedApi = producerExt.exports;
        let test = importedApi.getEvent();
        test((event) => {
            vscode.window.showInformationMessage(`Event data from ${packageJson.name}: ${event.data}`);
        });
    });
    vscode.window.showInformationMessage("Event subscription successful");
}
