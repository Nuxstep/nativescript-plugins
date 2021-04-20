import { DemoSharedBase } from '../utils';
import { SpotifyAppRemote } from '@nuxstep/nativescript-spotify';

export class DemoSharedNativescriptSpotify extends DemoSharedBase {
	async requestAuthorization() {
		const spotify = new SpotifyAppRemote('b994fed6744b4cf990f41f33cd5d9fc6', 'plugindemo://spotify');

		try {
			const spotifyAppRemote = await spotify.requestAuthorization();
			console.log('Authorized');
			console.log(spotifyAppRemote);
		} catch (ex) {
			console.log(`Error: ${ex}`);
		}
	}
}
