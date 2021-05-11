import { Album } from '../common/Album';
import { Artist } from '../common/Artist';
import { ImageUri } from '../common/ImageUri';
import { PlayerOptions } from '../common/PlayerOptions';
import { PlayerRestrictions } from '../common/PlayerRestrictions';
import { PlayerState } from '../common/PlayerState';
import { Track } from '../common/Track';

export class iOSUtils {
	public static buildPlayerState(data: NSObject): PlayerState {
		// Extract objects
		const track: NSObject = data.valueForKey('track');
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
				// TODO: Check how to access SPTAPpRemoteImageRepresentable on iOS
				new ImageUri(null),
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
}
