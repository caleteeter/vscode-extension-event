import * as vscode from 'vscode';
import { ext } from './extensionVariables';
import { AzureUserInput } from 'vscode-azureextensionui';
import { eventConsumerCommand } from './commands/eventConsumerCommand';

export function activate(context: vscode.ExtensionContext) {
    ext.context = context;
    ext.outputChannel = vscode.window.createOutputChannel('eventconsumer');
    ext.ui = new AzureUserInput(context.globalState);

    vscode.commands.registerCommand('sample.eventConsumerCommand', eventConsumerCommand);
}