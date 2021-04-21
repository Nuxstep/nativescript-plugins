import * as application from '@nativescript/core/application';
import { SpotifyCommon } from '../../common';

export class SpotifyAppRemote extends SpotifyCommon {
	private clientId: string;
	private redirectUri: string;
	private spotifyAppRemoteInstance: com.spotify.android.appremote.api.SpotifyAppRemote;

	constructor(clientId: string, redirectUri: string) {
		super();
		this.clientId = clientId;
		this.redirectUri = redirectUri;
	}

	private createConnectionParams(): com.spotify.android.appremote.api.ConnectionParams {
		return new com.spotify.android.appremote.api.ConnectionParams.Builder(this.clientId).setRedirectUri(this.redirectUri).showAuthView(true).build();
	}

	public requestAuthorization(): Promise<boolean> {
		return new Promise((resolve, reject) => {
			com.spotify.android.appremote.api.SpotifyAppRemote.connect(
				application.android.context,
				this.createConnectionParams(),
				new com.spotify.android.appremote.api.Connector.ConnectionListener({
					onConnected(spotifyAppRemote: com.spotify.android.appremote.api.SpotifyAppRemote) {
						this.spotifyAppRemoteInstance = spotifyAppRemote;
						resolve(true);
					},

					onFailure(ex) {
						reject(ex);
					},
				})
			);
		});
	}
}
