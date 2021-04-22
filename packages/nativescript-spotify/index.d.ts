import { SpotifyCommon } from '../common';

export declare class SpotifyAppRemote extends SpotifyCommon {
	constructor(clientId: string, redirectUri: string);
	public async connect(): Promise<boolean>;
	public isConnected(): boolean;
	public async pause(): Promise<boolean>;
	public async play(uri: string): Promise<boolean>;
	public async resume(): Promise<boolean>;
	public async skipNext(): Promise<boolean>;
	public async skipPrevious(): Promise<boolean>;
}
