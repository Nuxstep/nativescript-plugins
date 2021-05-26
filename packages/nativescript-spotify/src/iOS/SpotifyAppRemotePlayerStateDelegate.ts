import { PlayerState } from '../common/PlayerState';
import { PlayerStateBuilder } from './PlayerStateBuilder';

export const SpotifyAppRemotePlayerStateDelegate = (callback: (playerState: PlayerState) => void) =>
	// @ts-ignore
	NSObject.extend(
		{
			callback,

			async playerStateDidChange(playerState: SPTAppRemotePlayerState): Promise<void> {
				console.log('[iOS] SpotifyAppRemote: Player state did change');
				const data = await PlayerStateBuilder.build(playerState);
				this.callback(data);
			},
		},
		{
			// @ts-ignore
			protocols: [SPTAppRemotePlayerStateDelegate],
		}
	);
