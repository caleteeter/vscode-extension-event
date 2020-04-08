import { extensions } from 'vscode';

const extensionId: string = 'ctmsft.vscode-event-emitter';
export const packageJson: any = extensions.getExtension(extensionId)!.packageJSON;