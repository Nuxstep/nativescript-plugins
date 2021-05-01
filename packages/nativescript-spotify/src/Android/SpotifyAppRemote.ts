import * as application from '@nativescript/core/application';
import { SpotifyAppRemoteCommon } from '../common/SpotifyAppRemoteCommon';
import { ContentType } from '../common/ContentType';
import { ListItem } from '../common/ListItem';
import { ListItems } from '../common/ListItems';
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

	public async disconnect(): Promise<void> {
		com.spotify.android.appremote.api.SpotifyAppRemote.disconnect(this.spotifyAppRemoteInstance);
		return;
	}

	public isConnected(): boolean {
		return this.spotifyAppRemoteInstance.isConnected();
	}

	private async getNativePlayerState(): Promise<object> {
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
		const data = await this.getNativePlayerState();
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

	public async setShuffle(enable: boolean): Promise<void> {
		return new Promise((resolve, reject) => {
			try {
				const callResult = this.spotifyAppRemoteInstance.getPlayerApi().setShuffle(enable);

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

	private async getNativeRecommendedContentItems(type: ContentType): Promise<any> {
		return new Promise((resolve, reject) => {
			try {
				const callResult = this.spotifyAppRemoteInstance.getContentApi().getRecommendedContentItems(type);

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

	public async getRecommendedContentItems(type: ContentType): Promise<ListItems> {
		const data = await this.getNativeRecommendedContentItems(type);
		return this.buildListItems(data);
	}

	private async getNativeChildrenOfItem(item: ListItem, perpage: number, offset: number): Promise<any> {
		return new Promise((resolve, reject) => {
			try {
				const nativeListItem = new com.spotify.protocol.types.ListItem(item.id, item.uri, new com.spotify.protocol.types.ImageUri(item.imageUri.raw), item.title, item.subtitle, item.playable, item.hasChildren);

				const callResult = this.spotifyAppRemoteInstance.getContentApi().getChildrenOfItem(nativeListItem, perpage, offset);

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

	public async getChildrenOfItem(item: ListItem, perpage: number, offset: number): Promise<ListItems> {
		const data = await this.getNativeChildrenOfItem(item, perpage, offset);
		return this.buildListItems(data);
	}
}
