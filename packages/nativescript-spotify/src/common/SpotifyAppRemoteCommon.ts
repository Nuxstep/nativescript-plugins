import { Observable } from '@nativescript/core';
import { ImageSource } from '@nativescript/core/image-source';

export class SpotifyAppRemoteCommon extends Observable {
	protected static convertNativeImageToImageSource(image: android.graphics.Bitmap | UIImage): ImageSource {
		return new ImageSource(image);
	}
}
