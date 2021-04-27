declare module com {
	export module spotify {
		export module android {
			export module appremote {
				export module api {
					// com.spotify.android.appremote.api.ConnectionParams
					export class ConnectionParams {}

					export namespace ConnectionParams {
						// com.spotify.android.appremote.api.ConnectionParams.Builder
						export class Builder {
							constructor(clientId: string);
							public setRedirectUri(redirectUri: string): com.spotify.android.appremote.api.ConnectionParams.Builder;
							public showAuthView(showAuthView: boolean): com.spotify.android.appremote.api.ConnectionParams.Builder;
							public build(): com.spotify.android.appremote.api.ConnectionParams;
						}
					}

					// com.spotify.android.appremote.api.Connector
					export module Connector {
						// com.spotify.android.appremote.api.Connector.ConnectionListener
						// If ConnectionListener is declared as an interface, the implementation as an
						// anonymous class generates errors with TypeScript, so this workaround fixes
						// this with a constructor and an implementation parameter
						export class ConnectionListener {
							constructor(implementation: { onConnected(spotifyAppRemote: com.spotify.android.appremote.api.SpotifyAppRemote): void; onFailure(error: java.lang.Throwable): void });
						}
					}

					// com.spotify.android.appremote.api.PlayerApi
					export interface PlayerApi {
						public getPlayerState(): com.spotify.protocol.client.CallResult;
						public pause(): com.spotify.protocol.client.CallResult;
						public play(uri: string): com.spotify.protocol.client.CallResult;
						public resume(): com.spotify.protocol.client.CallResult;
						public skipNext(): com.spotify.protocol.client.CallResult;
						public skipPrevious(): com.spotify.protocol.client.CallResult;
						public setRepeat(repeatMode: int): com.spotify.protocol.client.CallResult;
					}

					// com.spotify.android.appremote.api.SpotifyAppRemote
					export class SpotifyAppRemote {
						public static connect(context: android.content.Context, params: com.spotify.android.appremote.api.ConnectionParams, connectionListener: com.spotify.android.appremote.api.Connector.ConnectionListener): void;
						public static disconnect(spotifyAppRemote: com.spotify.android.appremote.api.SpotifyAppRemote): void;
						public getPlayerApi(): com.spotify.android.appremote.api.PlayerApi;
						public isConnected(): boolean;
					}
				}
			}
		}
		export module protocol {
			export module client {
				// com.spotify.protocol.client.ClassResult<T>
				export class CallResult {
					public setResultCallback(callback: com.spotify.protocol.client.CallResult.ResultCallback);
				}
				export namespace CallResult {
					// com.spotify.protocol.client.CallResult.ResultCallback<T>
					// Same case as com.spotify.android.appremote.api.Connector.ConnectionListener
					export class ResultCallback {
						constructor(implementation: { onResult(data: any): void });
					}
				}
			}
		}
	}
}