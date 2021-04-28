import { ListItem } from './ListItem';

export class ListItems {
	public limit: number;
	public offset: number;
	public total: number;
	public items: Array<ListItem>;

	constructor(limit: number, offset: number, total: number, items: Array<ListItem>) {
		this.limit = limit;
		this.offset = offset;
		this.total = total;
		this.items = items;
	}
}
