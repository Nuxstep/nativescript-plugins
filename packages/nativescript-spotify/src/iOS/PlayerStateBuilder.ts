import { ImageSource } from '@nativescript/core/image-source';
import { Album } from '../common/Album';
import { Artist } from '../common/Artist';
import { PlayerOptions } from '../common/PlayerOptions';
import { PlayerRestrictions } from '../common/PlayerRestrictions';
import { PlayerState } from '../common/PlayerState';
import { Track } from '../common/Track';

export class PlayerStateBuilder {
	public static build(nativePlayerState: NSObject, trackImage: ImageSource): PlayerState {
		return new PlayerState(this.buildTrack(nativePlayerState?.valueForKey('track'), trackImage), nativePlayerState?.valueForKey('paused'), nativePlayerState?.valueForKey('playbackSpeed'), nativePlayerState?.valueForKey('playbackPosition'), this.buildPlayerOptions(nativePlayerState?.valueForKey('playbackOptions')), this.buildPlayerRestrictions(nativePlayerState?.valueForKey('playbackRestrictions')));
	}

	private static buildTrack(nativeTrack: NSObject, image: ImageSource): Track {
		return new Track(
			this.buildArtist(nativeTrack?.valueForKey('artist')),
			// TODO: Check if Spotify iOS SDK provides an artists array
			[],
			this.buildAlbum(nativeTrack?.valueForKey('album')),
			nativeTrack?.valueForKey('duration'),
			nativeTrack?.valueForKey('name'),
			nativeTrack?.valueForKey('URI'),
			image,
			nativeTrack?.valueForKey('episode'),
			nativeTrack?.valueForKey('podcast')
		);
	}

	private static buildArtist(nativeArtist: NSObject): Artist {
		return new Artist(nativeArtist?.valueForKey('name'), nativeArtist?.valueForKey('URI'));
	}

	private static buildAlbum(nativeAlbum: NSObject): Album {
		return new Album(nativeAlbum?.valueForKey('name'), nativeAlbum?.valueForKey('URI'));
	}

	private static buildPlayerOptions(nativePlayerOptions: NSObject): PlayerOptions {
		return new PlayerOptions(nativePlayerOptions?.valueForKey('isShuffling'), nativePlayerOptions?.valueForKey('repeatMode'));
	}

	private static buildPlayerRestrictions(nativePlayerRestrictions: NSObject): PlayerRestrictions {
		return new PlayerRestrictions(nativePlayerRestrictions?.valueForKey('canSkipNext'), nativePlayerRestrictions?.valueForKey('canSkipPrevious'), nativePlayerRestrictions?.valueForKey('canRepeatTrack'), nativePlayerRestrictions?.valueForKey('canRepeatContext'), nativePlayerRestrictions?.valueForKey('canToggleShuffle'), nativePlayerRestrictions?.valueForKey('canSeek'));
	}
}
