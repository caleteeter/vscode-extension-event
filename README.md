# Sample using VSCode extensions that communicate via events

This repo contains the source for 2 VS Code extensions that demonstrate the ability to distinct extensions communicate with each other.  In this instance, this is via an event.  The extension in the producer folder, vscode-event-emitter, will setup an event and expose a function that will allow others to subscribe to this event.  In this example the payload of the event is a simple string value.  The extension in the consumer folder, vscode-event-consumer, will subscribe to the event from the producer.  Upon receiving the event, it will raise a notification with the event payload (string value).

![Sample Event Cross Extension](./media/event-demo.gif)

## Build

```
cd producer
npm install
npm run package

cd ../consumer
npm install
npm run package
```

This will compile and package the extensions into vsix format, which can be sideloaded into VS Code.

## Install

Run the command `Extensions: Install from VSIX...`, choose the vsix files generated via the build instructions above.

## Run

To demonstrate the event subscription, trigger and result:

1) First setup the consumer to listen to the event that the producer will emit.  This can be done by calling the following command `Sample Event Consumer`

2) Next emit the event from the producer.  This can be done by calling the following command `Sample Event Producer`

3) You should then be prompted for a text (string) value to include with the event.  After submitting this, a notification prompt will be shown from the consumer with this event data.
