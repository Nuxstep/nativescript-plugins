import { SpotifyCommon } from '../common';

export declare class SpotifyAppRemote extends SpotifyCommon {
	constructor(clientId: string, redirectUri: string);
	public async connect(): Promise<boolean>;
	public async play(uri: string): Promise<boolean>;
}
