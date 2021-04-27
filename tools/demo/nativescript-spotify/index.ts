import { DemoSharedBase } from '../utils';
import { SpotifyAppRemote, RepeatMode } from '@nuxstep/nativescript-spotify';

export class DemoSharedNativescriptSpotify extends DemoSharedBase {
	// UI
	public loading: boolean = false;
	public connected: boolean = false;

	// State
	private spotify: SpotifyAppRemote;

	public async connect() {
		this.spotify = new SpotifyAppRemote('b994fed6744b4cf990f41f33cd5d9fc6', 'plugindemo://spotify');

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

			await this.spotify.disconnect(true);

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
}
