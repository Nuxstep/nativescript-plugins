import { SpotifyAppRemote } from './SpotifyAppRemote';
import { ContentItem } from '../common/ContentItem';

export class AndroidUtils {
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
