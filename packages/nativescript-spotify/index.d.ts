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
	 * Set Spotify client Id
	 *
	 * @static
	 * @param {string} clientId Spotify client id
	 * @memberof SpotifyAppRemote
	 */
	public static setClientId(clientId: string): void;

	/**
	 * Set app redirect Uri
	 *
	 * @static
	 * @param {string} redirectUri App redirect URI
	 * @memberof SpotifyAppRemote
	 */
	public static setRedirectUri(redirectUri: string): void;

	/**
	 * Parse out an access token or error description from an URL passed to
	 * to application:openURL:options:
	 *
	 * iOS only
	 *
	 * @static
	 * @param {string} url
	 * @memberof SpotifyAppRemote
	 */
	public static setAuthorizationParameters(url: NSURL): void;

	/**
	 * Open Spotify app to obtain access and start playback
	 *
	 * iOS only
	 *
	 * @static
	 * @async
	 * @param {string} [uri=''] The URI to play. Use a blank string to attempt
	 * to play the user’s last song
	 * @return {*}  {Promise<void>} Resolves when action is executed
	 * @memberof SpotifyAppRemote
	 */
	public static async authorizeAndPlayURI(uri: string = ''): Promise<void>;

	/**
	 * Connect to Spotify App Remote
	 *
	 * @static
	 * @async
	 * @return {Promise<void>} Resolves when action is executed
	 * @memberof SpotifyAppRemote
	 */
	public static async connect(): Promise<void>;

	/**
	 * Disconnect from Spotify App Remote
	 *
	 * @async
	 * @static
	 * @return {Promise<void>} Resolves when action is executed
	 * @memberof SpotifyAppRemote
	 */
	public static async disconnect(): Promise<void>;

	/**
	 * Check if Spotify App Remote is currently connected
	 *
	 * @static
	 * @return {boolean} True if connected, false if not
	 * @memberof SpotifyAppRemote
	 */
	public static isConnected(): boolean;

	/**
	 * Get the player state of the Spotify app
	 *
	 * @async
	 * @return {Promise<PlayerState>} Resolves to an instance of PlayerState
	 * @memberof SpotifyAppRemote
	 * @see PlayerState
	 */
	public static async getPlayerState(): Promise<PlayerState>;

	/**
	 * Pause playback if it's current playing
	 *
	 * @static
	 * @async
	 * @return {Promise<void>} Resolves when action is executed
	 * @memberof SpotifyAppRemote
	 */
	public static async pause(): Promise<void>;

	/**
	 * Play the given Spotify uri
	 *
	 * @static
	 * @async
	 * @param {string} uri uri to play
	 * @return {Promise<void>} Resolves when action is executed
	 * @memberof SpotifyAppRemote
	 */
	public static async play(uri: string): Promise<void>;

	/**
	 * Resume playback if it's currently paused
	 *
	 * @static
	 * @async
	 * @return {Promise<void>} Resolves when action is executed
	 * @memberof SpotifyAppRemote
	 */
	public static async resume(): Promise<void>;

	/**
	 * Set repeat mode to repeatMode
	 *
	 * @static
	 * @async
	 * @param {RepeatMode} repeatMode Must be one of OFF, ALL, or ONE
	 * @return {Promise<void>} Resolves when action is executed
	 * @memberof SpotifyAppRemote
	 * @see RepeatMode
	 */
	public static async setRepeat(repeatMode: RepeatMode): Promise<void>;

	/**
	 * Set the shuffle state
	 *
	 * @static
	 * @async
	 * @param {boolean} enabled True enables shuffling, false turns it off
	 * @return {Promise<void>} Resolves when action is executed
	 * @memberof SpotifyAppRemote
	 * @see RepeatMode
	 */
	public static async setShuffle(enabled: boolean): Promise<void>;

	/**
	 * Skip to the next track in the currently playing context if there is one
	 *
	 * @static
	 * @async
	 * @return {Promise<void>} Resolves when action is executed
	 * @memberof SpotifyAppRemote
	 */
	public static async skipNext(): Promise<void>;

	/**
	 * Restart the current track or, if current track has played for less than
	 * 3 seconds, skip to the previous track in the currently playing context
	 *
	 * @static
	 * @async
	 * @return {Promise<void>} Resolves when action is executed
	 * @memberof SpotifyAppRemote
	 */
	public static async skipPrevious(): Promise<void>;

	/**
	 * Get a list of recommended content
	 *
	 * @static
	 * @async
	 * @param {ContentType} type The type of content you want to fetch
	 * @return {Promise<ListItems>} Resolves to an instance of ListItems
	 * @memberof SpotifyAppRemote
	 * @see ContentType
	 */
	public static async getRecommendedContentItems(type: ContentType): Promise<ListItems>;

	/**
	 * Get a list of child items of a browsable (non-playable) content item
	 *
	 * @static
	 * @async
	 * @param {ListItem} item The content item (retrieved from getRecommendedContentItems)
	 * of which you want to access the children
	 * @param {number} perpage The number of children to fetch
	 * @param {number} offset Index of first child item to fetch, 0-indexed
	 * @return {Promise<ListItems>} Resolves to an instance of ListItems
	 * @memberof SpotifyAppRemote
	 * @see ListItem
	 */
	public static async getChildrenOfItem(item: ListItem, perpage: number, offset: number): Promise<ListItems>;
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
 * Content type
 *
 * @export
 * @enum {string}
 */
export enum ContentType {
	AUTOMOTIVE = 'AUTOMOTIVE',
	DEFAULT = 'DEFAULT',
	FITNESS = 'FITNESS',
	NAVIGATION = 'NAVIGATION',
	SLEEP = 'SLEEP',
	WAKE = 'WAKE',
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
 * List item
 *
 * @export
 * @class ListItem
 */
export class ListItem {
	/**
	 * Item id
	 *
	 * @type {string}
	 * @memberof ListItem
	 */
	public id: string;

	/**
	 * Item URI
	 *
	 * @type {string}
	 * @memberof ListItem
	 */
	public uri: string;

	/**
	 * Image URI
	 *
	 * @type {ImageUri}
	 * @memberof ListItem
	 * @see ImageUri
	 */
	public imageUri: ImageUri;

	/**
	 * Item title
	 *
	 * @type {string}
	 * @memberof ListItem
	 */
	public title: string;

	/**
	 * Item subtitle
	 *
	 * @type {string}
	 * @memberof ListItem
	 */
	public subtitle: string;

	/**
	 * True if item is playable, false if otherwhise
	 *
	 * @type {boolean}
	 * @memberof ListItem
	 */
	public playable: boolean;

	/**
	 * True if item has children, false if otherwise
	 *
	 * @type {boolean}
	 * @memberof ListItem
	 */
	public hasChildren: boolean;

	/**
	 * Creates an instance of ListItem
	 *
	 * @param {string} id Item id
	 * @param {string} uri Item URI
	 * @param {ImageUri} imageUri Image URI
	 * @param {string} title Item title
	 * @param {string} subtitle Item subtitle
	 * @param {boolean} playable True if item is playable, false if otherwise
	 * @param {boolean} hasChildren True if item has children, false if otherwise
	 * @memberof ListItem
	 * @see ImageUri
	 */
	constructor(id: string, uri: string, imageUri: ImageUri, title: string, subtitle: string, playable: boolean, hasChildren: boolean) {
		this.id = id;
		this.uri = uri;
		this.imageUri = imageUri;
		this.title = title;
		this.subtitle = subtitle;
		this.playable = playable;
		this.hasChildren = hasChildren;
	}
}

/**
 * List items
 *
 * @export
 * @class ListItems
 */
export class ListItems {
	/**
	 * Limit
	 *
	 * @type {number}
	 * @memberof ListItems
	 */
	public limit: number;

	/**
	 * Offset
	 *
	 * @type {number}
	 * @memberof ListItems
	 */
	public offset: number;

	/**
	 * Total
	 *
	 * @type {number}
	 * @memberof ListItems
	 */
	public total: number;

	/**
	 * Items
	 *
	 * @type {Array<ListItem>}
	 * @memberof ListItems
	 */
	public items: Array<ListItem>;

	/**
	 * Creates an instance of ListItems
	 *
	 * @param {number} limit Limit
	 * @param {number} offset Offset
	 * @param {number} total Total
	 * @param {Array<ListItem>} items Items
	 * @memberof ListItems
	 */
	constructor(limit: number, offset: number, total: number, items: Array<ListItem>) {
		this.limit = limit;
		this.offset = offset;
		this.total = total;
		this.items = items;
	}
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
