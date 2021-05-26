import { ContentItem } from '../common/ContentItem';

export class ContentItemsBuilder {
	public static build(data: NSArray<SPTAppRemoteContentItem>): Array<ContentItem> {
		const items: Array<ContentItem> = [];

		for (let i = 0; i < data.count; i++) {
			let children = [];

			if (data[i].valueForKey('children')) {
				children = this.build(data[i].valueForKey('children'));
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
