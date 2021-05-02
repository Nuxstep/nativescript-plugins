import { Album } from '../common/Album';
import { Artist } from '../common/Artist';
import { ImageUri } from '../common/ImageUri';
import { ListItem } from '../common/ListItem';
import { ListItems } from '../common/ListItems';
import { PlayerOptions } from '../common/PlayerOptions';
import { PlayerRestrictions } from '../common/PlayerRestrictions';
import { PlayerState } from '../common/PlayerState';
import { Track } from '../common/Track';

export class AndroidUtils {
	public static buildArtists(data: any): Array<Artist> {
		if (!data) return [];

		const artists: Array<Artist> = [];

		for (let i = 0; i < data.size(); i++) {
			artists.push(new Artist(data.get(i).name, data.get(i).uri));
		}

		return artists;
	}

	public static buildPlayerState(data: any): PlayerState {
		return new PlayerState(
			new Track(new Artist(data.track?.artist?.name, data.track?.artist?.uri), this.buildArtists(data.track?.artists), new Album(data.track?.album?.name, data?.track?.album.uri), data.track.duration, data.track.name, data.track.uri, new ImageUri(data.track?.imageUri?.raw), data.track.isEpisode, data.track.isPodcast),
			data.isPaused,
			data.playbackSpeed,
			data.playbackPosition,
			new PlayerOptions(data.playbackOptions?.isShuffling, data.playbackOptions?.repeatMode),
			new PlayerRestrictions(data.playbackRestrictions?.canSkipNext, data.playbackRestrictions?.canSkipPrev, data.playbackRestrictions?.canRepeatTrack, data.playbackRestrictions?.canRepeatContext, data.playbackRestrictions?.canToggleShuffle, data.playbackRestrictions?.canSeek)
		);
	}

	public static buildListItem(data: any): Array<ListItem> {
		const items: Array<ListItem> = [];

		for (let i = 0; i < data.length; i++) {
			items.push(new ListItem(data[i].id, data[i].uri, new ImageUri(data[i].imageUri.raw), data[i].title, data[i].subtitle, data[i].playable, data[i].hasChildren));
		}

		return items;
	}

	public static buildListItems(data: any): ListItems {
		const items = this.buildListItem(data.items);

		return new ListItems(data.limit, data.offset, data.total, items);
	}
}
