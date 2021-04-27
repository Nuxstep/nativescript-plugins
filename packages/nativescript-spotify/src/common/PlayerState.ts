import { PlayerOptions } from './PlayerOptions';
import { PlayerRestrictions } from './PlayerRestrictions';
import { Track } from './Track';

export class PlayerState {
	public track: Track;
	public isPaused: boolean;
	public playbackSpeed: number;
	public playbackPosition: number;
	public playbackOptions: PlayerOptions;
	public playbackRestrictions: PlayerRestrictions;

	constructor(track: Track, isPaused: boolean, playbackSpeed: number, playbackPosition: number, playbackOptions: PlayerOptions, playbackRestrictions: PlayerRestrictions) {
		this.track = track;
		this.isPaused = isPaused;
		this.playbackSpeed = playbackSpeed;
		this.playbackPosition = playbackPosition;
		this.playbackOptions = playbackOptions;
		this.playbackRestrictions = playbackRestrictions;
	}
}
