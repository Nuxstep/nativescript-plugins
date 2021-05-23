import { ImageSource } from '@nativescript/core/image-source';
import { Album } from '../common/Album';
import { Artist } from '../common/Artist';
import { PlayerOptions } from '../common/PlayerOptions';
import { PlayerRestrictions } from '../common/PlayerRestrictions';
import { PlayerState } from '../common/PlayerState';
import { Track } from '../common/Track';
import { SpotifyAppRemote } from './SpotifyAppRemote';

export class PlayerStateBuilder {
	public static async build(nativePlayerState: any): Promise<PlayerState> {
		const track = await this.buildTrack(nativePlayerState?.track);
		return new PlayerState(track, nativePlayerState?.isPaused, nativePlayerState?.playbackSpeed, nativePlayerState?.playbackPosition, this.buildPlayerOptions(nativePlayerState.playbackOptions), this.buildPlayerRestrictions(nativePlayerState.playbackRestrictions));
	}

	private static async buildTrack(nativeTrack: any): Promise<Track> {
		const image = await this.buildImage(nativeTrack?.imageUri.raw);
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

	private static async buildImage(imageUri: string): Promise<ImageSource> {
		const bitmap = await SpotifyAppRemote.getImage(imageUri);
		return new ImageSource(bitmap);
	}

	private static buildPlayerOptions(nativePlayerOptions: any): PlayerOptions {
		return new PlayerOptions(nativePlayerOptions?.isShuffling, nativePlayerOptions?.repeatMode);
	}

	private static buildPlayerRestrictions(nativePlayerRestrictions: any): PlayerRestrictions {
		return new PlayerRestrictions(nativePlayerRestrictions?.canSkipNext, nativePlayerRestrictions?.canSkipPrev, nativePlayerRestrictions?.canRepeatTrack, nativePlayerRestrictions?.canRepeatContext, nativePlayerRestrictions?.canToggleShuffle, nativePlayerRestrictions?.canSeek);
	}
}
