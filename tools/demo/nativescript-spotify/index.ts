import { ItemEventData } from '@nativescript/core';
import { SpotifyAppRemote, ContentType, RepeatMode } from '@nuxstep/nativescript-spotify';
import { DemoSharedBase } from '../utils';
import * as credentials from './credentials.json';

export class DemoSharedNativescriptSpotify extends DemoSharedBase {
	// UI
	public loading: boolean = false;
	public connected: boolean = false;
	public items = [];
	public listHeight = 0;

	// State
	private spotify: SpotifyAppRemote;

	public async connect() {
		this.spotify = new SpotifyAppRemote(credentials.clientId, 'plugindemo://spotify');

		try {
			this.set('loading', true);

			await this.spotify.connect();
			this.set('connected', true);
			console.log('Connected');

			this.set('loading', false);
		} catch (ex) {
			console.log(`Error: ${ex}`);
		}
	}

	public checkConnected() {
		if (!this.spotify.isConnected()) {
			console.log('Spotify is not connected');
			this.set('connected', false);
			return;
		}
	}

	public async disconnect() {
		try {
			this.checkConnected();

			this.set('loading', true);

			await this.spotify.disconnect();

			this.set('loading', false);
			this.set('connected', false);
		} catch (ex) {
			console.log(`Error: ${ex}`);
		}
	}

	public async getPlayerState() {
		try {
			this.checkConnected();

			this.set('loading', true);

			const state = await this.spotify.getPlayerState();
			console.log(state);

			this.set('loading', false);
		} catch (ex) {
			console.log(`Error: ${ex}`);
		}
	}

	public async pause() {
		try {
			this.checkConnected();

			this.set('loading', true);

			await this.spotify.pause();

			this.set('loading', false);
		} catch (ex) {
			console.log(`Error: ${ex}`);
		}
	}

	public async play() {
		try {
			this.checkConnected();

			this.set('loading', true);

			await this.spotify.play('spotify:playlist:37i9dQZF1DX2sUQwD7tbmL');

			this.set('loading', false);
		} catch (ex) {
			console.log(`Error: ${ex}`);
		}
	}

	public async resume() {
		try {
			this.checkConnected();

			this.set('loading', true);

			await this.spotify.resume();

			this.set('loading', false);
		} catch (ex) {
			console.log(`Error: ${ex}`);
		}
	}

	public async setRepeatModeToOff() {
		try {
			this.checkConnected();

			this.set('loading', true);

			await this.spotify.setRepeat(RepeatMode.OFF);

			this.set('loading', false);
		} catch (ex) {
			console.log(`Error: ${ex}`);
		}
	}

	public async setRepeatModeToAll() {
		try {
			this.checkConnected();

			this.set('loading', true);

			await this.spotify.setRepeat(RepeatMode.ALL);

			this.set('loading', false);
		} catch (ex) {
			console.log(`Error: ${ex}`);
		}
	}

	public async setRepeatModeToOne() {
		try {
			this.checkConnected();

			this.set('loading', true);

			await this.spotify.setRepeat(RepeatMode.ONE);

			this.set('loading', false);
		} catch (ex) {
			console.log(`Error: ${ex}`);
		}
	}

	public async setShuffleToOn() {
		try {
			this.checkConnected();

			this.set('loading', true);

			await this.spotify.setShuffle(true);

			this.set('loading', false);
		} catch (ex) {
			console.log(`Error: ${ex}`);
		}
	}

	public async setShuffleToOff() {
		try {
			this.checkConnected();

			this.set('loading', true);

			await this.spotify.setShuffle(false);

			this.set('loading', false);
		} catch (ex) {
			console.log(`Error: ${ex}`);
		}
	}

	public async skipNext() {
		try {
			this.checkConnected();

			this.set('loading', true);

			await this.spotify.skipNext();

			this.set('loading', false);
		} catch (ex) {
			console.log(`Error: ${ex}`);
		}
	}

	public async skipPrevious() {
		try {
			this.checkConnected();

			this.set('loading', true);

			await this.spotify.skipPrevious();

			this.set('loading', false);
		} catch (ex) {
			console.log(`Error: ${ex}`);
		}
	}

	public async showRecommendedContentItems() {
		try {
			this.checkConnected();

			this.set('loading', true);

			// Get recommended content
			const contentItems = await this.spotify.getRecommendedContentItems(ContentType.DEFAULT);

			// Get children list
			const childrenList = await this.spotify.getChildrenOfItem(contentItems.items[0], 6, 0);

			// Map children
			const children = childrenList.items.map((child) => ({
				title: child.title,
				image: child.imageUri.raw,
				uri: child.uri,
			}));

			this.set('items', children);
			this.set('listHeight', 60 * children.length);

			this.set('loading', false);
		} catch (ex) {
			console.log(`Error: ${ex}`);
		}
	}

	public async onItemTap(args: ItemEventData) {
		await this.spotify.play(this.items[args.index].uri);
	}
}
