declare class SPTAppRemote {
	connectionParameters: SPTAppRemoteConnectionParams;
	delegate: any;

	constructor(configuration: SPTConfiguration, logLevel: any);
	public authorizeAndPlayURI(URI: string): boolean;
	public authorizationParametersFromURL(url: NSURL): NSDictionary<string, string>;
	public connect(): void;
}

declare class SPTAppRemoteConnectionParams {
	accessToken: string;
}

declare interface SPTAppRemoteDelegate {
	public appRemoteDidEstablishConnection(appRemote: SPTAppRemove): void;
	public appRemotedidFailConnectionAttemptWithError(appRemote: SPTAppRemote, error: NSError): void;
	public appRemotedidDisconnectWithError(appRemote: STPAppRemove, error: NSError): void;
}

declare enum SPTAppRemoteLogLevel {
	SPTAppRemoteLogLevelNone = 0,
	SPTAppRemoteLogLevelDebug = 1,
	SPTAppRemoteLogLevelInfo = 2,
	SPTAppRemoveLogLevelError = 3,
}

declare class SPTConfiguration {
	constructor(clientID: string, redirectURL: NSURL);
}
