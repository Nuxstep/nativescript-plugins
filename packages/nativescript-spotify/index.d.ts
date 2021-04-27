import { SpotifyAppRemoteCommon, PlayerState } from './common';
import { RepeatMode } from './src/common/RepeatMode';

/**
 * App remote allows you to control playback in the Spotify app
 *
 * @export
 * @class SpotifyAppRemote
 * @extends {SpotifyAppRemoteCommon}
 */
export declare class SpotifyAppRemote extends SpotifyAppRemoteCommon {
	/**
	 * Creates an instance of SpotifyAppRemote
	 * @param {string} clientId Spotify Client ID
	 * @param {string} redirectUri App Redirect URI
	 * @memberof SpotifyAppRemote
	 */
	constructor(clientId: string, redirectUri: string);

	/**
	 * Connect to Spotify App Remote
	 *
	 * @async
	 * @return {Promise<boolean>} Resolves to true when action is executed
	 * @memberof SpotifyAppRemote
	 */
	public async connect(): Promise<boolean>;

	/**
	 * Disconnect from Spotify App Remote
	 *
	 * @async
	 * @param {boolean} pauseBeforeDisconnect Whether to pause the playback before disconnecting
	 * @return {Promise<boolean>} Resolves to true when action is executed
	 * @memberof SpotifyAppRemote
	 */
	public async disconnect(pauseBeforeDisconnect: boolean): Promise<boolean>;

	/**
	 * Check if Spotify App Remote is currently connected
	 *
	 * @return {boolean} True if connected, false if not
	 * @memberof SpotifyAppRemote
	 */
	public isConnected(): boolean;

	/**
	 * Get the player state of the Spotify app
	 *
	 * @async
	 * @return {Promise<PlayerState>} Resolves to an instance of PlayerState
	 * @memberof SpotifyAppRemote
	 * @see PlayerState
	 */
	public async getPlayerState(): Promise<PlayerState>;

	/**
	 * Pause playback if it's current playing
	 *
	 * @async
	 * @return {Promise<boolean>} Resolves to true when action is executed
	 * @memberof SpotifyAppRemote
	 */
	public async pause(): Promise<boolean>;

	/**
	 * Play the given Spotify uri
	 *
	 * @async
	 * @param {string} uri uri to play
	 * @return {Promise<boolean>} Resolves to true when action is executed
	 * @memberof SpotifyAppRemote
	 */
	public async play(uri: string): Promise<boolean>;

	/**
	 * Resume playback if it's currently paused
	 *
	 * @async
	 * @return {Promise<boolean>} Resolves to true when action is executed
	 * @memberof SpotifyAppRemote
	 */
	public async resume(): Promise<boolean>;

	/**
	 * Skip to the next track in the currently playing context if there is one
	 *
	 * @async
	 * @return {Promise<boolean>} Resolves to true when action is executed
	 * @memberof SpotifyAppRemote
	 */
	public async skipNext(): Promise<boolean>;

	/**
	 * Restart the current track or, if current track has played for less than
	 * 3 seconds, skip to the previous track in the currently playing context
	 *
	 * @async
	 * @return {Promise<boolean>} Resolves to true when action is executed
	 * @memberof SpotifyAppRemote
	 */
	public async skipPrevious(): Promise<boolean>;

	/**
	 * Set repeat mode to repeatMode
	 *
	 * @async
	 * @param {RepeatMode} repeatMode Must be one of OFF, ALL, or ONE
	 * @return {Promise<boolean>} Resolves to true when action is executed
	 * @memberof SpotifyAppRemote
	 * @see RepeatMode
	 */
	public async setRepeat(repeatMode: RepeatMode): Promise<boolean>;
}
