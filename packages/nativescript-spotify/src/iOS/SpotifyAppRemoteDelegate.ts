import { SpotifyAppRemote } from './SpotifyAppRemote';

@NativeClass()
export class SpotifyAppRemoteDelegate implements SPTAppRemoteDelegate {
	public static ObjCProtocols = [SPTAppRemoteDelegate];

	appRemoteDidEstablishConnection(appRemote: SPTAppRemote): void {
		console.log('[iOS] SpotifyAppRemote: App remote did establish connection');
	}

	appRemotedidFailConnectionAttemptWithError(appRemote: SPTAppRemote, error: NSError): void {
		console.log('[iOS] SpotifyAppRemote: App remote did fail connection attempt with error');
		throw error;
	}

	appRemotedidDisconnectWithError(appRemote: SPTAppRemote, error: NSError): void {
		console.log('[iOS] SpotifyAppRemote: App remote did disconnect with error');
		throw error;
	}
}
