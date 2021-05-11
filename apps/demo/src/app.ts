import { Application, isIOS } from '@nativescript/core';
import { SpotifyAppRemote } from '@nuxstep/nativescript-spotify';
import * as credentials from './credentials.json';

/**
 * SpotifyAppRemote setup
 */
SpotifyAppRemote.setClientId(credentials.clientId);
SpotifyAppRemote.setRedirectUri('plugindemo://spotify-login-callback');

/**
 * Implement a custom AppDelegate on iOS so we can get the access token
 * returned from Spotify and store it on SpotifyAppRemote class
 */
if (isIOS) {
	@NativeClass()
	class AppDelegate extends UIResponder implements UIApplicationDelegate {
		public static ObjCProtocols = [UIApplicationDelegate];

		applicationOpenURLOptions(_application: UIApplication, url: NSURL, _options: any): boolean {
			SpotifyAppRemote.setAuthorizationParameters(url);
			return true;
		}
	}
	Application.ios.delegate = AppDelegate;
}

Application.run({ moduleName: 'app-root' });
