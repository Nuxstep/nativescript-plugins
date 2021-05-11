import { Album } from '../common/Album';
import { Artist } from '../common/Artist';
import { ContentItem } from '../common/ContentItem';
import { PlayerOptions } from '../common/PlayerOptions';
import { PlayerRestrictions } from '../common/PlayerRestrictions';
import { PlayerState } from '../common/PlayerState';
import { Track } from '../common/Track';

export class iOSUtils {
	public static buildPlayerState(data: NSObject): PlayerState {
		// Extract objects
		const track: NSObject = data.valueForKey('track');
		// @ts-ignore
		// For some reason we need to call this, otherwise the
		// imageIdentifier property from SPTAppRemoteImageRepresentable
		// will have a null value
		track.conformsToProtocol(SPTAppRemoteImageRepresentable);
		const artist: NSObject = track.valueForKey('artist');
		const album: NSObject = track.valueForKey('album');
		const playbackOptions: NSObject = data.valueForKey('playbackOptions');
		const playbackRestrictions: NSObject = data.valueForKey('playbackRestrictions');

		return new PlayerState(
			new Track(
				new Artist(artist?.valueForKey('name'), artist?.valueForKey('URI')),
				// TODO: Check if Spotify iOS SDK provides an artists array
				[],
				new Album(album?.valueForKey('name'), album?.valueForKey('URI')),
				track?.valueForKey('duration'),
				track?.valueForKey('name'),
				track?.valueForKey('URI'),
				track?.valueForKey('imageIdentifier'),
				track?.valueForKey('episode'),
				track?.valueForKey('podcast')
			),
			data?.valueForKey('paused'),
			data?.valueForKey('playbackSpeed'),
			data?.valueForKey('playbackPosition'),
			new PlayerOptions(playbackOptions?.valueForKey('isShuffling'), playbackOptions?.valueForKey('repeatMode')),
			new PlayerRestrictions(playbackRestrictions?.valueForKey('canSkipNext'), playbackRestrictions?.valueForKey('canSkipPrevious'), playbackRestrictions?.valueForKey('canRepeatTrack'), playbackRestrictions?.valueForKey('canRepeatContext'), playbackRestrictions?.valueForKey('canToggleShuffle'), playbackRestrictions?.valueForKey('canSeek'))
		);
	}

	public static buildContentItems(data: NSArray<SPTAppRemoteContentItem>): Array<ContentItem> {
		const items: Array<ContentItem> = [];

		for (let i = 0; i < data.count; i++) {
			let children = [];

			if (data[i].valueForKey('children')) {
				children = iOSUtils.buildContentItems(data[i].valueForKey('children'));
			}

			// @ts-ignore
			// For some reason we need to call this, otherwise the
			// imageIdentifier property from SPTAppRemoteImageRepresentable
			// will have a null value
			data[i].conformsToProtocol(SPTAppRemoteImageRepresentable);
			items.push(new ContentItem(data[i].valueForKey('identifier'), data[i].valueForKey('URI'), data[i].valueForKey('imageIdentifier'), data[i].valueForKey('title'), data[i].valueForKey('subtitle'), data[i].valueForKey('playable'), children));
		}

		return items;
	}
}
