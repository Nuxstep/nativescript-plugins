declare class SPTAppRemote extends NSObject {
	public connectionParameters: SPTAppRemoteConnectionParams;
	public connected: boolean;
	public delegate: any;
	public playerAPI: SPTAppRemotePlayerAPI;
	public imageAPI: SPTAppRemoteImageAPI;
	public contentAPI: SPTAppRemoteContentAPI;

	constructor(configuration: SPTConfiguration, logLevel: any);
	public authorizeAndPlayURI(URI: string): boolean;
	public authorizationParametersFromURL(url: NSURL): NSDictionary<string, string>;
	public connect(): void;
	public disconnect(): void;
}

declare interface SPTAppRemoteDelegate extends NSObject {
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

declare class SPTAppRemoteConnectionParams extends NSObject {
	public accessToken: string;
}

declare class SPTConfiguration extends NSObject {
	constructor(clientID: string, redirectURL: NSURL);
}

declare interface SPTAppRemoteCallback {
	(result: any, error: any): void;
}

declare interface SPTAppRemoteContentAPI extends NSObject {
	public fetchRecommendedContentItemsForTypeFlattenContainersCallback(contentType: string, flattenContainers: boolean, callback: SPTAppRemoteCallback);
	public fetchChildrenOfContentItemCallback(contentItem: SPTAppRemoteContentItem, callback: SPTAppRemoteCallback);
}

declare interface SPTAppRemoteContentItem extends NSObject {
	public title: string;
	public subtitle: string;
	public identifier: string;
	public URI: string;
	public availableOffline: boolean;
	public playable: boolean;
	public container: boolean;
	public children: NSArray<SPTAppRemoteContentItem>;
}

declare interface SPTAppRemoteImageAPI extends NSObject {
	public fetchImageForItemWithSizeCallback(imageRepresentable: SPTAppRemoteImageRepresentable, imageSize: CGSize, callback: SPTAppRemoteCallback): void;
}

declare interface SPTAppRemotePlayerAPI extends NSObject {
	public delegate: SPTAppRemotePlayerStateDelegate;
	public playCallback(entityIdentifier: string, callback: SPTAppRemoteCallback): void;
	public pause(callback: SPTAppRemoteCallback): void;
	public skipToNext(callback: SPTAppRemoteCallback): void;
	public skipToPrevious(callback: SPTAppRemoteCallback): void;
	public resume(callback: SPTAppRemoteCallback): void;
	public setShuffleCallback(shuffle: boolean, callback: SPTAppRemoteCallback): void;
	public setRepeatModeCallback(repeatMode: number, callback: SPTAppRemoteCallback): void;
	public getPlayerState(callback: SPTAppRemoteCallback): void;
	public subscribeToPlayerState(callback: SPTAppRemoteCallback): void;
}

declare interface SPTAppRemotePlayerStateDelegate extends NSObject {
	public playerStateDidChange(playerState: NSObject): void;
}

declare interface SPTAppRemoteImageRepresentable extends NSObject {
	public imageIdentifier: string;
}
