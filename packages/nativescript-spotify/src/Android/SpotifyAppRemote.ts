import * as application from '@nativescript/core/application';
import { SpotifyCommon } from '../../common';

const _connectionParams = com.spotify.android.appremote.api.ConnectionParams;
const _connector = com.spotify.android.appremote.api.Connector;
const _spotifyAppRemote = com.spotify.android.appremote.api.SpotifyAppRemote;

export class SpotifyAppRemote extends SpotifyCommon {
	private clientId: string;
	private redirectUri: string;

	constructor(clientId: string, redirectUri: string) {
		super();
		this.clientId = clientId;
		this.redirectUri = redirectUri;
	}

	private createConnectionParams() {
		return new _connectionParams.Builder(this.clientId).setRedirectUri(this.redirectUri).showAuthView(true).build();
	}

	public requestAuthorization() {
		return new Promise((resolve, reject) => {
			_spotifyAppRemote.connect(
				application.android.context,
				this.createConnectionParams(),
				new _connector.ConnectionListener({
					onConnected(spotifyAppRemote: typeof _spotifyAppRemote) {
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
