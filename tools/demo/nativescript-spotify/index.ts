import { ItemEventData, isIOS } from '@nativescript/core';
import { SpotifyAppRemote, ContentType, PlayerState, RepeatMode } from '@nuxstep/nativescript-spotify';
import { DemoSharedBase } from '../utils';

export class DemoSharedNativescriptSpotify extends DemoSharedBase {
	// UI
	public loading: boolean = false;
	public connected: boolean = false;
	public playerState = {
		track: {
			name: '',
			image: null,
			artist: {
				name: '',
			},
		},
	};
	public items = [];
	public listHeight = 0;

	public async connect() {
		try {
			this.set('loading', true);

			// If platform is iOS, we need to open the app and start playback
			// This is an iOS-specific limitation
			if (isIOS) {
				await SpotifyAppRemote.authorizeAndPlayURI();
			}

			await SpotifyAppRemote.connect();
			this.set('connected', true);
			console.log('Connected');

			this.set('loading', false);
		} catch (ex) {
			console.log(`Error: ${ex}`);
		}
	}

	public checkConnected() {
		if (!SpotifyAppRemote.isConnected()) {
			console.log('Spotify is not connected');
			this.set('connected', false);
			return;
		}
	}

	public async disconnect() {
		try {
			this.checkConnected();

			this.set('loading', true);

			await SpotifyAppRemote.disconnect();

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

			// PlayerState
			const state = await SpotifyAppRemote.getPlayerState();
			this.set('playerState', state);
			console.log(state);

			this.set('loading', false);
		} catch (ex) {
			console.log(`Error: ${ex}`);
		}
	}

	public async subscribeToPlayerState() {
		try {
			this.checkConnected();

			this.set('loading', true);

			SpotifyAppRemote.subscribeToPlayerState((playerState: PlayerState) => {
				this.set('playerState', playerState);
				console.log(playerState);
			});

			this.set('loading', false);
		} catch (ex) {
			console.log(`Error: ${ex}`);
		}
	}

	public async pause() {
		try {
			this.checkConnected();

			this.set('loading', true);

			await SpotifyAppRemote.pause();

			this.set('loading', false);
		} catch (ex) {
			console.log(`Error: ${ex}`);
		}
	}

	public async play() {
		try {
			this.checkConnected();

			this.set('loading', true);

			await SpotifyAppRemote.play('spotify:playlist:37i9dQZF1DX2sUQwD7tbmL');

			this.set('loading', false);
		} catch (ex) {
			console.log(`Error: ${ex}`);
		}
	}

	public async resume() {
		try {
			this.checkConnected();

			this.set('loading', true);

			await SpotifyAppRemote.resume();

			this.set('loading', false);
		} catch (ex) {
			console.log(`Error: ${ex}`);
		}
	}

	public async setRepeatModeToOff() {
		try {
			this.checkConnected();

			this.set('loading', true);

			await SpotifyAppRemote.setRepeat(RepeatMode.OFF);

			this.set('loading', false);
		} catch (ex) {
			console.log(`Error: ${ex}`);
		}
	}

	public async setRepeatModeToAll() {
		try {
			this.checkConnected();

			this.set('loading', true);

			await SpotifyAppRemote.setRepeat(RepeatMode.ALL);

			this.set('loading', false);
		} catch (ex) {
			console.log(`Error: ${ex}`);
		}
	}

	public async setRepeatModeToOne() {
		try {
			this.checkConnected();

			this.set('loading', true);

			await SpotifyAppRemote.setRepeat(RepeatMode.ONE);

			this.set('loading', false);
		} catch (ex) {
			console.log(`Error: ${ex}`);
		}
	}

	public async setShuffleToOn() {
		try {
			this.checkConnected();

			this.set('loading', true);

			await SpotifyAppRemote.setShuffle(true);

			this.set('loading', false);
		} catch (ex) {
			console.log(`Error: ${ex}`);
		}
	}

	public async setShuffleToOff() {
		try {
			this.checkConnected();

			this.set('loading', true);

			await SpotifyAppRemote.setShuffle(false);

			this.set('loading', false);
		} catch (ex) {
			console.log(`Error: ${ex}`);
		}
	}

	public async skipNext() {
		try {
			this.checkConnected();

			this.set('loading', true);

			await SpotifyAppRemote.skipNext();

			this.set('loading', false);
		} catch (ex) {
			console.log(`Error: ${ex}`);
		}
	}

	public async skipPrevious() {
		try {
			this.checkConnected();

			this.set('loading', true);

			await SpotifyAppRemote.skipPrevious();

			this.set('loading', false);
		} catch (ex) {
			console.log(`Error: ${ex}`);
		}
	}

	public async showRecommendedContentItems() {
		try {
			this.checkConnected();

			this.set('loading', true);

			// Get recommended content items
			const contentItems = await SpotifyAppRemote.getRecommendedContentItems(ContentType.DEFAULT);

			// Get first recommended content item (which usually is Recently Played)
			// and map its children
			const children = contentItems[0].children.map((child) => ({
				title: child.title,
				image: child.imageUri,
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
		await SpotifyAppRemote.play(this.items[args.index].uri);
	}
}
