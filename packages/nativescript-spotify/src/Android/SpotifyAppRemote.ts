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

	private setSpotifyAppRemoteInstance(spotifyAppRemoteInstance: com.spotify.android.appremote.api.SpotifyAppRemote) {
		this.spotifyAppRemoteInstance = spotifyAppRemoteInstance;
	}

	private createConnectionParams(): com.spotify.android.appremote.api.ConnectionParams {
		return new com.spotify.android.appremote.api.ConnectionParams.Builder(this.clientId).setRedirectUri(this.redirectUri).showAuthView(true).build();
	}

	private requestAuthorization(): Promise<com.spotify.android.appremote.api.SpotifyAppRemote> {
		return new Promise((resolve, reject) => {
			com.spotify.android.appremote.api.SpotifyAppRemote.connect(
				application.android.context,
				this.createConnectionParams(),
				new com.spotify.android.appremote.api.Connector.ConnectionListener({
					onConnected(spotifyAppRemote: com.spotify.android.appremote.api.SpotifyAppRemote) {
						resolve(spotifyAppRemote);
					},

					onFailure(ex) {
						reject(ex);
					},
				})
			);
		});
	}

	public async connect(): Promise<boolean> {
		this.spotifyAppRemoteInstance = await this.requestAuthorization();
		return true;
	}

	public isConnected(): boolean {
		return this.spotifyAppRemoteInstance.isConnected();
	}

	public async play(uri: string): Promise<boolean> {
		await this.spotifyAppRemoteInstance.getPlayerApi().play(uri);
		return true;
	}
}
