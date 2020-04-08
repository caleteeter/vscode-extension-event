import { IAzureUserInput, AzExtTreeDataProvider } from 'vscode-azureextensionui';
import { ExtensionContext, OutputChannel, Event } from 'vscode';
import { EventProvider } from './EventProvider';
import { IProviderEvent } from './IProviderEvent';

export namespace ext {
    export let context: ExtensionContext;
    export let tree: AzExtTreeDataProvider;
    export let outputChannel: OutputChannel;
    export let ui: IAzureUserInput;
    export let eventProvider: EventProvider;
    export let event: Event<IProviderEvent>;
}