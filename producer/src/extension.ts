import * as vscode from 'vscode';
import { ext } from './extensionVariables';
import { AzureUserInput } from 'vscode-azureextensionui';
import { eventProducerCommand } from './commands/eventProducerCommand';
import { EventProvider } from './EventProvider';
import { coreApi } from './api';

export function activate(context: vscode.ExtensionContext) {
    ext.context = context;
    ext.outputChannel = vscode.window.createOutputChannel('eventproducer');
    ext.ui = new AzureUserInput(context.globalState);

    ext.eventProvider = new EventProvider();

    vscode.commands.registerCommand('sample.eventProducerCommand', eventProducerCommand);

    return coreApi.eventApi;
}