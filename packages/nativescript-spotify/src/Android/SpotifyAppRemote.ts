import * as application from '@nativescript/core/application';
import { SpotifyAppRemoteCommon } from '../common/SpotifyAppRemoteCommon';
import { PlayerState } from '../common/PlayerState';
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

					onFailure(exception) {
						reject(exception);
					},
				})
			);
		});
	}

	public async connect(): Promise<void> {
		this.spotifyAppRemoteInstance = await this.requestAuthorization();
		return;
	}

	public async disconnect(pauseBeforeDisconnect: boolean): Promise<void> {
		if (pauseBeforeDisconnect) {
			await this.pause();
		}

		com.spotify.android.appremote.api.SpotifyAppRemote.disconnect(this.spotifyAppRemoteInstance);

		return;
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
			} catch (exception) {
				reject(exception);
			}
		});
	}

	public async getPlayerState(): Promise<PlayerState> {
		const data = await this._getPlayerState();
		return this.buildPlayerState(data);
	}

	public async pause(): Promise<void> {
		return new Promise((resolve, reject) => {
			try {
				const callResult = this.spotifyAppRemoteInstance.getPlayerApi().pause();

				callResult.setResultCallback(
					new com.spotify.protocol.client.CallResult.ResultCallback({
						onResult() {
							resolve();
						},
					})
				);
			} catch (exception) {
				reject(exception);
			}
		});
	}

	public async play(uri: string): Promise<void> {
		return new Promise((resolve, reject) => {
			try {
				const callResult = this.spotifyAppRemoteInstance.getPlayerApi().play(uri);

				callResult.setResultCallback(
					new com.spotify.protocol.client.CallResult.ResultCallback({
						onResult() {
							resolve();
						},
					})
				);
			} catch (exception) {
				reject(exception);
			}
		});
	}

	public async resume(): Promise<void> {
		return new Promise((resolve, reject) => {
			try {
				const callResult = this.spotifyAppRemoteInstance.getPlayerApi().resume();

				callResult.setResultCallback(
					new com.spotify.protocol.client.CallResult.ResultCallback({
						onResult() {
							resolve();
						},
					})
				);
			} catch (exception) {
				reject(exception);
			}
		});
	}

	public async skipNext(): Promise<void> {
		return new Promise((resolve, reject) => {
			try {
				const callResult = this.spotifyAppRemoteInstance.getPlayerApi().skipNext();

				callResult.setResultCallback(
					new com.spotify.protocol.client.CallResult.ResultCallback({
						onResult() {
							resolve();
						},
					})
				);
			} catch (exception) {
				reject(exception);
			}
		});
	}

	public async skipPrevious(): Promise<void> {
		return new Promise((resolve, reject) => {
			try {
				const callResult = this.spotifyAppRemoteInstance.getPlayerApi().skipPrevious();

				callResult.setResultCallback(
					new com.spotify.protocol.client.CallResult.ResultCallback({
						onResult() {
							resolve();
						},
					})
				);
			} catch (exception) {
				reject(exception);
			}
		});
	}

	public async setRepeat(repeatMode: RepeatMode): Promise<void> {
		return new Promise((resolve, reject) => {
			try {
				const callResult = this.spotifyAppRemoteInstance.getPlayerApi().setRepeat(repeatMode);

				callResult.setResultCallback(
					new com.spotify.protocol.client.CallResult.ResultCallback({
						onResult() {
							resolve();
						},
					})
				);
			} catch (exception) {
				reject(exception);
			}
		});
	}
}
