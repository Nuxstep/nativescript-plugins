import { setInterval, clearInterval } from '@nativescript/core/timer';
import { SpotifyAppRemoteDelegate } from './SpotifyAppRemoteDelegate';
import { SpotifyAppRemoteCommon } from '../common/SpotifyAppRemoteCommon';

export class SpotifyAppRemote extends SpotifyAppRemoteCommon {
	private static clientId: string;
	private static redirectUri: string;
	private static accessToken: string;
	private static authorized: boolean = false;
	private static authorizationError: any = null;
	private static configuration: SPTConfiguration;
	private static appRemote: SPTAppRemote;

	public static setClientId(clientId: string): void {
		SpotifyAppRemote.clientId = clientId;
	}

	public static setRedirectUri(redirectUri: string): void {
		SpotifyAppRemote.redirectUri = redirectUri;
	}

	private static createConfiguration() {
		return new SPTConfiguration(this.clientId, NSURL.URLWithString(this.redirectUri));
	}

	private static createAppRemote() {
		const appRemote = new SPTAppRemote(SpotifyAppRemote.configuration, SPTAppRemoteLogLevel.SPTAppRemoveLogLevelError);
		// TODO: Implement SPTAppRemoteDelegate, for now it generates the error
		// TODO: unrecognized selector sent to instance 0x283f5c510
		// appRemote.delegate = new SpotifyAppRemoteDelegate();

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
			SpotifyAppRemote.configuration = SpotifyAppRemote.createConfiguration();

			SpotifyAppRemote.appRemote = SpotifyAppRemote.createAppRemote();

			const isSpotifyInstalled = SpotifyAppRemote.appRemote.authorizeAndPlayURI(uri);
			if (!isSpotifyInstalled) {
				throw new Error('[iOS] SpotifyAppRemote: Spotify app is not installed');
			}

			const intervalId = setInterval(() => {
				if (SpotifyAppRemote.authorized) {
					clearInterval(intervalId);
					resolve();
				} else if (SpotifyAppRemote.authorizationError) {
					clearInterval(intervalId);
					reject(SpotifyAppRemote.authorizationError);
				}
			}, 3000);
		});
	}

	public static async connect(): Promise<void> {
		SpotifyAppRemote.appRemote.connect();
	}
}
