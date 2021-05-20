import { ImageSource } from '@nativescript/core/image-source';
import { Album } from '../common/Album';
import { Artist } from '../common/Artist';
import { PlayerOptions } from '../common/PlayerOptions';
import { PlayerRestrictions } from '../common/PlayerRestrictions';
import { PlayerState } from '../common/PlayerState';
import { Track } from '../common/Track';

export class PlayerStateBuilder {
	public static build(nativePlayerState: any, trackImage: ImageSource): PlayerState {
		return new PlayerState(this.buildTrack(nativePlayerState?.track, trackImage), nativePlayerState?.isPaused, nativePlayerState?.playbackSpeed, nativePlayerState?.playbackPosition, this.buildPlayerOptions(nativePlayerState.playbackOptions), this.buildPlayerRestrictions(nativePlayerState.playbackRestrictions));
	}

	private static buildTrack(nativeTrack: any, image: ImageSource): Track {
		return new Track(this.buildArtist(nativeTrack?.artist), this.buildArtists(nativeTrack?.artists), this.buildAlbum(nativeTrack.album), nativeTrack?.duration, nativeTrack?.name, nativeTrack?.uri, image, nativeTrack?.isEpisode, nativeTrack?.isPodcast);
	}

	private static buildArtist(nativeArtist: any): Artist {
		return new Artist(nativeArtist?.name, nativeArtist?.uri);
	}

	private static buildArtists(nativeArtists: java.util.ArrayList<Artist>): Array<Artist> {
		if (!nativeArtists) return [];

		const artists: Array<Artist> = [];

		for (let i = 0; i < nativeArtists.size(); i++) {
			artists.push(new Artist(nativeArtists.get(i).name, nativeArtists.get(i).uri));
		}

		return artists;
	}

	private static buildAlbum(nativeAlbum: any): Album {
		return new Album(nativeAlbum?.name, nativeAlbum?.uri);
	}

	private static buildPlayerOptions(nativePlayerOptions: any): PlayerOptions {
		return new PlayerOptions(nativePlayerOptions?.isShuffling, nativePlayerOptions?.repeatMode);
	}

	private static buildPlayerRestrictions(nativePlayerRestrictions: any): PlayerRestrictions {
		return new PlayerRestrictions(nativePlayerRestrictions?.canSkipNext, nativePlayerRestrictions?.canSkipPrev, nativePlayerRestrictions?.canRepeatTrack, nativePlayerRestrictions?.canRepeatContext, nativePlayerRestrictions?.canToggleShuffle, nativePlayerRestrictions?.canSeek);
	}
}
