declare class SPTAppRemote {
	public connectionParameters: SPTAppRemoteConnectionParams;
	public connected: boolean;
	public delegate: any;
	public playerAPI: SPTAppRemotePlayerAPI;

	constructor(configuration: SPTConfiguration, logLevel: any);
	public authorizeAndPlayURI(URI: string): boolean;
	public authorizationParametersFromURL(url: NSURL): NSDictionary<string, string>;
	public connect(): void;
	public disconnect(): void;
}

declare interface SPTAppRemoteCallback {
	(result: boolean, error: any): void;
}

declare class SPTAppRemoteConnectionParams {
	public accessToken: string;
}

declare interface SPTAppRemoteDelegate {
	public appRemoteDidEstablishConnection(appRemote: SPTAppRemote): void;
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
	public pause(callback: SPTAppRemoteCallback): void;
	public skipToNext(callback: SPTAppRemoteCallback): void;
	public skipToPrevious(callback: SPTAppRemoteCallback): void;
	public resume(callback: SPTAppRemoteCallback): void;
	public setShuffleCallback(shuffle: boolean, callback: SPTAppRemoteCallback): void;
	public setRepeatModeCallback(repeatMode: number, callback: SPTAppRemoteCallback): void;
}

declare class SPTConfiguration {
	constructor(clientID: string, redirectURL: NSURL);
}
