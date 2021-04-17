import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptSpotifyComponent } from './nativescript-spotify.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptSpotifyComponent }])],
	declarations: [NativescriptSpotifyComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptSpotifyModule {}
