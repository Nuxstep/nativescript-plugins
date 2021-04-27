import * as application from '@nativescript/core/application';
import { SpotifyAppRemoteCommon, PlayerState } from '../../common';
import { RepeatMode } from '../common/RepeatMode';

export class SpotifyAppRemote extends SpotifyAppRemoteCommon {
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

	public async disconnect(pauseBeforeDisconnect: boolean): Promise<boolean> {
		if (pauseBeforeDisconnect) {
			await this.pause();
		}

		com.spotify.android.appremote.api.SpotifyAppRemote.disconnect(this.spotifyAppRemoteInstance);

		return true;
	}

	public isConnected(): boolean {
		return this.spotifyAppRemoteInstance.isConnected();
	}

	public async _getPlayerState(): Promise<object> {
		return new Promise((resolve, reject) => {
			try {
				const callResult = this.spotifyAppRemoteInstance.getPlayerApi().getPlayerState();

				callResult.setResultCallback(
					new com.spotify.protocol.client.CallResult.ResultCallback({
						onResult(data) {
							resolve(data);
						},
					})
				);
			} catch (ex) {
				reject(ex);
			}
		});
	}

	public async getPlayerState(): Promise<PlayerState> {
		const data = await this._getPlayerState();
		return this.buildPlayerState(data);
	}

	public async pause(): Promise<boolean> {
		await this.spotifyAppRemoteInstance.getPlayerApi().pause();
		return true;
	}

	public async play(uri: string): Promise<boolean> {
		await this.spotifyAppRemoteInstance.getPlayerApi().play(uri);
		return true;
	}

	public async resume(): Promise<boolean> {
		await this.spotifyAppRemoteInstance.getPlayerApi().resume();
		return true;
	}

	public async skipNext(): Promise<boolean> {
		await this.spotifyAppRemoteInstance.getPlayerApi().skipNext();
		return true;
	}

	public async skipPrevious(): Promise<boolean> {
		await this.spotifyAppRemoteInstance.getPlayerApi().skipPrevious();
		return true;
	}

	public async setRepeat(repeatMode: RepeatMode): Promise<boolean> {
		await this.spotifyAppRemoteInstance.getPlayerApi().setRepeat(repeatMode);
		return true;
	}
}
