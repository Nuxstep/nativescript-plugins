import { DemoSharedBase } from '../utils';
import { SpotifyAppRemote } from '@nuxstep/nativescript-spotify';

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

	public async play() {
		try {
			if (!this.spotify.isConnected()) {
				console.log('Spotify is not connected');
				this.set('connected', false);
				return;
			}

			this.set('loading', true);

			await this.spotify.play('spotify:playlist:37i9dQZF1DX2sUQwD7tbmL');

			this.set('loading', false);
		} catch (ex) {
			console.log(`Error: ${ex}`);
		}
	}
}
