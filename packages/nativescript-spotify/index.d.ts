import { SpotifyCommon } from '../common';

export declare class SpotifyAppRemote extends SpotifyCommon {
	constructor(clientId: string, redirectUri: string);
	public async requestAuthorization(): Promise;
}
