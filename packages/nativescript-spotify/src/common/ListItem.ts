import { ImageUri } from './ImageUri';

export class ListItem {
	public id: string;
	public uri: string;
	public imageUri: ImageUri;
	public title: string;
	public subtitle: string;
	public playable: boolean;
	public hasChildren: boolean;

	constructor(id: string, uri: string, imageUri: ImageUri, title: string, subtitle: string, playable: boolean, hasChildren: boolean) {
		this.id = id;
		this.uri = uri;
		this.imageUri = imageUri;
		this.title = title;
		this.subtitle = subtitle;
		this.playable = playable;
		this.hasChildren = hasChildren;
	}
}
