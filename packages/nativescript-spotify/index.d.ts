import { SpotifyAppRemoteCommon } from './src/common/SpotifyAppRemoteCommon';

/**
 * App remote allows you to control playback in the Spotify app
 *
 * @export
 * @class SpotifyAppRemote
 * @extends {SpotifyAppRemoteCommon}
 */
export class SpotifyAppRemote extends SpotifyAppRemoteCommon {
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

/**
 * Track album
 *
 * @export
 * @class Album
 */
export class Album {
	/**
	 * Album name
	 *
	 * @type {string}
	 * @memberof Album
	 */
	public name: string;

	/**
	 * Album URI
	 *
	 * @type {string}
	 * @memberof Album
	 */
	public uri: string;

	/**
	 * Creates an instance of Album
	 *
	 * @param {string} name Album name
	 * @param {string} uri Album URI
	 * @memberof Album
	 */
	constructor(name: string, uri: string);
}

/**
 * Track artist
 *
 * @export
 * @class Artist
 */
export class Artist {
	/**
	 * Artist name
	 *
	 * @type {string}
	 * @memberof Artist
	 */
	public name: string;

	/**
	 * Artist URI
	 *
	 * @type {string}
	 * @memberof Artist
	 */
	public uri: string;

	/**
	 * Creates an instance of Artist
	 *
	 * @param {string} name Artist name
	 * @param {string} uri Artist URI
	 * @memberof Artist
	 */
	constructor(name: string, uri: string);
}

/**
 * Track image URI
 *
 * @export
 * @class ImageUri
 */
export class ImageUri {
	/**
	 * Raw image URI
	 *
	 * @type {string}
	 * @memberof ImageUri
	 */
	public raw: string;

	/**
	 * Creates an instance of ImageUri
	 *
	 * @param {string} raw Raw image URI
	 * @memberof ImageUri
	 */
	constructor(raw: string);
}

/**
 * Player options
 *
 * @export
 * @class PlayerOptions
 */
export class PlayerOptions {
	/**
	 * Whether player is shuffling
	 *
	 * @type {boolean}
	 * @memberof PlayerOptions
	 */
	public isShuffling: boolean;

	/**
	 * Repeat mode
	 *
	 * @type {RepeatMode}
	 * @memberof PlayerOptions
	 * @see RepeatMode
	 */
	public repeatMode: RepeatMode;

	/**
	 * Creates an instance of PlayerOptions
	 *
	 * @param {boolean} isShuffling Whether player is shuffling
	 * @param {RepeatMode} repeatMode Repeat mode
	 * @memberof PlayerOptions
	 */
	constructor(isShuffling: boolean, repeatMode: RepeatMode);
}

/**
 * Player restrictions
 *
 * @export
 * @class PlayerRestrictions
 */
export class PlayerRestrictions {
	/**
	 * Can skip next
	 *
	 * @type {boolean}
	 * @memberof PlayerRestrictions
	 */
	public canSkipNext: boolean;

	/**
	 * Can skip previous
	 *
	 * @type {boolean}
	 * @memberof PlayerRestrictions
	 */
	public canSkipPrev: boolean;

	/**
	 * Can repeat track
	 *
	 * @type {boolean}
	 * @memberof PlayerRestrictions
	 */
	public canRepeatTrack: boolean;

	/**
	 * Can repeat context
	 *
	 * @type {boolean}
	 * @memberof PlayerRestrictions
	 */
	public canRepeatContext: boolean;

	/**
	 * Can toggle shuffle
	 *
	 * @type {boolean}
	 * @memberof PlayerRestrictions
	 */
	public canToggleShuffle: boolean;

	/**
	 * Can seek
	 *
	 * @type {boolean}
	 * @memberof PlayerRestrictions
	 */
	public canSeek: boolean;

	/**
	 * Creates an instance of PlayerRestrictions
	 *
	 * @param {boolean} canSkipNext Can skip next
	 * @param {boolean} canSkipPrev Can skip previous
	 * @param {boolean} canRepeatTrack Can repeat track
	 * @param {boolean} canRepeatContext Can repeat context
	 * @param {boolean} canToggleShuffle Can toggle shuffle
	 * @param {boolean} canSeek Can seek
	 * @memberof PlayerRestrictions
	 */
	constructor(canSkipNext: boolean, canSkipPrev: boolean, canRepeatTrack: boolean, canRepeatContext: boolean, canToggleShuffle: boolean, canSeek: boolean);
}

/**
 * Player state
 *
 * @export
 * @class PlayerState
 */
export class PlayerState {
	/**
	 * A track currently associated with this player state or null if there is none
	 *
	 * @type {Track}
	 * @memberof PlayerState
	 */
	public track: Track;

	/**
	 * True if the state is paused
	 *
	 * @type {boolean}
	 * @memberof PlayerState
	 */
	public isPaused: boolean;

	/**
	 * Playback speed relative to wall time
	 *
	 * @type {number}
	 * @memberof PlayerState
	 */
	public playbackSpeed: number;

	/**
	 * Playback position in milliseconds
	 *
	 * @type {number}
	 * @memberof PlayerState
	 */
	public playbackPosition: number;

	/**
	 * PlayerOptions for this player state
	 *
	 * @type {PlayerOptions}
	 * @memberof PlayerState
	 */
	public playbackOptions: PlayerOptions;

	/**
	 * PlayerRestrictions for this player state
	 *
	 * @type {PlayerRestrictions}
	 * @memberof PlayerState
	 */
	public playbackRestrictions: PlayerRestrictions;

	/**
	 * Creates an instance of PlayerState
	 *
	 * @param {Track} track A track currently associated with this player state or null if there is none
	 * @param {boolean} isPaused True if the state is paused
	 * @param {number} playbackSpeed Playback speed relative to wall time
	 * @param {number} playbackPosition Playback position in milliseconds
	 * @param {PlayerOptions} playbackOptions PlayerOptions for this player state
	 * @param {PlayerRestrictions} playbackRestrictions PlayerRestrictions for this player state
	 * @memberof PlayerState
	 */
	constructor(track: Track, isPaused: boolean, playbackSpeed: number, playbackPosition: number, playbackOptions: PlayerOptions, playbackRestrictions: PlayerRestrictions);
}

/**
 * Repeat mode
 *
 * @export
 * @enum {number}
 */
export enum RepeatMode {
	OFF = 0,
	ONE = 1,
	ALL = 2,
}

/**
 * Track
 *
 * @export
 * @class Track
 */
export class Track {
	/**
	 * The main artist of this track
	 *
	 * @type {Artist}
	 * @memberof Track
	 */
	public artist: Artist;

	/**
	 * All artists of this track
	 *
	 * @type {Array<Artist>}
	 * @memberof Track
	 */
	public artists: Array<Artist>;

	/**
	 * The album of this track
	 *
	 * @type {Album}
	 * @memberof Track
	 */
	public album: Album;

	/**
	 * Duration of the track in milliseconds
	 *
	 * @type {number}
	 * @memberof Track
	 */
	public duration: number;

	/**
	 * The name (title) of this track
	 *
	 * @type {string}
	 * @memberof Track
	 */
	public name: string;

	/**
	 * The Spotify track uri representing this track
	 *
	 * @type {string}
	 * @memberof Track
	 */
	public uri: string;

	/**
	 * Image id for this track
	 *
	 * @type {ImageUri}
	 * @memberof Track
	 */
	public imageUri: ImageUri;

	/**
	 * True if the track is a podcast, video show episode,
	 * or any other audio show episode, false otherwise
	 *
	 * @type {boolean}
	 * @memberof Track
	 */
	public isEpisode: boolean;

	/**
	 * True if the track is a podcast, false otherwise
	 *
	 * @type {boolean}
	 * @memberof Track
	 */
	public isPodcast: boolean;

	/**
	 * Creates an instance of Track
	 *
	 * @param {Artist} artist The main artist of this track
	 * @param {Array<Artist>} artists All artists of this track
	 * @param {Album} album The album of this track
	 * @param {number} duration Duration of the track in milliseconds
	 * @param {string} name The name (title) of this track
	 * @param {string} uri The Spotify track uri representing this track
	 * @param {ImageUri} imageUri Image id for this track
	 * @param {boolean} isEpisode True if the track is a podcast, video show episode,
	 * or any other audio show episode, false otherwise
	 * @param {boolean} isPodcast True if the track is a podcast, false otherwise
	 * @memberof Track
	 */
	constructor(artist: Artist, artists: Array<Artist>, album: Album, duration: number, name: string, uri: string, imageUri: ImageUri, isEpisode: boolean, isPodcast: boolean);
}
