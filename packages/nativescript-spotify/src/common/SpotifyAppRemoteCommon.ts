import { Observable } from '@nativescript/core';
import { Artist } from './Artist';
import { Album } from './Album';
import { ImageUri } from './ImageUri';
import { PlayerOptions } from './PlayerOptions';
import { PlayerRestrictions } from './PlayerRestrictions';
import { PlayerState } from './PlayerState';
import { Track } from './Track';

export class SpotifyAppRemoteCommon extends Observable {
	private buildArtists(data: any): Array<Artist> {
		if (!data) return [];

		const artists: Array<Artist> = [];

		for (let i = 0; i < data.size(); i++) {
			artists.push(new Artist(data.get(i).name, data.get(i).uri));
		}

		return artists;
	}

	protected buildPlayerState(data: any): PlayerState {
		return new PlayerState(
			new Track(new Artist(data.track?.artist?.name, data.track?.artist?.uri), this.buildArtists(data.track?.artists), new Album(data.track?.album?.name, data?.track?.album.uri), data.track.duration, data.track.name, data.track.uri, new ImageUri(data.track?.imageUri?.raw), data.track.isEpisode, data.track.isPodcast),
			data.isPaused,
			data.playbackSpeed,
			data.playbackPosition,
			new PlayerOptions(data.playbackOptions?.isShuffling, data.playbackOptions?.repeatMode),
			new PlayerRestrictions(data.playbackRestrictions?.canSkipNext, data.playbackRestrictions?.canSkipPrev, data.playbackRestrictions?.canRepeatTrack, data.playbackRestrictions?.canRepeatContext, data.playbackRestrictions?.canToggleShuffle, data.playbackRestrictions?.canSeek)
		);
	}
}
