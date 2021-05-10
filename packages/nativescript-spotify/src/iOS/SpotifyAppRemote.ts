import { setInterval, clearInterval } from '@nativescript/core/timer';
import { INTERVAL_DELAY, INTERVAL_LIMIT } from './Constants';
import { SpotifyAppRemoteDelegate } from './SpotifyAppRemoteDelegate';
import { SpotifyAppRemoteCommon } from '../common/SpotifyAppRemoteCommon';
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
		SpotifyAppRemote.clientId = clientId;
	}

	public static setRedirectUri(redirectUri: string): void {
		SpotifyAppRemote.redirectUri = redirectUri;
	}

	public static setConnected(connected: boolean): void {
		SpotifyAppRemote.connected = connected;
	}

	public static setConnectionError(error: NSError): void {
		SpotifyAppRemote.connectionError = error;
	}

	private static clearAuthorizationState(): void {
		SpotifyAppRemote.authorized = false;
		SpotifyAppRemote.authorizationError = null;
	}

	private static clearConnectionState(): void {
		SpotifyAppRemote.connected = false;
		SpotifyAppRemote.connectionError = null;
	}

	private static createConfiguration() {
		return new SPTConfiguration(this.clientId, NSURL.URLWithString(this.redirectUri));
	}

	private static createAppRemote() {
		const appRemote = new SPTAppRemote(SpotifyAppRemote.configuration, SPTAppRemoteLogLevel.SPTAppRemoteLogLevelError);
		appRemote.delegate = SpotifyAppRemoteDelegate.new();

		return appRemote;
	}

	private static extractAccessTokenFromURL(url: NSURL): string {
		const parameters = SpotifyAppRemote.appRemote.authorizationParametersFromURL(url);

		if (parameters['error'] || parameters.objectForKey('error')) {
			throw parameters['error'] || parameters.objectForKey('error');
		}

		return parameters['access_token'] || parameters.objectForKey('access_token');
	}

	public static setAuthorizationParameters(url: NSURL): void {
		try {
			SpotifyAppRemote.accessToken = SpotifyAppRemote.extractAccessTokenFromURL(url);
			SpotifyAppRemote.appRemote.connectionParameters.accessToken = SpotifyAppRemote.accessToken;
			SpotifyAppRemote.authorized = true;
		} catch (exception) {
			SpotifyAppRemote.authorizationError = exception;
		}
	}

	public static async authorizeAndPlayURI(uri: string = ''): Promise<void> {
		return new Promise((resolve, reject) => {
			SpotifyAppRemote.clearAuthorizationState();
			SpotifyAppRemote.configuration = SpotifyAppRemote.createConfiguration();
			SpotifyAppRemote.appRemote = SpotifyAppRemote.createAppRemote();

			const isSpotifyInstalled = SpotifyAppRemote.appRemote.authorizeAndPlayURI(uri);
			if (!isSpotifyInstalled) {
				throw new Error('[iOS] SpotifyAppRemote: Spotify app is not installed');
			}

			let timeElapsed = 0;

			const intervalId = setInterval(() => {
				if (timeElapsed >= INTERVAL_LIMIT) {
					reject(new Error('[iOS] SpotifyAppRemote: Authorization timeout'));
				}

				if (SpotifyAppRemote.authorized) {
					clearInterval(intervalId);
					resolve();
				} else if (SpotifyAppRemote.authorizationError) {
					clearInterval(intervalId);
					reject(SpotifyAppRemote.authorizationError);
				}
			}, INTERVAL_DELAY);
		});
	}

	public static async connect(): Promise<void> {
		return new Promise((resolve, reject) => {
			SpotifyAppRemote.clearConnectionState();

			SpotifyAppRemote.appRemote.connect();

			let timeElapsed = 0;

			const intervalId = setInterval(() => {
				if (timeElapsed >= INTERVAL_LIMIT) {
					reject(new Error('[iOS] SpotifyAppRemote: Connection timeout'));
				}

				if (SpotifyAppRemote.connected) {
					clearInterval(intervalId);
					resolve();
				} else if (SpotifyAppRemote.connectionError) {
					clearInterval(intervalId);
					reject(SpotifyAppRemote.connectionError);
				}

				timeElapsed += INTERVAL_DELAY;
			}, INTERVAL_DELAY);
		});
	}

	public static async disconnect(): Promise<void> {
		return new Promise((resolve, reject) => {
			SpotifyAppRemote.connectionError = null;

			SpotifyAppRemote.appRemote.disconnect();

			let timeElapsed = 0;

			const intervalId = setInterval(() => {
				if (timeElapsed >= INTERVAL_LIMIT) {
					reject(new Error('[iOS] SpotifyAppRemote: Disconnect timeout'));
				}

				if (SpotifyAppRemote.connected || SpotifyAppRemote.connectionError) {
					clearInterval(intervalId);
					resolve();
				}

				timeElapsed += INTERVAL_DELAY;
			}, INTERVAL_DELAY);
		});
	}

	public static isConnected(): boolean {
		return SpotifyAppRemote.appRemote.connected;
	}

	public static async pause(): Promise<void> {
		return new Promise((resolve, reject) => {
			SpotifyAppRemote.appRemote.playerAPI.pause((_result: boolean, error: any) => {
				if (error) {
					reject(error);
				}
				resolve();
			});
		});
	}

	public static async play(uri: string): Promise<void> {
		return new Promise((resolve, reject) => {
			SpotifyAppRemote.appRemote.playerAPI.playCallback(uri, (_result: boolean, error: any) => {
				if (error) {
					reject(error);
				}
				resolve();
			});
		});
	}

	public static async resume(): Promise<void> {
		return new Promise((resolve, reject) => {
			SpotifyAppRemote.appRemote.playerAPI.resume((_result: boolean, error: any) => {
				if (error) {
					reject(error);
				}
				resolve();
			});
		});
	}

	public static async setRepeat(repeatMode: RepeatMode): Promise<void> {
		return new Promise((resolve, reject) => {
			SpotifyAppRemote.appRemote.playerAPI.setRepeatModeCallback(repeatMode, (_result: boolean, error: any) => {
				if (error) {
					reject(error);
				}
				resolve();
			});
		});
	}

	public static async setShuffle(enabled: boolean): Promise<void> {
		return new Promise((resolve, reject) => {
			SpotifyAppRemote.appRemote.playerAPI.setShuffleCallback(enabled, (_result: boolean, error: any) => {
				if (error) {
					reject(error);
				}
				resolve();
			});
		});
	}
}
