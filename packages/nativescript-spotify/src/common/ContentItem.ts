export class ContentItem {
	public id: string;
	public uri: string;
	public imageUri: string;
	public title: string;
	public subtitle: string;
	public playable: boolean;
	public children: Array<ContentItem>;

	constructor(id: string, uri: string, imageUri: string, title: string, subtitle: string, playable: boolean, children: Array<ContentItem>) {
		this.id = id;
		this.uri = uri;
		this.imageUri = imageUri;
		this.title = title;
		this.subtitle = subtitle;
		this.playable = playable;
		this.children = children;
	}
}
