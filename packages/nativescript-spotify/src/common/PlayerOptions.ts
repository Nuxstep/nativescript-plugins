import { RepeatMode } from './RepeatMode';

export class PlayerOptions {
	public isShuffling: boolean;
	public repeatMode: RepeatMode;

	constructor(isShuffling: boolean, repeatMode: RepeatMode) {
		this.isShuffling = isShuffling;
		this.repeatMode = repeatMode;
	}
}
