import { Artist } from './Artist';
import { Album } from './Album';
import { ImageUri } from './ImageUri';

export class Track {
	public artist: Artist;
	public artists: Array<Artist>;
	public album: Album;
	public duration: number;
	public name: string;
	public uri: string;
	public imageUri: ImageUri;
	public isEpisode: boolean;
	public isPodcast: boolean;

	constructor(artist: Artist, artists: Array<Artist>, album: Album, duration: number, name: string, uri: string, imageUri: ImageUri, isEpisode: boolean, isPodcast: boolean) {
		this.artist = artist;
		this.artists = artists;
		this.album = album;
		this.duration = duration;
		this.name = name;
		this.uri = uri;
		this.imageUri = imageUri;
		this.isEpisode = isEpisode;
		this.isPodcast = isPodcast;
	}
}
