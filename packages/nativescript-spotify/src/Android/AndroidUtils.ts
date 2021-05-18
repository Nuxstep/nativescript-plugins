import { SpotifyAppRemote } from './SpotifyAppRemote';
import { Album } from '../common/Album';
import { Artist } from '../common/Artist';
import { ContentItem } from '../common/ContentItem';
import { PlayerOptions } from '../common/PlayerOptions';
import { PlayerRestrictions } from '../common/PlayerRestrictions';
import { PlayerState } from '../common/PlayerState';
import { Track } from '../common/Track';

export class AndroidUtils {
	public static buildArtists(data: java.util.ArrayList<Artist>): Array<Artist> {
		if (!data) return [];

		const artists: Array<Artist> = [];

		for (let i = 0; i < data.size(); i++) {
			artists.push(new Artist(data.get(i).name, data.get(i).uri));
		}

		return artists;
	}

	public static buildPlayerState(data: any): PlayerState {
		return new PlayerState(
			new Track(new Artist(data?.track?.artist?.name, data?.track?.artist?.uri), this.buildArtists(data?.track?.artists), new Album(data?.track?.album?.name, data?.track?.album.uri), data?.track?.duration, data?.track?.name, data?.track?.uri, data?.track?.imageUri?.raw, data?.track?.isEpisode, data?.track?.isPodcast),
			data?.isPaused,
			data?.playbackSpeed,
			data?.playbackPosition,
			new PlayerOptions(data?.playbackOptions?.isShuffling, data?.playbackOptions?.repeatMode),
			new PlayerRestrictions(data?.playbackRestrictions?.canSkipNext, data?.playbackRestrictions?.canSkipPrev, data?.playbackRestrictions?.canRepeatTrack, data?.playbackRestrictions?.canRepeatContext, data?.playbackRestrictions?.canToggleShuffle, data?.playbackRestrictions?.canSeek)
		);
	}

	public static async buildContentItems(data: com.spotify.protocol.types.ListItem[]): Promise<Array<ContentItem>> {
		const items: Array<ContentItem> = [];

		for (let i = 0; i < data.length; i++) {
			let children: Array<ContentItem> = [];

			if (data[i].hasChildren) {
				const nativeChildren = await SpotifyAppRemote.getNativeChildrenOfItem(data[i], 10, 0);
				children = await AndroidUtils.buildContentItems(nativeChildren.items);
			}

			items.push(new ContentItem(data[i].id, data[i].uri, data[i].imageUri.raw, data[i].title, data[i].subtitle, data[i].playable, children));
		}

		return items;
	}
}
