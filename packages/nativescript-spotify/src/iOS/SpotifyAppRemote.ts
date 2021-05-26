import { setInterval, clearInterval } from '@nativescript/core/timer';
import { INTERVAL_DELAY, INTERVAL_LIMIT } from './Constants';
import { PlayerStateBuilder } from './PlayerStateBuilder';
import { ContentItemsBuilder } from './ContentItemsBuilder';
import { SpotifyAppRemoteDelegate } from './SpotifyAppRemoteDelegate';
import { SpotifyAppRemotePlayerStateDelegate } from './SpotifyAppRemotePlayerStateDelegate';
import { SpotifyAppRemoteCommon } from '../common/SpotifyAppRemoteCommon';
import { ContentItem } from '../common/ContentItem';
import { ContentType } from '../common/ContentType';
import { PlayerState } from '../common/PlayerState';
import { RepeatMode } from '../common/RepeatMode';

export class SpotifyAppRemote extends SpotifyAppRemoteCommon {
	// Configuration
	private static clientId: string;
	private static redirectUri: string;
	private static accessToken: string;
	// Authorization state
	private static authorized: boolean = false;
	private static authorizationError: any = null;
	// Connection state
	private static connected: boolean = false;
	private static connectionError: any = null;
	// Native instances
	private static configuration: SPTConfiguration;
	private static appRemote: SPTAppRemote;

	public static setClientId(clientId: string): void {
		this.clientId = clientId;
	}

	public static setRedirectUri(redirectUri: string): void {
		this.redirectUri = redirectUri;
	}

	public static setConnected(connected: boolean): void {
		this.connected = connected;
	}

	public static setConnectionError(error: NSError): void {
		this.connectionError = error;
	}

	private static clearAuthorizationState(): void {
		this.authorized = false;
		this.authorizationError = null;
	}

	private static clearConnectionState(): void {
		this.connected = false;
		this.connectionError = null;
	}

	private static createConfiguration() {
		return new SPTConfiguration(this.clientId, NSURL.URLWithString(this.redirectUri));
	}

	private static createAppRemote() {
		const appRemote = new SPTAppRemote(this.configuration, SPTAppRemoteLogLevel.Error);
		appRemote.delegate = SpotifyAppRemoteDelegate.new();

		return appRemote;
	}

	private static extractAccessTokenFromURL(url: NSURL): string {
		const parameters = this.appRemote.authorizationParametersFromURL(url);

		if (parameters['error'] || parameters.objectForKey('error')) {
			throw parameters['error'] || parameters.objectForKey('error');
		}

		return parameters['access_token'] || parameters.objectForKey('access_token');
	}

	public static setAuthorizationParameters(url: NSURL): void {
		try {
			this.accessToken = this.extractAccessTokenFromURL(url);
			this.appRemote.connectionParameters.accessToken = this.accessToken;
			this.authorized = true;
		} catch (exception) {
			this.authorizationError = exception;
		}
	}

	public static async authorizeAndPlayURI(uri: string = ''): Promise<void> {
		return new Promise((resolve, reject) => {
			this.clearAuthorizationState();
			this.configuration = this.createConfiguration();
			this.appRemote = this.createAppRemote();

			const isSpotifyInstalled = this.appRemote.authorizeAndPlayURI(uri);
			if (!isSpotifyInstalled) {
				throw new Error('[iOS] SpotifyAppRemote: Spotify app is not installed');
			}

			let timeElapsed = 0;

			const intervalId = setInterval(() => {
				if (timeElapsed >= INTERVAL_LIMIT) {
					reject(new Error('[iOS] SpotifyAppRemote: Authorization timeout'));
				}

				if (this.authorized) {
					clearInterval(intervalId);
					resolve();
				} else if (this.authorizationError) {
					clearInterval(intervalId);
					reject(this.authorizationError);
				}
			}, INTERVAL_DELAY);
		});
	}

	public static async connect(): Promise<void> {
		return new Promise((resolve, reject) => {
			this.clearConnectionState();

			this.appRemote.connect();

			let timeElapsed = 0;

			const intervalId = setInterval(() => {
				if (timeElapsed >= INTERVAL_LIMIT) {
					reject(new Error('[iOS] SpotifyAppRemote: Connection timeout'));
				}

				if (this.connected) {
					clearInterval(intervalId);
					resolve();
				} else if (this.connectionError) {
					clearInterval(intervalId);
					reject(this.connectionError);
				}

				timeElapsed += INTERVAL_DELAY;
			}, INTERVAL_DELAY);
		});
	}

	public static async disconnect(): Promise<void> {
		return new Promise((resolve, reject) => {
			this.connectionError = null;

			this.appRemote.disconnect();

			let timeElapsed = 0;

			const intervalId = setInterval(() => {
				if (timeElapsed >= INTERVAL_LIMIT) {
					reject(new Error('[iOS] SpotifyAppRemote: Disconnect timeout'));
				}

				if (this.connected || this.connectionError) {
					clearInterval(intervalId);
					resolve();
				}

				timeElapsed += INTERVAL_DELAY;
			}, INTERVAL_DELAY);
		});
	}

	public static isConnected(): boolean {
		return this.appRemote.connected;
	}

	public static async getPlayerState(): Promise<PlayerState> {
		const nativePlayerState = await this.getNativePlayerState();
		return PlayerStateBuilder.build(nativePlayerState);
	}

	private static async getNativePlayerState(): Promise<SPTAppRemotePlayerState> {
		return new Promise((resolve, reject) => {
			this.appRemote.playerAPI.getPlayerState((result: SPTAppRemotePlayerState, error: NSError) => {
				if (error) {
					reject(error);
				}

				resolve(result);
			});
		});
	}

	public static subscribeToPlayerState(callback: (playerState: PlayerState) => void): void {
		const playerStateDelegate = SpotifyAppRemotePlayerStateDelegate(callback).new();
		this.appRemote.playerAPI.delegate = playerStateDelegate;

		this.appRemote.playerAPI.subscribeToPlayerState(async (_result: boolean, error: NSError) => {
			if (error) {
				throw error;
			}
		});
	}

	public static async pause(): Promise<void> {
		return new Promise((resolve, reject) => {
			this.appRemote.playerAPI.pause((_result: boolean, error: NSError) => {
				if (error) {
					reject(error);
				}
				resolve();
			});
		});
	}

	public static async play(uri: string): Promise<void> {
		return new Promise((resolve, reject) => {
			this.appRemote.playerAPI.playCallback(uri, (_result: boolean, error: NSError) => {
				if (error) {
					reject(error);
				}
				resolve();
			});
		});
	}

	public static async resume(): Promise<void> {
		return new Promise((resolve, reject) => {
			this.appRemote.playerAPI.resume((_result: boolean, error: NSError) => {
				if (error) {
					reject(error);
				}
				resolve();
			});
		});
	}

	public static async setRepeat(repeatMode: RepeatMode): Promise<void> {
		return new Promise((resolve, reject) => {
			this.appRemote.playerAPI.setRepeatModeCallback(repeatMode, (_result: boolean, error: NSError) => {
				if (error) {
					reject(error);
				}
				resolve();
			});
		});
	}

	public static async setShuffle(enabled: boolean): Promise<void> {
		return new Promise((resolve, reject) => {
			this.appRemote.playerAPI.setShuffleCallback(enabled, (_result: boolean, error: NSError) => {
				if (error) {
					reject(error);
				}
				resolve();
			});
		});
	}

	public static async skipNext(): Promise<void> {
		return new Promise((resolve, reject) => {
			this.appRemote.playerAPI.skipToNext((_result: boolean, error: NSError) => {
				if (error) {
					reject(error);
				}
				resolve();
			});
		});
	}

	public static async skipPrevious(): Promise<void> {
		return new Promise((resolve, reject) => {
			this.appRemote.playerAPI.skipToPrevious((_result: boolean, error: NSError) => {
				if (error) {
					reject(error);
				}
				resolve();
			});
		});
	}

	public static async getRecommendedContentItems(type: ContentType): Promise<Array<ContentItem>> {
		return new Promise((resolve, reject) => {
			this.appRemote.contentAPI.fetchRecommendedContentItemsForTypeFlattenContainersCallback(type, false, (result: NSArray<SPTAppRemoteContentItem>, error: NSError) => {
				if (error) {
					reject(error);
				}

				const contentItems = ContentItemsBuilder.build(result);
				resolve(contentItems);
			});
		});
	}

	public static async getImage(imageRepresentable: SPTAppRemoteImageRepresentable): Promise<UIImage> {
		return new Promise((resolve, reject) => {
			// @ts-ignore
			if (imageRepresentable.conformsToProtocol(SPTAppRemoteImageRepresentable)) {
				this.appRemote.imageAPI.fetchImageForItemWithSizeCallback(imageRepresentable, { width: 720, height: 720 }, (result: UIImage, error: NSError) => {
					if (error) {
						reject(error);
					}

					resolve(result);
				});
			}
		});
	}
}
