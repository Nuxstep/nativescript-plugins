export class PlayerRestrictions {
	public canSkipNext: boolean;
	public canSkipPrev: boolean;
	public canRepeatTrack: boolean;
	public canRepeatContext: boolean;
	public canToggleShuffle: boolean;
	public canSeek: boolean;

	constructor(canSkipNext: boolean, canSkipPrev: boolean, canRepeatTrack: boolean, canRepeatContext: boolean, canToggleShuffle: boolean, canSeek: boolean) {
		this.canSkipNext = canSkipNext;
		this.canSkipPrev = canSkipPrev;
		this.canRepeatTrack = canRepeatTrack;
		this.canRepeatContext = canRepeatContext;
		this.canToggleShuffle = canToggleShuffle;
		this.canSeek = canSeek;
	}
}
