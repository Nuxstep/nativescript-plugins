import { SpotifyAppRemote } from './SpotifyAppRemote';

// @ts-ignore
export const SpotifyAppRemoteDelegate = NSObject.extend(
	{
		appRemoteDidEstablishConnection(_appRemote: SPTAppRemote): void {
			SpotifyAppRemote.setConnected(true);
			console.log('[iOS] SpotifyAppRemote: App remote did establish connection');
		},

		appRemoteDidFailConnectionAttemptWithError(_appRemote: SPTAppRemote, error: NSError): void {
			SpotifyAppRemote.setConnected(false);
			SpotifyAppRemote.setConnectionError(error);
			console.log('[iOS] SpotifyAppRemote: App remote did fail connection attempt with error');
		},

		appRemoteDidDisconnectWithError(_appRemote: SPTAppRemote, error: NSError): void {
			SpotifyAppRemote.setConnected(false);
			SpotifyAppRemote.setConnectionError(error);
			console.log(`[IOS] SpotifyAppRemote: App remote did disconnect${error ? ' with error' : ''}`);
		},
	},
	{
		// @ts-ignore
		protocols: [SPTAppRemoteDelegate],
	}
);
