declare class SPTAppRemote {
	connectionParameters: SPTAppRemoteConnectionParams;
	connected: boolean;
	delegate: any;
	playerAPI: SPTAppRemotePlayerAPI;

	constructor(configuration: SPTConfiguration, logLevel: any);
	public authorizeAndPlayURI(URI: string): boolean;
	public authorizationParametersFromURL(url: NSURL): NSDictionary<string, string>;
	public connect(): void;
}

declare interface SPTAppRemoteCallback {
	(result: boolean, error: any): void;
}

declare class SPTAppRemoteConnectionParams {
	accessToken: string;
}

declare interface SPTAppRemoteDelegate {
	public appRemoteDidEstablishConnection(appRemote: SPTAppRemove): void;
	public appRemotedidFailConnectionAttemptWithError(appRemote: SPTAppRemote, error: NSError): void;
	public appRemotedidDisconnectWithError(appRemote: SPTAppRemote, error: NSError): void;
}

declare enum SPTAppRemoteLogLevel {
	SPTAppRemoteLogLevelNone = 0,
	SPTAppRemoteLogLevelDebug = 1,
	SPTAppRemoteLogLevelInfo = 2,
	SPTAppRemoteLogLevelError = 3,
}

declare interface SPTAppRemotePlayerAPI {
	public playCallback(entityIdentifier: string, callback: SPTAppRemoteCallback): void;
}

declare class SPTConfiguration {
	constructor(clientID: string, redirectURL: NSURL);
}
