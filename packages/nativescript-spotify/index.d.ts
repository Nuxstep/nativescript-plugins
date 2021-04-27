import { SpotifyAppRemoteCommon, PlayerState } from './common';

export declare class SpotifyAppRemote extends SpotifyAppRemoteCommon {
	constructor(clientId: string, redirectUri: string);
	public async connect(): Promise<boolean>;
	public async disconnect(pauseBeforeDisconnect: boolean): Promise<boolean>;
	public isConnected(): boolean;
	public async getPlayerState(): Promise<PlayerState>;
	public async pause(): Promise<boolean>;
	public async play(uri: string): Promise<boolean>;
	public async resume(): Promise<boolean>;
	public async skipNext(): Promise<boolean>;
	public async skipPrevious(): Promise<boolean>;
}
