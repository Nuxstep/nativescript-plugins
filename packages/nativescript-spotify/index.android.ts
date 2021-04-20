import * as application from '@nativescript/core/application';
import { NativescriptSpotifyCommon } from './common';

const ConnectionParams = com.spotify.android.appremote.api.ConnectionParams;
const Connector = com.spotify.android.appremote.api.Connector;
const SpotifyAppRemote = com.spotify.android.appremote.api.SpotifyAppRemote;

export class NativescriptSpotify extends NativescriptSpotifyCommon {
	private clientId: string;
	private redirectUri: string;

	constructor(clientId: string, redirectUri: string) {
		super();
		this.clientId = clientId;
		this.redirectUri = redirectUri;
	}

	private createConnectionParams() {
		return new ConnectionParams.Builder(this.clientId).setRedirectUri(this.redirectUri).showAuthView(true).build();
	}

	public requestAuthorization() {
		return new Promise((resolve, reject) => {
			SpotifyAppRemote.connect(
				application.android.context,
				this.createConnectionParams(),
				new Connector.ConnectionListener({
					onConnected(spotifyAppRemote: typeof SpotifyAppRemote) {
						resolve(spotifyAppRemote);
					},

					onFailure(ex) {
						reject(ex);
					},
				})
			);
		});
	}
}
