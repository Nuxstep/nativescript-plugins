import { Component, NgZone } from '@angular/core';
import { DemoSharedNativescriptSpotify } from '@demo/shared';
import {} from '@nuxstep/nativescript-spotify';

@Component({
	selector: 'demo-nativescript-spotify',
	templateUrl: 'nativescript-spotify.component.html',
})
export class NativescriptSpotifyComponent {
	demoShared: DemoSharedNativescriptSpotify;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedNativescriptSpotify();
	}
}
