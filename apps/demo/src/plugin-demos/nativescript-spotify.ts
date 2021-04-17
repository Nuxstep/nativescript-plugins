import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptSpotify } from '@demo/shared';
import {} from '@nuxstep/nativescript-spotify';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptSpotify {}
