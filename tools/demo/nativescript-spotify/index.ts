import { DemoSharedBase } from '../utils';
import { SpotifyAppRemote } from '@nuxstep/nativescript-spotify';

export class DemoSharedNativescriptSpotify extends DemoSharedBase {
	// UI
	public loading: boolean = false;
	public authorized: boolean = false;

	// State
	private spotify: SpotifyAppRemote;

	public async connect() {
		this.spotify = new SpotifyAppRemote('b994fed6744b4cf990f41f33cd5d9fc6', 'plugindemo://spotify');

		try {
			this.set('loading', true);

			await this.spotify.connect();
			this.set('authorized', true);
			console.log('Authorized');

			this.set('loading', false);
		} catch (ex) {
			console.log(`Error: ${ex}`);
		}
	}

	public async play() {
		try {
			this.set('loading', true);

			await this.spotify.play('spotify:playlist:37i9dQZF1DX2sUQwD7tbmL');

			this.set('loading', false);
		} catch (ex) {
			console.log(`Error: ${ex}`);
		}
	}
}
