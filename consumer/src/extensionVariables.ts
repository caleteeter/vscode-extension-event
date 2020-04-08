import { IAzureUserInput, AzExtTreeDataProvider } from 'vscode-azureextensionui';
import { ExtensionContext, OutputChannel } from 'vscode';

export namespace ext {
    export let context: ExtensionContext;
    export let tree: AzExtTreeDataProvider;
    export let outputChannel: OutputChannel;
    export let ui: IAzureUserInput;
}