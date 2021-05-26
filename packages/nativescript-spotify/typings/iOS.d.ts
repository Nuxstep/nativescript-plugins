/**
 * Class References
 */

declare class SPTAppRemote extends NSObject {
	public connectionParameters: SPTAppRemoteConnectionParams;
	public connected: boolean;
	public delegate: SPTAppRemoteDelegate;
	public playerAPI: SPTAppRemotePlayerAPI;
	public imageAPI: SPTAppRemoteImageAPI;
	public contentAPI: SPTAppRemoteContentAPI;

	constructor(configuration: SPTConfiguration, logLevel: any);
	public authorizeAndPlayURI(URI: string): boolean;
	public authorizationParametersFromURL(url: NSURL): NSDictionary<string, string>;
	public connect(): void;
	public disconnect(): void;
}

declare class SPTAppRemoteConnectionParams extends NSObject {
	public accessToken: string;
}

declare class SPTConfiguration extends NSObject {
	constructor(clientID: string, redirectURL: NSURL);
}

/**
 * Protocol References
 */

declare interface SPTAppRemoteAlbum extends NSObject {
	public name: string;
	public URI: string;
}

declare interface SPTAppRemoteArtist extends NSObject {
	public name: string;
	public URI: string;
}

declare interface SPTAppRemoteCallback {
	(result: any, error: NSError): void;
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

declare interface SPTAppRemoteDelegate extends NSObject {
	public appRemoteDidEstablishConnection(appRemote: SPTAppRemote): void;
	public appRemotedidFailConnectionAttemptWithError(appRemote: SPTAppRemote, error: NSError): void;
	public appRemotedidDisconnectWithError(appRemote: SPTAppRemote, error: NSError): void;
}

declare interface SPTAppRemoteImageAPI extends NSObject {
	public fetchImageForItemWithSizeCallback(imageRepresentable: SPTAppRemoteImageRepresentable, imageSize: CGSize, callback: SPTAppRemoteCallback): void;
}

declare interface SPTAppRemoteImageRepresentable extends NSObject {
	public imageIdentifier: string;
}

declare interface SPTAppRemotePlaybackOptions extends NSObject {
	public isShuffling: boolean;
	public repeatMode: SPTAppRemotePlaybackOptionsRepeatMode;
}

declare interface SPTAppRemotePlaybackRestrictions extends NSObject {
	public canSkipNext: boolean;
	public canSkipPrevious: boolean;
	public canRepeatTrack: boolean;
	public canRepeatContext: boolean;
	public canToggleShuffle: boolean;
	public canSeek: boolean;
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

declare interface SPTAppRemotePlayerState extends NSObject {
	public track: SPTAppRemoteTrack;
	public playbackPosition: number;
	public playbackSpeed: number;
	public paused: boolean;
	public playbackRestrictions: SPTAppRemotePlaybackRestrictions;
	public playbackOptions: SPTAppRemotePlaybackOptions;
	public contextTitle: string;
	public contextURI: NSURL;
}

declare interface SPTAppRemotePlayerStateDelegate extends NSObject {
	public playerStateDidChange(playerState: NSObject): void;
}

declare interface SPTAppRemoteTrack extends NSObject {
	public name: string;
	public URI: string;
	public duration: number;
	public artist: SPTAppRemoteArtist;
	public album: SPTAppRemoteAlbum;
	public saved: boolean;
	public episode: boolean;
	public podcast: boolean;
}

/**
 * Constant References
 */

declare enum SPTAppRemoteLogLevel {
	None = 0,
	Debug = 1,
	Info = 2,
	Error = 3,
}

declare const enum SPTAppRemotePlaybackOptionsRepeatMode {
	Off = 0,
	Track = 1,
	Context = 2,
}
