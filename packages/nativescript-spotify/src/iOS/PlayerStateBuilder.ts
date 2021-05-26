import { ImageSource } from '@nativescript/core/image-source';
import { Album } from '../common/Album';
import { Artist } from '../common/Artist';
import { PlayerOptions } from '../common/PlayerOptions';
import { PlayerRestrictions } from '../common/PlayerRestrictions';
import { PlayerState } from '../common/PlayerState';
import { Track } from '../common/Track';
import { SpotifyAppRemote } from './SpotifyAppRemote';

export class PlayerStateBuilder {
	public static async build(nativePlayerState: SPTAppRemotePlayerState): Promise<PlayerState> {
		const track = await this.buildTrack(nativePlayerState?.valueForKey('track'));
		return new PlayerState(track, nativePlayerState?.valueForKey('paused'), nativePlayerState?.valueForKey('playbackSpeed'), nativePlayerState?.valueForKey('playbackPosition'), this.buildPlayerOptions(nativePlayerState?.valueForKey('playbackOptions')), this.buildPlayerRestrictions(nativePlayerState?.valueForKey('playbackRestrictions')));
	}

	private static async buildTrack(nativeTrack: SPTAppRemoteTrack): Promise<Track> {
		// @ts-ignore
		const image = await this.buildImage(nativeTrack);
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

	private static buildArtist(nativeArtist: SPTAppRemoteArtist): Artist {
		return new Artist(nativeArtist?.valueForKey('name'), nativeArtist?.valueForKey('URI'));
	}

	private static buildAlbum(nativeAlbum: SPTAppRemoteAlbum): Album {
		return new Album(nativeAlbum?.valueForKey('name'), nativeAlbum?.valueForKey('URI'));
	}

	private static async buildImage(imageRepresentable: SPTAppRemoteImageRepresentable): Promise<ImageSource> {
		const image = await SpotifyAppRemote.getImage(imageRepresentable);
		return new ImageSource(image);
	}

	private static buildPlayerOptions(nativePlayerOptions: SPTAppRemotePlaybackOptions): PlayerOptions {
		return new PlayerOptions(nativePlayerOptions?.valueForKey('isShuffling'), nativePlayerOptions?.valueForKey('repeatMode'));
	}

	private static buildPlayerRestrictions(nativePlayerRestrictions: SPTAppRemotePlaybackRestrictions): PlayerRestrictions {
		return new PlayerRestrictions(nativePlayerRestrictions?.valueForKey('canSkipNext'), nativePlayerRestrictions?.valueForKey('canSkipPrevious'), nativePlayerRestrictions?.valueForKey('canRepeatTrack'), nativePlayerRestrictions?.valueForKey('canRepeatContext'), nativePlayerRestrictions?.valueForKey('canToggleShuffle'), nativePlayerRestrictions?.valueForKey('canSeek'));
	}
}
