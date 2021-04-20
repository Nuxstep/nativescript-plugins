import { NativescriptSpotifyCommon } from './common';

export declare class NativescriptSpotify extends NativescriptSpotifyCommon {
	constructor(clientId: string, redirectUri: string);
	public async requestAuthorization();
}
