import * as application from '@nativescript/core/application';
import { ContentItemsBuilder } from './ContentItemsBuilder';
import { PlayerStateBuilder } from './PlayerStateBuilder';
import { SpotifyAppRemoteCommon } from '../common/SpotifyAppRemoteCommon';
import { ContentType } from '../common/ContentType';
import { ContentItem } from '../common/ContentItem';
import { PlayerState } from '../common/PlayerState';
import { RepeatMode } from '../common/RepeatMode';

export class SpotifyAppRemote extends SpotifyAppRemoteCommon {
	private static clientId: string;
	private static redirectUri: string;
	private static appRemoteInstance: com.spotify.android.appremote.api.SpotifyAppRemote;

	public static setClientId(clientId: string): void {
		SpotifyAppRemote.clientId = clientId;
	}

	public static setRedirectUri(redirectUri: string): void {
		SpotifyAppRemote.redirectUri = redirectUri;
	}

	private static createConnectionParams(): com.spotify.android.appremote.api.ConnectionParams {
		return new com.spotify.android.appremote.api.ConnectionParams.Builder(SpotifyAppRemote.clientId).setRedirectUri(this.redirectUri).showAuthView(true).build();
	}

	private static requestAuthorization(): Promise<com.spotify.android.appremote.api.SpotifyAppRemote> {
		return new Promise((resolve, reject) => {
			com.spotify.android.appremote.api.SpotifyAppRemote.connect(
				application.android.context,
				SpotifyAppRemote.createConnectionParams(),
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

	public static async connect(): Promise<void> {
		SpotifyAppRemote.appRemoteInstance = await SpotifyAppRemote.requestAuthorization();
		return;
	}

	public static async disconnect(): Promise<void> {
		com.spotify.android.appremote.api.SpotifyAppRemote.disconnect(SpotifyAppRemote.appRemoteInstance);
		return;
	}

	public static isConnected(): boolean {
		return SpotifyAppRemote.appRemoteInstance.isConnected();
	}

	private static async getNativePlayerState(): Promise<any> {
		return new Promise((resolve, reject) => {
			try {
				const callResult = SpotifyAppRemote.appRemoteInstance.getPlayerApi().getPlayerState();

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

	public static async getPlayerState(): Promise<PlayerState> {
		const data = await SpotifyAppRemote.getNativePlayerState();
		return PlayerStateBuilder.build(data);
	}

	public static subscribeToPlayerState(callback: (playerState: PlayerState) => void): void {
		this.appRemoteInstance
			.getPlayerApi()
			.subscribeToPlayerState()
			.setEventCallback(
				new com.spotify.protocol.client.Subscription.EventCallback({
					async onEvent(data: com.spotify.protocol.types.PlayerState) {
						const playerState = await PlayerStateBuilder.build(data);
						callback(playerState);
					},
				})
			);
	}

	public static async pause(): Promise<void> {
		return new Promise((resolve, reject) => {
			try {
				const callResult = SpotifyAppRemote.appRemoteInstance.getPlayerApi().pause();

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

	public static async play(uri: string): Promise<void> {
		return new Promise((resolve, reject) => {
			try {
				const callResult = SpotifyAppRemote.appRemoteInstance.getPlayerApi().play(uri);

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

	public static async resume(): Promise<void> {
		return new Promise((resolve, reject) => {
			try {
				const callResult = SpotifyAppRemote.appRemoteInstance.getPlayerApi().resume();

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

	public static async setRepeat(repeatMode: RepeatMode): Promise<void> {
		return new Promise((resolve, reject) => {
			try {
				const callResult = SpotifyAppRemote.appRemoteInstance.getPlayerApi().setRepeat(repeatMode);

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

	public static async setShuffle(enable: boolean): Promise<void> {
		return new Promise((resolve, reject) => {
			try {
				const callResult = SpotifyAppRemote.appRemoteInstance.getPlayerApi().setShuffle(enable);

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

	public static async skipNext(): Promise<void> {
		return new Promise((resolve, reject) => {
			try {
				const callResult = SpotifyAppRemote.appRemoteInstance.getPlayerApi().skipNext();

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

	public static async skipPrevious(): Promise<void> {
		return new Promise((resolve, reject) => {
			try {
				const callResult = SpotifyAppRemote.appRemoteInstance.getPlayerApi().skipPrevious();

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

	private static async getNativeRecommendedContentItems(type: ContentType): Promise<com.spotify.protocol.types.ListItems> {
		return new Promise((resolve, reject) => {
			try {
				const callResult = SpotifyAppRemote.appRemoteInstance.getContentApi().getRecommendedContentItems(type);

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

	public static async getRecommendedContentItems(type: ContentType): Promise<Array<ContentItem>> {
		const nativeContentItems = await SpotifyAppRemote.getNativeRecommendedContentItems(type);
		const contentItems = await ContentItemsBuilder.build(nativeContentItems.items);
		return contentItems;
	}

	public static async getNativeChildrenOfItem(item: com.spotify.protocol.types.ListItem, perpage: number, offset: number): Promise<com.spotify.protocol.types.ListItems> {
		return new Promise((resolve, reject) => {
			try {
				const callResult = SpotifyAppRemote.appRemoteInstance.getContentApi().getChildrenOfItem(item, perpage, offset);

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

	public static async getImage(imageUri: string): Promise<android.graphics.Bitmap> {
		return new Promise((resolve, reject) => {
			try {
				const callResult = SpotifyAppRemote.appRemoteInstance.getImagesApi().getImage(new com.spotify.protocol.types.ImageUri(imageUri));

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
}
