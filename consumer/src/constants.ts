import { extensions } from 'vscode';

const extensionId: string = 'ctmsft.vscode-event-consumer';
export const packageJson: any = extensions.getExtension(extensionId)!.packageJSON;