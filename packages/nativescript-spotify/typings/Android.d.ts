/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module spotify {
		export module android {
			export module appremote {
				export class BuildConfig {
					public static class: java.lang.Class<com.spotify.android.appremote.BuildConfig>;
					public static DEBUG: boolean;
					public static LIBRARY_PACKAGE_NAME: string;
					public static BUILD_TYPE: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module android {
			export module appremote {
				export module api {
					export class AppRemote {
						public static class: java.lang.Class<com.spotify.android.appremote.api.AppRemote>;
						/**
						 * Constructs a new instance of the com.spotify.android.appremote.api.AppRemote interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getImagesApi(): com.spotify.android.appremote.api.ImagesApi;
							getPlayerApi(): com.spotify.android.appremote.api.PlayerApi;
							getUserApi(): com.spotify.android.appremote.api.UserApi;
							getContentApi(): com.spotify.android.appremote.api.ContentApi;
							getConnectApi(): com.spotify.android.appremote.api.ConnectApi;
							isConnected(): boolean;
							call(param0: string, param1: com.spotify.protocol.types.Item, param2: java.lang.Class): com.spotify.protocol.client.CallResult<any>;
							subscribe(param0: string, param1: java.lang.Class): com.spotify.protocol.client.Subscription<any>;
						});
						public constructor();
						public getPlayerApi(): com.spotify.android.appremote.api.PlayerApi;
						public getUserApi(): com.spotify.android.appremote.api.UserApi;
						public subscribe(param0: string, param1: java.lang.Class): com.spotify.protocol.client.Subscription<any>;
						public getConnectApi(): com.spotify.android.appremote.api.ConnectApi;
						public isConnected(): boolean;
						public call(param0: string, param1: com.spotify.protocol.types.Item, param2: java.lang.Class): com.spotify.protocol.client.CallResult<any>;
						public getContentApi(): com.spotify.android.appremote.api.ContentApi;
						public getImagesApi(): com.spotify.android.appremote.api.ImagesApi;
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module android {
			export module appremote {
				export module api {
					export class ConnectApi {
						public static class: java.lang.Class<com.spotify.android.appremote.api.ConnectApi>;
						/**
						 * Constructs a new instance of the com.spotify.android.appremote.api.ConnectApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { connectSwitchToLocalDevice(): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>; connectSetVolume(param0: number): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>; connectIncreaseVolume(): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>; connectDecreaseVolume(): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>; subscribeToVolumeState(): com.spotify.protocol.client.Subscription<com.spotify.protocol.types.VolumeState> });
						public constructor();
						public connectSwitchToLocalDevice(): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public connectIncreaseVolume(): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public connectDecreaseVolume(): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public connectSetVolume(param0: number): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public subscribeToVolumeState(): com.spotify.protocol.client.Subscription<com.spotify.protocol.types.VolumeState>;
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module android {
			export module appremote {
				export module api {
					export class ConnectionParams {
						public static class: java.lang.Class<com.spotify.android.appremote.api.ConnectionParams>;
						public getRequiredFeatures(): java.util.List<string>;
						public shouldShowAuthView(): boolean;
						public getRedirectUri(): string;
						public getClientId(): string;
						public getAuthMethod(): com.spotify.android.appremote.api.ConnectionParams.AuthMethod;
						public getJsonMapper(): com.spotify.protocol.mappers.JsonMapper;
					}
					export module ConnectionParams {
						export class AuthMethod {
							public static class: java.lang.Class<com.spotify.android.appremote.api.ConnectionParams.AuthMethod>;
							public static APP_ID: com.spotify.android.appremote.api.ConnectionParams.AuthMethod;
							public static NONE: com.spotify.android.appremote.api.ConnectionParams.AuthMethod;
							public static valueOf(param0: string): com.spotify.android.appremote.api.ConnectionParams.AuthMethod;
							public static values(): androidNative.Array<com.spotify.android.appremote.api.ConnectionParams.AuthMethod>;
						}
						export class Builder {
							public static class: java.lang.Class<com.spotify.android.appremote.api.ConnectionParams.Builder>;
							public setRedirectUri(redirectUri: string): com.spotify.android.appremote.api.ConnectionParams.Builder;
							public build(): com.spotify.android.appremote.api.ConnectionParams;
							public showAuthView(showAuthView: boolean): com.spotify.android.appremote.api.ConnectionParams.Builder;
							public constructor(param0: string);
							public setJsonMapper(param0: com.spotify.protocol.mappers.JsonMapper): com.spotify.android.appremote.api.ConnectionParams.Builder;
							public setRequiredFeatures(param0: java.util.List<string>): com.spotify.android.appremote.api.ConnectionParams.Builder;
							public setAuthMethod(param0: com.spotify.android.appremote.api.ConnectionParams.AuthMethod): com.spotify.android.appremote.api.ConnectionParams.Builder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module android {
			export module appremote {
				export module api {
					export class Connector {
						public static class: java.lang.Class<com.spotify.android.appremote.api.Connector>;
						/**
						 * Constructs a new instance of the com.spotify.android.appremote.api.Connector interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { connect(context: globalAndroid.content.Context, params: com.spotify.android.appremote.api.ConnectionParams, connectionListener: com.spotify.android.appremote.api.Connector.ConnectionListener): void; disconnect(spotifyAppRemote: com.spotify.android.appremote.api.SpotifyAppRemote): void });
						public constructor();
						public disconnect(spotifyAppRemote: com.spotify.android.appremote.api.SpotifyAppRemote): void;
						public connect(context: globalAndroid.content.Context, params: com.spotify.android.appremote.api.ConnectionParams, connectionListener: com.spotify.android.appremote.api.Connector.ConnectionListener): void;
					}
					export module Connector {
						export class ConnectionListener {
							public static class: java.lang.Class<com.spotify.android.appremote.api.Connector.ConnectionListener>;
							/**
							 * Constructs a new instance of the com.spotify.android.appremote.api.Connector$ConnectionListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onConnected(spotifyAppRemote: com.spotify.android.appremote.api.SpotifyAppRemote): void; onFailure(error: java.lang.Throwable): void });
							public constructor();
							public onFailure(error: java.lang.Throwable): void;
							public onConnected(spotifyAppRemote: com.spotify.android.appremote.api.SpotifyAppRemote): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module android {
			export module appremote {
				export module api {
					export class ContentApi {
						public static class: java.lang.Class<com.spotify.android.appremote.api.ContentApi>;
						/**
						 * Constructs a new instance of the com.spotify.android.appremote.api.ContentApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { getRecommendedContentItems(type: string): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.ListItems>; getChildrenOfItem(item: com.spotify.protocol.types.ListItem, perpage: number, offset: number): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.ListItems>; playContentItem(item: com.spotify.protocol.types.ListItem): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty> });
						public constructor();
						public getChildrenOfItem(item: com.spotify.protocol.types.ListItem, perpage: number, offset: number): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.ListItems>;
						public playContentItem(item: com.spotify.protocol.types.ListItem): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public getRecommendedContentItems(type: string): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.ListItems>;
					}
					export module ContentApi {
						export class ContentType {
							public static class: java.lang.Class<com.spotify.android.appremote.api.ContentApi.ContentType>;
							/**
							 * Constructs a new instance of the com.spotify.android.appremote.api.ContentApi$ContentType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {});
							public constructor();
							public static FITNESS: string;
							public static SLEEP: string;
							public static AUTOMOTIVE: string;
							public static NAVIGATION: string;
							public static WAKE: string;
							public static DEFAULT: string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module android {
			export module appremote {
				export module api {
					export class ImagesApi {
						public static class: java.lang.Class<com.spotify.android.appremote.api.ImagesApi>;
						/**
						 * Constructs a new instance of the com.spotify.android.appremote.api.ImagesApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { getImage(imageUri: com.spotify.protocol.types.ImageUri): com.spotify.protocol.client.CallResult<globalAndroid.graphics.Bitmap>; getImage(imageUri: com.spotify.protocol.types.ImageUri, dimension: com.spotify.protocol.types.Image.Dimension): com.spotify.protocol.client.CallResult<globalAndroid.graphics.Bitmap> });
						public constructor();
						public getImage(imageUri: com.spotify.protocol.types.ImageUri): com.spotify.protocol.client.CallResult<globalAndroid.graphics.Bitmap>;
						public getImage(imageUri: com.spotify.protocol.types.ImageUri, dimension: com.spotify.protocol.types.Image.Dimension): com.spotify.protocol.client.CallResult<globalAndroid.graphics.Bitmap>;
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module android {
			export module appremote {
				export module api {
					export class LocalConnector extends com.spotify.android.appremote.api.Connector {
						public static class: java.lang.Class<com.spotify.android.appremote.api.LocalConnector>;
						public constructor(param0: com.spotify.android.appremote.internal.SpotifyLocator, param1: com.spotify.android.appremote.internal.SdkRemoteClientConnectorFactory);
						public disconnect(param0: com.spotify.android.appremote.api.SpotifyAppRemote): void;
						public connect(param0: globalAndroid.content.Context, param1: com.spotify.android.appremote.api.ConnectionParams, param2: com.spotify.android.appremote.api.Connector.ConnectionListener): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module android {
			export module appremote {
				export module api {
					export class PlayerApi {
						public static class: java.lang.Class<com.spotify.android.appremote.api.PlayerApi>;
						/**
						 * Constructs a new instance of the com.spotify.android.appremote.api.PlayerApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							play(uri: string): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
							play(uri: string, streamType: com.spotify.android.appremote.api.PlayerApi.StreamType): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
							queue(param0: string): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
							resume(): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
							pause(): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
							setPodcastPlaybackSpeed(param0: com.spotify.protocol.types.PlaybackSpeed.PodcastPlaybackSpeed): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
							skipNext(): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
							skipPrevious(): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
							skipToIndex(param0: string, param1: number): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
							setShuffle(enabled: boolean): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
							toggleShuffle(): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
							setRepeat(repeatMode: number): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
							toggleRepeat(): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
							seekTo(param0: number): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
							seekToRelativePosition(param0: number): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
							getPlayerState(): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.PlayerState>;
							subscribeToPlayerState(): com.spotify.protocol.client.Subscription<com.spotify.protocol.types.PlayerState>;
							subscribeToPlayerContext(): com.spotify.protocol.client.Subscription<com.spotify.protocol.types.PlayerContext>;
							getCrossfadeState(): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.CrossfadeState>;
						});
						public constructor();
						public skipNext(): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public skipToIndex(param0: string, param1: number): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public subscribeToPlayerState(): com.spotify.protocol.client.Subscription<com.spotify.protocol.types.PlayerState>;
						public getPlayerState(): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.PlayerState>;
						public subscribeToPlayerContext(): com.spotify.protocol.client.Subscription<com.spotify.protocol.types.PlayerContext>;
						public toggleShuffle(): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public skipPrevious(): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public setShuffle(enabled: boolean): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public setRepeat(repeatMode: number): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public toggleRepeat(): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public queue(param0: string): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public setPodcastPlaybackSpeed(param0: com.spotify.protocol.types.PlaybackSpeed.PodcastPlaybackSpeed): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public resume(): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public seekTo(param0: number): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public getCrossfadeState(): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.CrossfadeState>;
						public seekToRelativePosition(param0: number): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public play(uri: string, streamType: com.spotify.android.appremote.api.PlayerApi.StreamType): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public play(uri: string): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public pause(): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
					}
					export module PlayerApi {
						export class StreamType {
							public static class: java.lang.Class<com.spotify.android.appremote.api.PlayerApi.StreamType>;
							public static ALARM: com.spotify.android.appremote.api.PlayerApi.StreamType;
							public name: string;
							public static valueOf(param0: string): com.spotify.android.appremote.api.PlayerApi.StreamType;
							public static values(): androidNative.Array<com.spotify.android.appremote.api.PlayerApi.StreamType>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module android {
			export module appremote {
				export module api {
					export class SpotifyAppRemote extends com.spotify.android.appremote.api.AppRemote {
						public static class: java.lang.Class<com.spotify.android.appremote.api.SpotifyAppRemote>;
						public getPlayerApi(): com.spotify.android.appremote.api.PlayerApi;
						public getConnectApi(): com.spotify.android.appremote.api.ConnectApi;
						public isConnected(): boolean;
						public static isDebugMode(): boolean;
						public call(param0: string, param1: com.spotify.protocol.types.Item, param2: java.lang.Class): com.spotify.protocol.client.CallResult<any>;
						public getContentApi(): com.spotify.android.appremote.api.ContentApi;
						public static setDebugMode(param0: boolean): void;
						public getImagesApi(): com.spotify.android.appremote.api.ImagesApi;
						public getUserApi(): com.spotify.android.appremote.api.UserApi;
						public static isSpotifyInstalled(param0: globalAndroid.content.Context): boolean;
						public subscribe(param0: string, param1: java.lang.Class): com.spotify.protocol.client.Subscription<any>;
						public static connect(context: globalAndroid.content.Context, params: com.spotify.android.appremote.api.ConnectionParams, connectionListener: com.spotify.android.appremote.api.Connector.ConnectionListener): void;
						public static disconnect(spotifyAppRemote: com.spotify.android.appremote.api.SpotifyAppRemote): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module android {
			export module appremote {
				export module api {
					export class UserApi {
						public static class: java.lang.Class<com.spotify.android.appremote.api.UserApi>;
						/**
						 * Constructs a new instance of the com.spotify.android.appremote.api.UserApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getCapabilities(): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Capabilities>;
							subscribeToCapabilities(): com.spotify.protocol.client.Subscription<com.spotify.protocol.types.Capabilities>;
							subscribeToUserStatus(): com.spotify.protocol.client.Subscription<com.spotify.protocol.types.UserStatus>;
							addToLibrary(param0: string): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
							removeFromLibrary(param0: string): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
							getLibraryState(param0: string): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.LibraryState>;
						});
						public constructor();
						public addToLibrary(param0: string): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public getCapabilities(): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Capabilities>;
						public subscribeToCapabilities(): com.spotify.protocol.client.Subscription<com.spotify.protocol.types.Capabilities>;
						public subscribeToUserStatus(): com.spotify.protocol.client.Subscription<com.spotify.protocol.types.UserStatus>;
						public removeFromLibrary(param0: string): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public getLibraryState(param0: string): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.LibraryState>;
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module android {
			export module appremote {
				export module api {
					export module error {
						export class AuthenticationFailedException extends com.spotify.protocol.error.SpotifyAppRemoteException {
							public static class: java.lang.Class<com.spotify.android.appremote.api.error.AuthenticationFailedException>;
							public constructor();
							public constructor(param0: string);
							public constructor(param0: java.lang.Throwable);
							public constructor(param0: string, param1: java.lang.Throwable);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module android {
			export module appremote {
				export module api {
					export module error {
						export class CouldNotFindSpotifyApp extends com.spotify.protocol.error.SpotifyAppRemoteException {
							public static class: java.lang.Class<com.spotify.android.appremote.api.error.CouldNotFindSpotifyApp>;
							public constructor();
							public constructor(param0: string);
							public constructor(param0: java.lang.Throwable);
							public constructor(param0: string, param1: java.lang.Throwable);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module android {
			export module appremote {
				export module api {
					export module error {
						export class NotLoggedInException extends com.spotify.protocol.error.SpotifyAppRemoteException {
							public static class: java.lang.Class<com.spotify.android.appremote.api.error.NotLoggedInException>;
							public constructor();
							public constructor(param0: string);
							public constructor(param0: java.lang.Throwable);
							public constructor(param0: string, param1: java.lang.Throwable);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module android {
			export module appremote {
				export module api {
					export module error {
						export class OfflineModeException extends com.spotify.protocol.error.SpotifyAppRemoteException {
							public static class: java.lang.Class<com.spotify.android.appremote.api.error.OfflineModeException>;
							public constructor();
							public constructor(param0: string);
							public constructor(param0: java.lang.Throwable);
							public constructor(param0: string, param1: java.lang.Throwable);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module android {
			export module appremote {
				export module api {
					export module error {
						export class SpotifyConnectionTerminatedException extends com.spotify.protocol.error.SpotifyAppRemoteException {
							public static class: java.lang.Class<com.spotify.android.appremote.api.error.SpotifyConnectionTerminatedException>;
							public constructor();
							public constructor(param0: string);
							public constructor(param0: java.lang.Throwable);
							public constructor(param0: string, param1: java.lang.Throwable);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module android {
			export module appremote {
				export module api {
					export module error {
						export class SpotifyDisconnectedException extends com.spotify.protocol.error.SpotifyAppRemoteException {
							public static class: java.lang.Class<com.spotify.android.appremote.api.error.SpotifyDisconnectedException>;
							public constructor();
							public constructor(param0: string);
							public constructor(param0: java.lang.Throwable);
							public constructor(param0: string, param1: java.lang.Throwable);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module android {
			export module appremote {
				export module api {
					export module error {
						export class SpotifyRemoteServiceException extends com.spotify.protocol.error.SpotifyAppRemoteException {
							public static class: java.lang.Class<com.spotify.android.appremote.api.error.SpotifyRemoteServiceException>;
							public constructor();
							public constructor(param0: string);
							public constructor(param0: java.lang.Throwable);
							public constructor(param0: string, param1: java.lang.Throwable);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module android {
			export module appremote {
				export module api {
					export module error {
						export class UnsupportedFeatureVersionException extends com.spotify.protocol.error.SpotifyAppRemoteException {
							public static class: java.lang.Class<com.spotify.android.appremote.api.error.UnsupportedFeatureVersionException>;
							public constructor();
							public constructor(param0: string);
							public constructor(param0: java.lang.Throwable);
							public constructor(param0: string, param1: java.lang.Throwable);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module android {
			export module appremote {
				export module api {
					export module error {
						export class UserNotAuthorizedException extends com.spotify.protocol.error.SpotifyAppRemoteException {
							public static class: java.lang.Class<com.spotify.android.appremote.api.error.UserNotAuthorizedException>;
							public constructor();
							public constructor(param0: string);
							public constructor(param0: java.lang.Throwable);
							public constructor(param0: string, param1: java.lang.Throwable);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module android {
			export module appremote {
				export module internal {
					export class AppRemoteDebugImpl implements com.spotify.protocol.client.Debug.Logger, com.spotify.protocol.client.Debug.Assertion {
						public static class: java.lang.Class<com.spotify.android.appremote.internal.AppRemoteDebugImpl>;
						public constructor();
						public d(param0: java.lang.Throwable, param1: string, param2: androidNative.Array<any>): void;
						public d(param0: string, param1: androidNative.Array<any>): void;
						public assertTrue(param0: boolean, param1: string): void;
						public e(param0: string, param1: androidNative.Array<any>): void;
						public e(param0: java.lang.Throwable, param1: string, param2: androidNative.Array<any>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module android {
			export module appremote {
				export module internal {
					export class ConnectApiImpl extends com.spotify.android.appremote.api.ConnectApi {
						public static class: java.lang.Class<com.spotify.android.appremote.internal.ConnectApiImpl>;
						public connectSwitchToLocalDevice(): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public connectIncreaseVolume(): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public connectDecreaseVolume(): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public connectSetVolume(param0: number): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public subscribeToVolumeState(): com.spotify.protocol.client.Subscription<com.spotify.protocol.types.VolumeState>;
						public constructor(param0: com.spotify.protocol.client.RemoteClient);
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module android {
			export module appremote {
				export module internal {
					export class ContentApiImpl extends com.spotify.android.appremote.api.ContentApi {
						public static class: java.lang.Class<com.spotify.android.appremote.internal.ContentApiImpl>;
						public getChildrenOfItem(param0: com.spotify.protocol.types.ListItem, param1: number, param2: number): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.ListItems>;
						public playContentItem(param0: com.spotify.protocol.types.ListItem): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public getRecommendedContentItems(param0: string): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.ListItems>;
						public constructor(param0: com.spotify.protocol.client.RemoteClient);
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module android {
			export module appremote {
				export module internal {
					export class ImagesApiImpl extends com.spotify.android.appremote.api.ImagesApi {
						public static class: java.lang.Class<com.spotify.android.appremote.internal.ImagesApiImpl>;
						public getImage(param0: com.spotify.protocol.types.ImageUri): com.spotify.protocol.client.CallResult<globalAndroid.graphics.Bitmap>;
						public getImage(param0: com.spotify.protocol.types.ImageUri, param1: com.spotify.protocol.types.Image.Dimension): com.spotify.protocol.client.CallResult<globalAndroid.graphics.Bitmap>;
						public constructor(param0: com.spotify.protocol.client.RemoteClient);
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module android {
			export module appremote {
				export module internal {
					export class PackageProvider {
						public static class: java.lang.Class<com.spotify.android.appremote.internal.PackageProvider>;
						/**
						 * Constructs a new instance of the com.spotify.android.appremote.internal.PackageProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { getPackageName(param0: globalAndroid.content.Context): string });
						public constructor();
						public getPackageName(param0: globalAndroid.content.Context): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module android {
			export module appremote {
				export module internal {
					export class PendingServiceConnectionResult extends com.spotify.protocol.client.CallResult<java.lang.Void> {
						public static class: java.lang.Class<com.spotify.android.appremote.internal.PendingServiceConnectionResult>;
						public constructor();
						public constructor(param0: com.spotify.protocol.types.Types.RequestId);
						public await(param0: number, param1: java.util.concurrent.TimeUnit): com.spotify.protocol.client.Result<any>;
						public setErrorCallback(param0: com.spotify.protocol.client.ErrorCallback): com.spotify.protocol.client.PendingResult<any>;
						public cancel(): void;
						public isCanceled(): boolean;
						public await(): com.spotify.protocol.client.Result<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module android {
			export module appremote {
				export module internal {
					export class PlayerApiImpl extends com.spotify.android.appremote.api.PlayerApi {
						public static class: java.lang.Class<com.spotify.android.appremote.internal.PlayerApiImpl>;
						public skipNext(): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public skipToIndex(param0: string, param1: number): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public subscribeToPlayerState(): com.spotify.protocol.client.Subscription<com.spotify.protocol.types.PlayerState>;
						public getPlayerState(): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.PlayerState>;
						public subscribeToPlayerContext(): com.spotify.protocol.client.Subscription<com.spotify.protocol.types.PlayerContext>;
						public toggleShuffle(): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public skipPrevious(): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public setShuffle(param0: boolean): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public setRepeat(param0: number): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public toggleRepeat(): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public queue(param0: string): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public setPodcastPlaybackSpeed(param0: com.spotify.protocol.types.PlaybackSpeed.PodcastPlaybackSpeed): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public resume(): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public seekTo(param0: number): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public getCrossfadeState(): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.CrossfadeState>;
						public seekToRelativePosition(param0: number): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public play(param0: string, param1: com.spotify.android.appremote.api.PlayerApi.StreamType): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public constructor(param0: com.spotify.protocol.client.RemoteClient);
						public play(param0: string): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public pause(): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module android {
			export module appremote {
				export module internal {
					export class ReleaseSpotifyLocator extends com.spotify.android.appremote.internal.PackageProvider {
						public static class: java.lang.Class<com.spotify.android.appremote.internal.ReleaseSpotifyLocator>;
						public constructor();
						public getPackageName(param0: globalAndroid.content.Context): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module android {
			export module appremote {
				export module internal {
					export class RemoteService extends com.spotify.protocol.client.AppProtocolIo {
						public static class: java.lang.Class<com.spotify.android.appremote.internal.RemoteService>;
						/**
						 * Constructs a new instance of the com.spotify.android.appremote.internal.RemoteService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { setOnConnectionTerminatedListener(param0: com.spotify.protocol.client.OnConnectionTerminatedListener): void; connect(): com.spotify.protocol.client.PendingResult<java.lang.Void>; disconnect(): void; isConnected(): boolean; isConnecting(): boolean; writeData(param0: androidNative.Array<number>, param1: number): void; setDataInput(param0: com.spotify.protocol.client.AppProtocolIo.DataInput): void });
						public constructor();
						public writeData(param0: androidNative.Array<number>, param1: number): void;
						public disconnect(): void;
						public setOnConnectionTerminatedListener(param0: com.spotify.protocol.client.OnConnectionTerminatedListener): void;
						public setDataInput(param0: com.spotify.protocol.client.AppProtocolIo.DataInput): void;
						public isConnected(): boolean;
						public connect(): com.spotify.protocol.client.PendingResult<java.lang.Void>;
						public isConnecting(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module android {
			export module appremote {
				export module internal {
					export class RemoteServiceIo extends com.spotify.android.appremote.internal.RemoteService {
						public static class: java.lang.Class<com.spotify.android.appremote.internal.RemoteServiceIo>;
						public writeData(param0: androidNative.Array<number>, param1: number): void;
						public disconnect(): void;
						public onServiceConnected(param0: globalAndroid.content.ComponentName, param1: globalAndroid.os.IBinder): void;
						public setOnConnectionTerminatedListener(param0: com.spotify.protocol.client.OnConnectionTerminatedListener): void;
						public setDataInput(param0: com.spotify.protocol.client.AppProtocolIo.DataInput): void;
						public isConnected(): boolean;
						public onServiceDisconnected(param0: globalAndroid.content.ComponentName): void;
						public connect(): com.spotify.protocol.client.PendingResult<java.lang.Void>;
						public constructor(param0: string, param1: globalAndroid.content.Context);
						public isConnecting(): boolean;
					}
					export module RemoteServiceIo {
						export class IncomingHandler {
							public static class: java.lang.Class<com.spotify.android.appremote.internal.RemoteServiceIo.IncomingHandler>;
							public constructor(param0: com.spotify.android.appremote.internal.RemoteServiceIo);
							public handleMessage(param0: globalAndroid.os.Message): void;
						}
						export class State {
							public static class: java.lang.Class<com.spotify.android.appremote.internal.RemoteServiceIo.State>;
							public static DISCONNECTED: com.spotify.android.appremote.internal.RemoteServiceIo.State;
							public static CONNECTING: com.spotify.android.appremote.internal.RemoteServiceIo.State;
							public static CONNECTED: com.spotify.android.appremote.internal.RemoteServiceIo.State;
							public static TERMINATED: com.spotify.android.appremote.internal.RemoteServiceIo.State;
							public static values(): androidNative.Array<com.spotify.android.appremote.internal.RemoteServiceIo.State>;
							public static valueOf(param0: string): com.spotify.android.appremote.internal.RemoteServiceIo.State;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module android {
			export module appremote {
				export module internal {
					export class SdkRemoteClientConnector extends com.spotify.protocol.client.RemoteClientConnector {
						public static class: java.lang.Class<com.spotify.android.appremote.internal.SdkRemoteClientConnector>;
						public static APP_ID_AUTH: string;
						public static REMOTE_CONTROL_SCOPE: string;
						public static CATEGORY: string;
						public static EXTRA_REDIRECT_URI: string;
						public static EXTRA_SHOW_AUTH_VIEW: string;
						public static EXTRA_SCOPES: string;
						public getParams(): com.spotify.android.appremote.api.ConnectionParams;
						public disconnect(): void;
						public getSpotifyPackagename(): string;
						public static create(param0: globalAndroid.content.Context, param1: com.spotify.android.appremote.api.ConnectionParams, param2: string): com.spotify.android.appremote.internal.SdkRemoteClientConnector;
						public connect(param0: com.spotify.protocol.client.RemoteClientConnector.ConnectionCallback): void;
						public setConnectionTerminatedListener(param0: com.spotify.protocol.client.OnConnectionTerminatedListener): void;
					}
					export module SdkRemoteClientConnector {
						export class ConnectionTask extends globalAndroid.os.AsyncTask<java.lang.Void, java.lang.Void, com.spotify.protocol.client.Result<com.spotify.protocol.types.WelcomeDetails>> {
							public static class: java.lang.Class<com.spotify.android.appremote.internal.SdkRemoteClientConnector.ConnectionTask>;
							public onPreExecute(): void;
							public doInBackground(param0: androidNative.Array<java.lang.Void>): com.spotify.protocol.client.Result<com.spotify.protocol.types.WelcomeDetails>;
							public onPostExecute(param0: com.spotify.protocol.client.Result<com.spotify.protocol.types.WelcomeDetails>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module android {
			export module appremote {
				export module internal {
					export class SdkRemoteClientConnectorFactory {
						public static class: java.lang.Class<com.spotify.android.appremote.internal.SdkRemoteClientConnectorFactory>;
						public constructor();
						public newConnector(param0: globalAndroid.content.Context, param1: com.spotify.android.appremote.api.ConnectionParams, param2: string): com.spotify.android.appremote.internal.SdkRemoteClientConnector;
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module android {
			export module appremote {
				export module internal {
					export class SpotifyAppRemoteIsConnectedRule extends com.spotify.android.appremote.internal.StrictRemoteClient.Rule {
						public static class: java.lang.Class<com.spotify.android.appremote.internal.SpotifyAppRemoteIsConnectedRule>;
						public constructor(param0: com.spotify.android.appremote.api.AppRemote);
						public isSatisfied(): boolean;
						public getError(): java.lang.Throwable;
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module android {
			export module appremote {
				export module internal {
					export class SpotifyLocator {
						public static class: java.lang.Class<com.spotify.android.appremote.internal.SpotifyLocator>;
						public getSpotifyBestPackageName(param0: globalAndroid.content.Context): string;
						public constructor();
						public isSpotifyInstalled(param0: globalAndroid.content.Context): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module android {
			export module appremote {
				export module internal {
					export class StrictRemoteClient extends com.spotify.protocol.client.RemoteClient {
						public static class: java.lang.Class<com.spotify.android.appremote.internal.StrictRemoteClient>;
						public hello(param0: java.lang.Class): com.spotify.protocol.client.CallResult<any>;
						public unsubscribe(param0: com.spotify.protocol.client.Subscription<any>): void;
						public subscribe(param0: string, param1: java.lang.Class): com.spotify.protocol.client.Subscription<any>;
						public call(param0: string, param1: any, param2: java.lang.Class): com.spotify.protocol.client.CallResult<any>;
						public goodbye(): void;
						public constructor(param0: com.spotify.protocol.client.RemoteClient);
						public call(param0: string, param1: java.lang.Class): com.spotify.protocol.client.CallResult<any>;
						public addRule(param0: com.spotify.android.appremote.internal.StrictRemoteClient.Rule): void;
					}
					export module StrictRemoteClient {
						export class Rule {
							public static class: java.lang.Class<com.spotify.android.appremote.internal.StrictRemoteClient.Rule>;
							/**
							 * Constructs a new instance of the com.spotify.android.appremote.internal.StrictRemoteClient$Rule interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { isSatisfied(): boolean; getError(): java.lang.Throwable });
							public constructor();
							public getError(): java.lang.Throwable;
							public isSatisfied(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module android {
			export module appremote {
				export module internal {
					export class UserApiImpl extends com.spotify.android.appremote.api.UserApi {
						public static class: java.lang.Class<com.spotify.android.appremote.internal.UserApiImpl>;
						public addToLibrary(param0: string): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public getCapabilities(): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Capabilities>;
						public subscribeToCapabilities(): com.spotify.protocol.client.Subscription<com.spotify.protocol.types.Capabilities>;
						public subscribeToUserStatus(): com.spotify.protocol.client.Subscription<com.spotify.protocol.types.UserStatus>;
						public constructor(param0: com.spotify.protocol.client.RemoteClient);
						public removeFromLibrary(param0: string): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.Empty>;
						public getLibraryState(param0: string): com.spotify.protocol.client.CallResult<com.spotify.protocol.types.LibraryState>;
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module android {
			export module appremote {
				export module internal {
					export class Validate {
						public static class: java.lang.Class<com.spotify.android.appremote.internal.Validate>;
						public static checkNotNull(param0: any): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export class AppProtocol {
				public static class: java.lang.Class<com.spotify.protocol.AppProtocol>;
				public static EMPTY: com.spotify.protocol.types.Empty;
			}
			export module AppProtocol {
				export class CallUri {
					public static class: java.lang.Class<com.spotify.protocol.AppProtocol.CallUri>;
					public static SKIP_NEXT: string;
					public static SKIP_PREVIOUS: string;
					public static GET_PLAYER_STATE: string;
					public static PLAY_ITEM: string;
					public static PLAY_URI: string;
					public static PLAY_QUEUE: string;
					public static SET_PLAYBACK_SPEED: string;
					public static GET_THUMBNAIL_IMAGE: string;
					public static GET_IMAGE: string;
					public static SET_SHUFFLE: string;
					public static TOGGLE_SHUFFLE: string;
					public static SET_REPEAT: string;
					public static TOGGLE_REPEAT: string;
					public static SET_SAVED: string;
					public static GET_SAVED: string;
					public static CAPABILITIES: string;
					public static SET_PLAYBACK_POSITION: string;
					public static SEEK_TO_RELATIVE_POSITION: string;
					public static GET_CHILDREN_OF_ITEM: string;
					public static GET_RECOMMENDED_ROOT_ITEMS: string;
					public static CONNECT_SWITCH_TO_LOCAL_DEVICE: string;
					public static CONNECT_INCREASE_VOLUME: string;
					public static CONNECT_DECREASE_VOLUME: string;
					public static CONNECT_SET_VOLUME: string;
					public static GET_CROSSFADE: string;
					public static PLAY_URI_WITH_OPTION_EXTRAS: string;
					public static SKIP_TO_INDEX: string;
				}
				export class ErrorUri {
					public static class: java.lang.Class<com.spotify.protocol.AppProtocol.ErrorUri>;
					/**
					 * Constructs a new instance of the com.spotify.protocol.AppProtocol$ErrorUri interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {});
					public constructor();
					public static WAMP_ERROR_SYSTEM_SHUTDOWN: string;
					public static ERROR_AUTHENTICATION_FAILED: string;
					public static ERROR_NOT_LOGGED_IN: string;
					public static WAMP_ERROR: string;
					public static WAMP_ERROR_NOT_AUTHORIZED: string;
					public static ERROR_OFFLINE_MODE_ACTIVE: string;
					public static ERROR_INVALID_URI: string;
					public static ERROR_FEATURE_VERSION_MISMATCH: string;
					public static ERROR_USER_NOT_AUTHORIZED: string;
					public static ERROR_INVALID_ARGUMENT: string;
				}
				export class ItemId {
					public static class: java.lang.Class<com.spotify.protocol.AppProtocol.ItemId>;
					public static RECENTLY_PLAYED: string;
				}
				export class Topic {
					public static class: java.lang.Class<com.spotify.protocol.AppProtocol.Topic>;
					public static STATUS: string;
					public static PLAYER_STATE: string;
					public static PLAYER_CONTEXT: string;
					public static CAPABILITIES: string;
					public static CONNECT_VOLUME_STATE: string;
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export class WampClient {
				public static class: java.lang.Class<com.spotify.protocol.WampClient>;
				/**
				 * Constructs a new instance of the com.spotify.protocol.WampClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {});
				public constructor();
				public static WAMP_ERROR_SYSTEM_SHUTDOWN: string;
				public static WAMP_ERROR: string;
				public static ERROR_INVALID_URI: string;
				public static WAMP_CLIENT_REQUEST_SYSTEM_SHUTDOWN: string;
				public static ERROR_INVALID_ARGUMENT: string;
			}
			export module WampClient {
				export class Receiver {
					public static class: java.lang.Class<com.spotify.protocol.WampClient.Receiver>;
					/**
					 * Constructs a new instance of the com.spotify.protocol.WampClient$Receiver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onWelcome(param0: number, param1: com.spotify.protocol.mappers.JsonObject): void;
						onAbort(param0: com.spotify.protocol.mappers.JsonObject, param1: string): void;
						onGoodbye(param0: com.spotify.protocol.mappers.JsonObject, param1: string): void;
						onSubscribed(param0: com.spotify.protocol.types.Types.RequestId, param1: com.spotify.protocol.types.Types.SubscriptionId): void;
						onSubscribeError(param0: com.spotify.protocol.types.Types.RequestId, param1: com.spotify.protocol.mappers.JsonObject, param2: string): void;
						onUnsubscribed(param0: com.spotify.protocol.types.Types.RequestId): void;
						onUnubscribeError(param0: com.spotify.protocol.types.Types.RequestId, param1: com.spotify.protocol.mappers.JsonObject, param2: string): void;
						onEvent(param0: com.spotify.protocol.types.Types.SubscriptionId, param1: number, param2: com.spotify.protocol.mappers.JsonObject): void;
						onResult(param0: com.spotify.protocol.types.Types.RequestId, param1: com.spotify.protocol.mappers.JsonObject, param2: com.spotify.protocol.mappers.JsonObject, param3: com.spotify.protocol.mappers.JsonObject): void;
						onError(param0: com.spotify.protocol.types.Types.RequestId, param1: com.spotify.protocol.mappers.JsonObject, param2: string): void;
					});
					public constructor();
					public onUnsubscribed(param0: com.spotify.protocol.types.Types.RequestId): void;
					public onUnubscribeError(param0: com.spotify.protocol.types.Types.RequestId, param1: com.spotify.protocol.mappers.JsonObject, param2: string): void;
					public onEvent(param0: com.spotify.protocol.types.Types.SubscriptionId, param1: number, param2: com.spotify.protocol.mappers.JsonObject): void;
					public onResult(param0: com.spotify.protocol.types.Types.RequestId, param1: com.spotify.protocol.mappers.JsonObject, param2: com.spotify.protocol.mappers.JsonObject, param3: com.spotify.protocol.mappers.JsonObject): void;
					public onError(param0: com.spotify.protocol.types.Types.RequestId, param1: com.spotify.protocol.mappers.JsonObject, param2: string): void;
					public onAbort(param0: com.spotify.protocol.mappers.JsonObject, param1: string): void;
					public onWelcome(param0: number, param1: com.spotify.protocol.mappers.JsonObject): void;
					public onGoodbye(param0: com.spotify.protocol.mappers.JsonObject, param1: string): void;
					public onSubscribed(param0: com.spotify.protocol.types.Types.RequestId, param1: com.spotify.protocol.types.Types.SubscriptionId): void;
					public onSubscribeError(param0: com.spotify.protocol.types.Types.RequestId, param1: com.spotify.protocol.mappers.JsonObject, param2: string): void;
				}
				export class RequestType {
					public static class: java.lang.Class<com.spotify.protocol.WampClient.RequestType>;
					/**
					 * Constructs a new instance of the com.spotify.protocol.WampClient$RequestType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {});
					public constructor();
					public static WELCOME: number;
					public static SUBSCRIBE: number;
					public static SUBSCRIBED: number;
					public static EVENT: number;
					public static CALL: number;
					public static ABORT: number;
					public static HELLO: number;
					public static UNSUBSCRIBE: number;
					public static ERROR: number;
					public static RESULT: number;
					public static GOODBYE: number;
					public static UNSUBSCRIBED: number;
					public static CANCEL: number;
				}
				export class Router {
					public static class: java.lang.Class<com.spotify.protocol.WampClient.Router>;
					/**
					 * Constructs a new instance of the com.spotify.protocol.WampClient$Router interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { route(param0: com.spotify.protocol.WampMessage): boolean; addReceiver(param0: com.spotify.protocol.WampClient.Receiver): void; removeReceiver(param0: com.spotify.protocol.WampClient.Receiver): void });
					public constructor();
					public route(param0: com.spotify.protocol.WampMessage): boolean;
					public addReceiver(param0: com.spotify.protocol.WampClient.Receiver): void;
					public removeReceiver(param0: com.spotify.protocol.WampClient.Receiver): void;
				}
				export class Sender {
					public static class: java.lang.Class<com.spotify.protocol.WampClient.Sender>;
					/**
					 * Constructs a new instance of the com.spotify.protocol.WampClient$Sender interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { sendHello(): void; sendGoodbye(): void; sendSubscribe(param0: number, param1: any, param2: string): void; sendUnsubscribe(param0: number, param1: number): void; sendCall(param0: number, param1: any, param2: string): void; sendCall(param0: number, param1: any, param2: string, param3: java.util.List<any>): void; sendCall(param0: number, param1: any, param2: string, param3: java.util.List<any>, param4: any): void; sendCancel(param0: number, param1: any): void });
					public constructor();
					public sendHello(): void;
					public sendGoodbye(): void;
					public sendUnsubscribe(param0: number, param1: number): void;
					public sendSubscribe(param0: number, param1: any, param2: string): void;
					public sendCall(param0: number, param1: any, param2: string): void;
					public sendCall(param0: number, param1: any, param2: string, param3: java.util.List<any>, param4: any): void;
					public sendCall(param0: number, param1: any, param2: string, param3: java.util.List<any>): void;
					public sendCancel(param0: number, param1: any): void;
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export class WampMessage {
				public static class: java.lang.Class<com.spotify.protocol.WampMessage>;
				public getStringAt(param0: number): string;
				public getAction(): number;
				public getObjectAt(param0: number): com.spotify.protocol.mappers.JsonObject;
				public constructor(param0: com.spotify.protocol.mappers.JsonArray);
				public getIntAt(param0: number): number;
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module client {
				export class AppProtocolCommunicator implements com.spotify.protocol.WampClient, com.spotify.protocol.client.AppProtocolIo.DataInput, com.spotify.protocol.WampClient.Sender {
					public static class: java.lang.Class<com.spotify.protocol.client.AppProtocolCommunicator>;
					public sendHello(): void;
					public setMessageReceiver(param0: com.spotify.protocol.WampClient.Receiver): void;
					public constructor(param0: com.spotify.protocol.client.ConnectionDetails, param1: com.spotify.protocol.mappers.JsonMapper, param2: com.spotify.protocol.client.AppProtocolIo);
					public sendGoodbye(): void;
					public sendUnsubscribe(param0: number, param1: number): void;
					public sendSubscribe(param0: number, param1: any, param2: string): void;
					public sendCall(param0: number, param1: any, param2: string): void;
					public sendCall(param0: number, param1: any, param2: string, param3: java.util.List<any>, param4: any): void;
					public sendCall(param0: number, param1: any, param2: string, param3: java.util.List<any>): void;
					public onData(param0: androidNative.Array<number>, param1: number): void;
					public sendCancel(param0: number, param1: any): void;
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module client {
				export class AppProtocolIo {
					public static class: java.lang.Class<com.spotify.protocol.client.AppProtocolIo>;
					/**
					 * Constructs a new instance of the com.spotify.protocol.client.AppProtocolIo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { connect(): com.spotify.protocol.client.PendingResult<java.lang.Void>; disconnect(): void; isConnected(): boolean; isConnecting(): boolean; writeData(param0: androidNative.Array<number>, param1: number): void; setDataInput(param0: com.spotify.protocol.client.AppProtocolIo.DataInput): void });
					public constructor();
					public isConnected(): boolean;
					public connect(): com.spotify.protocol.client.PendingResult<java.lang.Void>;
					public setDataInput(param0: com.spotify.protocol.client.AppProtocolIo.DataInput): void;
					public disconnect(): void;
					public isConnecting(): boolean;
					public writeData(param0: androidNative.Array<number>, param1: number): void;
				}
				export module AppProtocolIo {
					export class DataInput {
						public static class: java.lang.Class<com.spotify.protocol.client.AppProtocolIo.DataInput>;
						/**
						 * Constructs a new instance of the com.spotify.protocol.client.AppProtocolIo$DataInput interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onData(param0: androidNative.Array<number>, param1: number): void });
						public constructor();
						public onData(param0: androidNative.Array<number>, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module client {
				export class CallResult<T> extends com.spotify.protocol.client.PendingResultBase<any> {
					public static class: java.lang.Class<com.spotify.protocol.client.CallResult<any>>;
					public setResultCallback(callback: com.spotify.protocol.client.CallResult.ResultCallback<any>): com.spotify.protocol.client.CallResult<any>;
					public await(): com.spotify.protocol.client.Result<any>;
					public constructor(param0: com.spotify.protocol.types.Types.RequestId);
					public constructor();
					public await(param0: number, param1: java.util.concurrent.TimeUnit): com.spotify.protocol.client.Result<any>;
					public onResultDelivered(): void;
					public cancel(): void;
					public setErrorCallback(param0: com.spotify.protocol.client.ErrorCallback): com.spotify.protocol.client.PendingResult<any>;
					public getRequestId(): com.spotify.protocol.types.Types.RequestId;
					public isCanceled(): boolean;
				}
				export module CallResult {
					export class ResultCallback<T> extends java.lang.Object {
						public static class: java.lang.Class<com.spotify.protocol.client.CallResult.ResultCallback<any>>;
						/**
						 * Constructs a new instance of the com.spotify.protocol.client.CallResult$ResultCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onResult(data: T): void });
						public constructor();
						public onResult(data: T): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module client {
				export class Coding {
					public static class: java.lang.Class<com.spotify.protocol.client.Coding>;
					public static checkNotNull(param0: any): any;
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module client {
				export class ConnectionDetails {
					public static class: java.lang.Class<com.spotify.protocol.client.ConnectionDetails>;
					public getThumbnailImageWidth(): number;
					public getAuthId(): string;
					public getVersion(): string;
					public getId(): string;
					public getModel(): string;
					public getAuthMethods(): androidNative.Array<string>;
					public getRequiredFeatures(): java.util.List<string>;
					public getCategory(): string;
					public getImageWidth(): number;
					public getImageHeight(): number;
					public getName(): string;
					public getExtras(): java.util.Map<string, string>;
					public getThumbnailImageHeight(): number;
				}
				export module ConnectionDetails {
					export class Builder {
						public static class: java.lang.Class<com.spotify.protocol.client.ConnectionDetails.Builder>;
						public setRequiredFeatures(param0: java.util.List<string>): com.spotify.protocol.client.ConnectionDetails.Builder;
						public setName(param0: string): com.spotify.protocol.client.ConnectionDetails.Builder;
						public setVersion(param0: string): com.spotify.protocol.client.ConnectionDetails.Builder;
						public getName(): string;
						public build(): com.spotify.protocol.client.ConnectionDetails;
						public setModel(param0: string): com.spotify.protocol.client.ConnectionDetails.Builder;
						public getModel(): string;
						public setImageSize(param0: number): com.spotify.protocol.client.ConnectionDetails.Builder;
						public setAuthMethods(param0: androidNative.Array<string>): com.spotify.protocol.client.ConnectionDetails.Builder;
						public setExtras(param0: java.util.Map<string, string>): com.spotify.protocol.client.ConnectionDetails.Builder;
						public setCategory(param0: string): com.spotify.protocol.client.ConnectionDetails.Builder;
						public setThumbnailSize(param0: number): com.spotify.protocol.client.ConnectionDetails.Builder;
						public setAuthId(param0: string): com.spotify.protocol.client.ConnectionDetails.Builder;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module client {
				export class Debug {
					public static class: java.lang.Class<com.spotify.protocol.client.Debug>;
					public static setAssertion(param0: com.spotify.protocol.client.Debug.Assertion): void;
					public static setLogger(param0: com.spotify.protocol.client.Debug.Logger): void;
					public static assertTrue(param0: boolean, param1: string): void;
					public static e(param0: java.lang.Throwable, param1: string, param2: androidNative.Array<any>): void;
					public static e(param0: string, param1: androidNative.Array<any>): void;
					public static d(param0: java.lang.Throwable, param1: string, param2: androidNative.Array<any>): void;
					public static d(param0: string, param1: androidNative.Array<any>): void;
				}
				export module Debug {
					export class Assertion {
						public static class: java.lang.Class<com.spotify.protocol.client.Debug.Assertion>;
						/**
						 * Constructs a new instance of the com.spotify.protocol.client.Debug$Assertion interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { assertTrue(param0: boolean, param1: string): void });
						public constructor();
						public assertTrue(param0: boolean, param1: string): void;
					}
					export class Logger {
						public static class: java.lang.Class<com.spotify.protocol.client.Debug.Logger>;
						/**
						 * Constructs a new instance of the com.spotify.protocol.client.Debug$Logger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { e(param0: java.lang.Throwable, param1: string, param2: androidNative.Array<any>): void; d(param0: java.lang.Throwable, param1: string, param2: androidNative.Array<any>): void; e(param0: string, param1: androidNative.Array<any>): void; d(param0: string, param1: androidNative.Array<any>): void });
						public constructor();
						public d(param0: java.lang.Throwable, param1: string, param2: androidNative.Array<any>): void;
						public d(param0: string, param1: androidNative.Array<any>): void;
						public e(param0: string, param1: androidNative.Array<any>): void;
						public e(param0: java.lang.Throwable, param1: string, param2: androidNative.Array<any>): void;
					}
					export class VoidAssertion extends com.spotify.protocol.client.Debug.Assertion {
						public static class: java.lang.Class<com.spotify.protocol.client.Debug.VoidAssertion>;
						public assertTrue(param0: boolean, param1: string): void;
					}
					export class VoidLogger extends com.spotify.protocol.client.Debug.Logger {
						public static class: java.lang.Class<com.spotify.protocol.client.Debug.VoidLogger>;
						public d(param0: java.lang.Throwable, param1: string, param2: androidNative.Array<any>): void;
						public d(param0: string, param1: androidNative.Array<any>): void;
						public e(param0: string, param1: androidNative.Array<any>): void;
						public e(param0: java.lang.Throwable, param1: string, param2: androidNative.Array<any>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module client {
				export class ErrorCallback {
					public static class: java.lang.Class<com.spotify.protocol.client.ErrorCallback>;
					/**
					 * Constructs a new instance of the com.spotify.protocol.client.ErrorCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onError(param0: java.lang.Throwable): void });
					public constructor();
					public onError(param0: java.lang.Throwable): void;
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module client {
				export class OnConnectionTerminatedListener {
					public static class: java.lang.Class<com.spotify.protocol.client.OnConnectionTerminatedListener>;
					/**
					 * Constructs a new instance of the com.spotify.protocol.client.OnConnectionTerminatedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onConnectionTerminated(): void });
					public constructor();
					public onConnectionTerminated(): void;
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module client {
				export class PendingResult<T> extends java.lang.Object {
					public static class: java.lang.Class<com.spotify.protocol.client.PendingResult<any>>;
					/**
					 * Constructs a new instance of the com.spotify.protocol.client.PendingResult<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { cancel(): void; isCanceled(): boolean; await(): com.spotify.protocol.client.Result<T>; await(param0: number, param1: java.util.concurrent.TimeUnit): com.spotify.protocol.client.Result<T>; setErrorCallback(param0: com.spotify.protocol.client.ErrorCallback): com.spotify.protocol.client.PendingResult<T> });
					public constructor();
					public setErrorCallback(param0: com.spotify.protocol.client.ErrorCallback): com.spotify.protocol.client.PendingResult<T>;
					public await(): com.spotify.protocol.client.Result<T>;
					public cancel(): void;
					public await(param0: number, param1: java.util.concurrent.TimeUnit): com.spotify.protocol.client.Result<T>;
					public isCanceled(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module client {
				export abstract class PendingResultBase<T> extends com.spotify.protocol.client.PendingResult<any> {
					public static class: java.lang.Class<com.spotify.protocol.client.PendingResultBase<any>>;
					public mIsCanceled: boolean;
					public mRecentResult: com.spotify.protocol.client.Result<any>;
					public mErrorCallback: com.spotify.protocol.client.ErrorCallback;
					public deliverResult(param0: com.spotify.protocol.client.Result<any>): void;
					public await(): com.spotify.protocol.client.Result<any>;
					public deliverError(param0: java.lang.Throwable): void;
					public constructor();
					public await(param0: number, param1: java.util.concurrent.TimeUnit): com.spotify.protocol.client.Result<any>;
					public onResultDelivered(): void;
					public cancel(): void;
					public setErrorCallback(param0: com.spotify.protocol.client.ErrorCallback): com.spotify.protocol.client.PendingResult<any>;
					public isCanceled(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module client {
				export class RemoteClient {
					public static class: java.lang.Class<com.spotify.protocol.client.RemoteClient>;
					/**
					 * Constructs a new instance of the com.spotify.protocol.client.RemoteClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { hello(param0: java.lang.Class): com.spotify.protocol.client.CallResult<any>; goodbye(): void; call(param0: string, param1: java.lang.Class): com.spotify.protocol.client.CallResult<any>; call(param0: string, param1: any, param2: java.lang.Class): com.spotify.protocol.client.CallResult<any>; subscribe(param0: string, param1: java.lang.Class): com.spotify.protocol.client.Subscription<any>; unsubscribe(param0: com.spotify.protocol.client.Subscription<any>): void });
					public constructor();
					public call(param0: string, param1: any, param2: java.lang.Class): com.spotify.protocol.client.CallResult<any>;
					public hello(param0: java.lang.Class): com.spotify.protocol.client.CallResult<any>;
					public goodbye(): void;
					public call(param0: string, param1: java.lang.Class): com.spotify.protocol.client.CallResult<any>;
					public unsubscribe(param0: com.spotify.protocol.client.Subscription<any>): void;
					public subscribe(param0: string, param1: java.lang.Class): com.spotify.protocol.client.Subscription<any>;
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module client {
				export class RemoteClientConnector {
					public static class: java.lang.Class<com.spotify.protocol.client.RemoteClientConnector>;
					/**
					 * Constructs a new instance of the com.spotify.protocol.client.RemoteClientConnector interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { disconnect(): void; connect(param0: com.spotify.protocol.client.RemoteClientConnector.ConnectionCallback): void });
					public constructor();
					public connect(param0: com.spotify.protocol.client.RemoteClientConnector.ConnectionCallback): void;
					public disconnect(): void;
				}
				export module RemoteClientConnector {
					export class ConnectionCallback {
						public static class: java.lang.Class<com.spotify.protocol.client.RemoteClientConnector.ConnectionCallback>;
						/**
						 * Constructs a new instance of the com.spotify.protocol.client.RemoteClientConnector$ConnectionCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onConnected(param0: com.spotify.protocol.client.RemoteClient): void; onConnectionFailed(param0: java.lang.Throwable): void });
						public constructor();
						public onConnected(param0: com.spotify.protocol.client.RemoteClient): void;
						public onConnectionFailed(param0: java.lang.Throwable): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module client {
				export class RemoteWampClient extends com.spotify.protocol.client.RemoteClient {
					public static class: java.lang.Class<com.spotify.protocol.client.RemoteWampClient>;
					public setOnConnectionTerminatedListener(param0: com.spotify.protocol.client.OnConnectionTerminatedListener): void;
					public call(param0: string, param1: any, param2: java.lang.Class): com.spotify.protocol.client.CallResult<any>;
					public hello(param0: java.lang.Class): com.spotify.protocol.client.CallResult<any>;
					public goodbye(): void;
					public call(param0: string, param1: java.lang.Class): com.spotify.protocol.client.CallResult<any>;
					public unsubscribe(param0: com.spotify.protocol.client.Subscription<any>): void;
					public constructor(param0: com.spotify.protocol.client.AppProtocolCommunicator, param1: com.spotify.protocol.client.WampCallsOrchestrator);
					public subscribe(param0: string, param1: java.lang.Class): com.spotify.protocol.client.Subscription<any>;
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module client {
				export class RequiredFeatures {
					public static class: java.lang.Class<com.spotify.protocol.client.RequiredFeatures>;
					public static FEATURES_V1: string;
					public static FEATURES_V2: string;
					public static FEATURES_V3: string;
					public static NONE: java.util.List<string>;
					public static FEATURES: java.util.List<string>;
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module client {
				export class Result<T> extends java.lang.Object {
					public static class: java.lang.Class<com.spotify.protocol.client.Result<any>>;
					/**
					 * Constructs a new instance of the com.spotify.protocol.client.Result<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { getData(): T; isSuccessful(): boolean; getErrorMessage(): string; getError(): java.lang.Throwable });
					public constructor();
					public getErrorMessage(): string;
					public isSuccessful(): boolean;
					public getData(): T;
					public getError(): java.lang.Throwable;
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module client {
				export class ResultUtils {
					public static class: java.lang.Class<com.spotify.protocol.client.ResultUtils>;
					public static createErrorResult(param0: java.lang.Throwable): com.spotify.protocol.client.Result<any>;
					public static createSuccessfulResult(param0: any): com.spotify.protocol.client.Result<any>;
				}
				export module ResultUtils {
					export class ErrorResult<T> extends com.spotify.protocol.client.Result<any> {
						public static class: java.lang.Class<com.spotify.protocol.client.ResultUtils.ErrorResult<any>>;
						public getErrorMessage(): string;
						public isSuccessful(): boolean;
						public getData(): any;
						public getError(): java.lang.Throwable;
					}
					export class SuccessfulResult<T> extends com.spotify.protocol.client.Result<any> {
						public static class: java.lang.Class<com.spotify.protocol.client.ResultUtils.SuccessfulResult<any>>;
						public getErrorMessage(): string;
						public isSuccessful(): boolean;
						public getData(): any;
						public getError(): java.lang.Throwable;
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module client {
				export class Subscription<T> extends com.spotify.protocol.client.PendingResultBase<any> {
					public static class: java.lang.Class<com.spotify.protocol.client.Subscription<any>>;
					public await(): com.spotify.protocol.client.Result<any>;
					public constructor(param0: com.spotify.protocol.types.Types.RequestId, param1: com.spotify.protocol.client.RemoteClient);
					public setLifecycleCallback(param0: com.spotify.protocol.client.Subscription.LifecycleCallback): com.spotify.protocol.client.Subscription<any>;
					public constructor();
					public await(param0: number, param1: java.util.concurrent.TimeUnit): com.spotify.protocol.client.Result<any>;
					public onResultDelivered(): void;
					public cancel(): void;
					public setEventCallback(param0: com.spotify.protocol.client.Subscription.EventCallback<any>): com.spotify.protocol.client.Subscription<any>;
					public setErrorCallback(param0: com.spotify.protocol.client.ErrorCallback): com.spotify.protocol.client.PendingResult<any>;
					public getRequestId(): com.spotify.protocol.types.Types.RequestId;
					public isCanceled(): boolean;
				}
				export module Subscription {
					export class EventCallback<T> extends java.lang.Object {
						public static class: java.lang.Class<com.spotify.protocol.client.Subscription.EventCallback<any>>;
						/**
						 * Constructs a new instance of the com.spotify.protocol.client.Subscription$EventCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onEvent(param0: T): void });
						public constructor();
						public onEvent(param0: T): void;
					}
					export class LifecycleCallback {
						public static class: java.lang.Class<com.spotify.protocol.client.Subscription.LifecycleCallback>;
						/**
						 * Constructs a new instance of the com.spotify.protocol.client.Subscription$LifecycleCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { onStart(): void; onStop(): void });
						public constructor();
						public onStop(): void;
						public onStart(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module client {
				export class WampCallsOrchestrator {
					public static class: java.lang.Class<com.spotify.protocol.client.WampCallsOrchestrator>;
					public constructor();
				}
				export module WampCallsOrchestrator {
					export class CallRecord<T> extends java.lang.Object {
						public static class: java.lang.Class<com.spotify.protocol.client.WampCallsOrchestrator.CallRecord<any>>;
						public deliverResultWithPayload(param0: com.spotify.protocol.mappers.JsonObject): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
					}
					export class SubscriptionRecord<T> extends java.lang.Object {
						public static class: java.lang.Class<com.spotify.protocol.client.WampCallsOrchestrator.SubscriptionRecord<any>>;
						public deliverEventWithPayload(param0: com.spotify.protocol.mappers.JsonObject): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module client {
				export class WampRouterImpl implements com.spotify.protocol.WampClient.Router, com.spotify.protocol.WampClient.RequestType {
					public static class: java.lang.Class<com.spotify.protocol.client.WampRouterImpl>;
					public route(param0: com.spotify.protocol.WampMessage): boolean;
					public addReceiver(param0: com.spotify.protocol.WampClient.Receiver): void;
					public removeReceiver(param0: com.spotify.protocol.WampClient.Receiver): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module client {
				export module error {
					export class RemoteClientException extends com.spotify.protocol.error.SpotifyAppRemoteException {
						public static class: java.lang.Class<com.spotify.protocol.client.error.RemoteClientException>;
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public getReasonUri(): string;
						public constructor(param0: string, param1: string);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module error {
				export class SpotifyAppRemoteException {
					public static class: java.lang.Class<com.spotify.protocol.error.SpotifyAppRemoteException>;
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
					public constructor(param0: java.lang.Throwable);
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module mappers {
				export class JsonArray {
					public static class: java.lang.Class<com.spotify.protocol.mappers.JsonArray>;
					/**
					 * Constructs a new instance of the com.spotify.protocol.mappers.JsonArray interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { getIntAt(param0: number): number; getStringAt(param0: number): string; getObjectAt(param0: number): com.spotify.protocol.mappers.JsonObject });
					public constructor();
					public getObjectAt(param0: number): com.spotify.protocol.mappers.JsonObject;
					public getStringAt(param0: number): string;
					public getIntAt(param0: number): number;
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module mappers {
				export class JsonMapper {
					public static class: java.lang.Class<com.spotify.protocol.mappers.JsonMapper>;
					/**
					 * Constructs a new instance of the com.spotify.protocol.mappers.JsonMapper interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { toJsonArray(param0: string): com.spotify.protocol.mappers.JsonArray; toJson(param0: any): string });
					public constructor();
					public toJson(param0: any): string;
					public toJsonArray(param0: string): com.spotify.protocol.mappers.JsonArray;
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module mappers {
				export class JsonMappingException {
					public static class: java.lang.Class<com.spotify.protocol.mappers.JsonMappingException>;
					public constructor(param0: java.lang.Throwable);
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module mappers {
				export class JsonObject {
					public static class: java.lang.Class<com.spotify.protocol.mappers.JsonObject>;
					/**
					 * Constructs a new instance of the com.spotify.protocol.mappers.JsonObject interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { getAs(param0: java.lang.Class): any; toJson(): string });
					public constructor();
					public toJson(): string;
					public getAs(param0: java.lang.Class): any;
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module mappers {
				export module gson {
					export class GsonMapper extends com.spotify.protocol.mappers.JsonMapper {
						public static class: java.lang.Class<com.spotify.protocol.mappers.gson.GsonMapper>;
						public toJsonArray(param0: string): com.spotify.protocol.mappers.JsonArray;
						public static create(): com.spotify.protocol.mappers.gson.GsonMapper;
						public toJson(param0: any): string;
					}
					export module GsonMapper {
						export class ByteArrayToBase64TypeAdapter extends java.lang.Object {
							public static class: java.lang.Class<com.spotify.protocol.mappers.gson.GsonMapper.ByteArrayToBase64TypeAdapter>;
							public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): androidNative.Array<number>;
							public serialize(param0: androidNative.Array<number>, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
						}
						export class GsonJsonArray extends com.spotify.protocol.mappers.JsonArray {
							public static class: java.lang.Class<com.spotify.protocol.mappers.gson.GsonMapper.GsonJsonArray>;
							public getStringAt(param0: number): string;
							public getIntAt(param0: number): number;
							public getObjectAt(param0: number): com.spotify.protocol.mappers.JsonObject;
						}
						export class GsonJsonObject extends com.spotify.protocol.mappers.JsonObject {
							public static class: java.lang.Class<com.spotify.protocol.mappers.gson.GsonMapper.GsonJsonObject>;
							public getAs(param0: java.lang.Class): any;
							public toJson(): string;
						}
						export class ImageUriGson extends java.lang.Object {
							public static class: java.lang.Class<com.spotify.protocol.mappers.gson.GsonMapper.ImageUriGson>;
							public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): com.spotify.protocol.types.ImageUri;
							public serialize(param0: com.spotify.protocol.types.ImageUri, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module mappers {
				export module jackson {
					export class ImageUriJson {
						public static class: java.lang.Class<com.spotify.protocol.mappers.jackson.ImageUriJson>;
						public constructor();
					}
					export module ImageUriJson {
						export class Deserializer extends com.fasterxml.jackson.databind.deser.std.StdDeserializer<com.spotify.protocol.types.ImageUri> {
							public static class: java.lang.Class<com.spotify.protocol.mappers.jackson.ImageUriJson.Deserializer>;
							public constructor();
							public deserialize(param0: com.fasterxml.jackson.core.JsonParser, param1: com.fasterxml.jackson.databind.DeserializationContext): com.spotify.protocol.types.ImageUri;
						}
						export class Serializer extends com.fasterxml.jackson.databind.ser.std.StdSerializer<com.spotify.protocol.types.ImageUri> {
							public static class: java.lang.Class<com.spotify.protocol.mappers.jackson.ImageUriJson.Serializer>;
							public constructor();
							public serialize(param0: com.spotify.protocol.types.ImageUri, param1: com.fasterxml.jackson.core.JsonGenerator, param2: com.fasterxml.jackson.databind.SerializerProvider): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module mappers {
				export module jackson {
					export class JacksonMapper extends com.spotify.protocol.mappers.JsonMapper {
						public static class: java.lang.Class<com.spotify.protocol.mappers.jackson.JacksonMapper>;
						public toJsonArray(param0: string): com.spotify.protocol.mappers.JsonArray;
						public static create(): com.spotify.protocol.mappers.jackson.JacksonMapper;
						public toJson(param0: any): string;
					}
					export module JacksonMapper {
						export class JacksonJsonArray extends com.spotify.protocol.mappers.JsonArray {
							public static class: java.lang.Class<com.spotify.protocol.mappers.jackson.JacksonMapper.JacksonJsonArray>;
							public getStringAt(param0: number): string;
							public getIntAt(param0: number): number;
							public getObjectAt(param0: number): com.spotify.protocol.mappers.JsonObject;
						}
						export class JacksonJsonObject extends com.spotify.protocol.mappers.JsonObject {
							public static class: java.lang.Class<com.spotify.protocol.mappers.jackson.JacksonMapper.JacksonJsonObject>;
							public getAs(param0: java.lang.Class): any;
							public toJson(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module types {
				export class Album extends com.spotify.protocol.types.Item {
					public static class: java.lang.Class<com.spotify.protocol.types.Album>;
					public name: string;
					public uri: string;
					public constructor(param0: string, param1: string);
					public equals(param0: any): boolean;
					public toString(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module types {
				export class Artist extends com.spotify.protocol.types.Item {
					public static class: java.lang.Class<com.spotify.protocol.types.Artist>;
					public name: string;
					public uri: string;
					public constructor(param0: string, param1: string);
					public equals(param0: any): boolean;
					public toString(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module types {
				export class Capabilities extends com.spotify.protocol.types.Item {
					public static class: java.lang.Class<com.spotify.protocol.types.Capabilities>;
					public canPlayOnDemand: boolean;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(param0: boolean);
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module types {
				export class ChildrenPageRequest extends com.spotify.protocol.types.Item {
					public static class: java.lang.Class<com.spotify.protocol.types.ChildrenPageRequest>;
					public parentId: string;
					public limit: number;
					public offset: number;
					public equals(param0: any): boolean;
					public toString(): string;
					public hashCode(): number;
					public constructor(param0: string, param1: number, param2: number);
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module types {
				export class CrossfadeState extends com.spotify.protocol.types.Item {
					public static class: java.lang.Class<com.spotify.protocol.types.CrossfadeState>;
					public isEnabled: boolean;
					public duration: number;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(param0: boolean, param1: number);
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module types {
				export class Empty extends com.spotify.protocol.types.Item {
					public static class: java.lang.Class<com.spotify.protocol.types.Empty>;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module types {
				export class GetRecommendedContentItemsRequest {
					public static class: java.lang.Class<com.spotify.protocol.types.GetRecommendedContentItemsRequest>;
					public type: string;
					public constructor(param0: string);
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module types {
				export class HelloDetails extends com.spotify.protocol.types.Item {
					public static class: java.lang.Class<com.spotify.protocol.types.HelloDetails>;
					public roles: com.spotify.protocol.types.Roles;
					public info: com.spotify.protocol.types.Info;
					public authmethods: androidNative.Array<string>;
					public authid: string;
					public extras: java.util.Map<string, string>;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(param0: com.spotify.protocol.types.Roles, param1: com.spotify.protocol.types.Info, param2: androidNative.Array<string>, param3: string, param4: java.util.Map<string, string>);
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module types {
				export class Identifier extends com.spotify.protocol.types.Item {
					public static class: java.lang.Class<com.spotify.protocol.types.Identifier>;
					public id: string;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(param0: string);
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module types {
				export class Image extends com.spotify.protocol.types.Item {
					public static class: java.lang.Class<com.spotify.protocol.types.Image>;
					public imageData: androidNative.Array<number>;
					public width: number;
					public height: number;
					public constructor(param0: androidNative.Array<number>, param1: number, param2: number);
					public equals(param0: any): boolean;
					public toString(): string;
					public hashCode(): number;
				}
				export module Image {
					export class Dimension {
						public static class: java.lang.Class<com.spotify.protocol.types.Image.Dimension>;
						public static LARGE: com.spotify.protocol.types.Image.Dimension;
						public static MEDIUM: com.spotify.protocol.types.Image.Dimension;
						public static SMALL: com.spotify.protocol.types.Image.Dimension;
						public static X_SMALL: com.spotify.protocol.types.Image.Dimension;
						public static THUMBNAIL: com.spotify.protocol.types.Image.Dimension;
						public static valueOf(param0: string): com.spotify.protocol.types.Image.Dimension;
						public static values(): androidNative.Array<com.spotify.protocol.types.Image.Dimension>;
						public getValue(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module types {
				export class ImageIdentifier extends com.spotify.protocol.types.Item {
					public static class: java.lang.Class<com.spotify.protocol.types.ImageIdentifier>;
					public id: string;
					public height: number;
					public width: number;
					public equals(param0: any): boolean;
					public hashCode(): number;
					public constructor(param0: string, param1: com.spotify.protocol.types.Image.Dimension);
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module types {
				export class ImageUri extends com.spotify.protocol.types.Item {
					public static class: java.lang.Class<com.spotify.protocol.types.ImageUri>;
					public raw: string;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(raw: string);
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module types {
				export class Info extends com.spotify.protocol.types.Item {
					public static class: java.lang.Class<com.spotify.protocol.types.Info>;
					public protocolVersion: number;
					public id: string;
					public name: string;
					public model: string;
					public category: string;
					public version: string;
					public imageType: string;
					public requiredFeatures: java.util.List<string>;
					public defaultImageHeight: number;
					public defaultImageWidth: number;
					public defaultThumbnailImageHeight: number;
					public defaultThumbnailImageWidth: number;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(param0: number, param1: java.util.List<string>, param2: string, param3: string, param4: string, param5: string, param6: string, param7: string, param8: number, param9: number, param10: number, param11: number);
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module types {
				export class Item {
					public static class: java.lang.Class<com.spotify.protocol.types.Item>;
					/**
					 * Constructs a new instance of the com.spotify.protocol.types.Item interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module types {
				export class LibraryState extends com.spotify.protocol.types.Item {
					public static class: java.lang.Class<com.spotify.protocol.types.LibraryState>;
					public uri: string;
					public isAdded: boolean;
					public canAdd: boolean;
					public constructor(param0: string, param1: boolean, param2: boolean);
					public equals(param0: any): boolean;
					public toString(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module types {
				export class ListItem extends com.spotify.protocol.types.Item {
					public static class: java.lang.Class<com.spotify.protocol.types.ListItem>;
					public id: string;
					public uri: string;
					public imageUri: com.spotify.protocol.types.ImageUri;
					public title: string;
					public subtitle: string;
					public playable: boolean;
					public hasChildren: boolean;
					public equals(param0: any): boolean;
					public toString(): string;
					public hashCode(): number;
					public constructor(id: string, uri: string, imageUri: com.spotify.protocol.types.ImageUri, title: string, subtitle: string, playable: boolean, hasChildren: boolean);
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module types {
				export class ListItems extends com.spotify.protocol.types.Item {
					public static class: java.lang.Class<com.spotify.protocol.types.ListItems>;
					public limit: number;
					public offset: number;
					public total: number;
					public items: androidNative.Array<com.spotify.protocol.types.ListItem>;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(limit: number, offset: number, total: number, items: androidNative.Array<com.spotify.protocol.types.ListItem>);
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module types {
				export class Message extends com.spotify.protocol.types.Item {
					public static class: java.lang.Class<com.spotify.protocol.types.Message>;
					public message: string;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(param0: string);
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module types {
				export class MotionState extends com.spotify.protocol.types.Item {
					public static class: java.lang.Class<com.spotify.protocol.types.MotionState>;
					public static UNKNOWN: number;
					public static INITIAL: number;
					public static DETECTING: number;
					public static DETECTED: number;
					public static ERROR: number;
					public static SKIPPED: number;
					public state: number;
					public equals(param0: any): boolean;
					public toString(): string;
					public hashCode(): number;
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module types {
				export class PlaybackPosition extends com.spotify.protocol.types.Item {
					public static class: java.lang.Class<com.spotify.protocol.types.PlaybackPosition>;
					public position: number;
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module types {
				export class PlaybackSpeed extends com.spotify.protocol.types.Item {
					public static class: java.lang.Class<com.spotify.protocol.types.PlaybackSpeed>;
					public playbackSpeed: number;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor();
					public hashCode(): number;
					public constructor(param0: number);
				}
				export module PlaybackSpeed {
					export class PodcastPlaybackSpeed {
						public static class: java.lang.Class<com.spotify.protocol.types.PlaybackSpeed.PodcastPlaybackSpeed>;
						public static PLAYBACK_SPEED_50: com.spotify.protocol.types.PlaybackSpeed.PodcastPlaybackSpeed;
						public static PLAYBACK_SPEED_80: com.spotify.protocol.types.PlaybackSpeed.PodcastPlaybackSpeed;
						public static PLAYBACK_SPEED_100: com.spotify.protocol.types.PlaybackSpeed.PodcastPlaybackSpeed;
						public static PLAYBACK_SPEED_120: com.spotify.protocol.types.PlaybackSpeed.PodcastPlaybackSpeed;
						public static PLAYBACK_SPEED_150: com.spotify.protocol.types.PlaybackSpeed.PodcastPlaybackSpeed;
						public static PLAYBACK_SPEED_200: com.spotify.protocol.types.PlaybackSpeed.PodcastPlaybackSpeed;
						public static PLAYBACK_SPEED_300: com.spotify.protocol.types.PlaybackSpeed.PodcastPlaybackSpeed;
						public static valueOf(param0: string): com.spotify.protocol.types.PlaybackSpeed.PodcastPlaybackSpeed;
						public static values(): androidNative.Array<com.spotify.protocol.types.PlaybackSpeed.PodcastPlaybackSpeed>;
						public getValue(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module types {
				export class PlayerContext extends com.spotify.protocol.types.Item {
					public static class: java.lang.Class<com.spotify.protocol.types.PlayerContext>;
					public uri: string;
					public title: string;
					public subtitle: string;
					public type: string;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(param0: string, param1: string, param2: string, param3: string);
					public constructor();
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module types {
				export class PlayerOptions extends com.spotify.protocol.types.Item {
					public static class: java.lang.Class<com.spotify.protocol.types.PlayerOptions>;
					public static DEFAULT: com.spotify.protocol.types.PlayerOptions;
					public isShuffling: boolean;
					public repeatMode: number;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(param0: boolean, param1: number);
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module types {
				export class PlayerRestrictions extends com.spotify.protocol.types.Item {
					public static class: java.lang.Class<com.spotify.protocol.types.PlayerRestrictions>;
					public static DEFAULT: com.spotify.protocol.types.PlayerRestrictions;
					public canSkipNext: boolean;
					public canSkipPrev: boolean;
					public canRepeatTrack: boolean;
					public canRepeatContext: boolean;
					public canToggleShuffle: boolean;
					public canSeek: boolean;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(param0: boolean, param1: boolean, param2: boolean, param3: boolean, param4: boolean, param5: boolean);
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module types {
				export class PlayerState extends com.spotify.protocol.types.Item {
					public static class: java.lang.Class<com.spotify.protocol.types.PlayerState>;
					public track: com.spotify.protocol.types.Track;
					public isPaused: boolean;
					public playbackSpeed: number;
					public playbackPosition: number;
					public playbackOptions: com.spotify.protocol.types.PlayerOptions;
					public playbackRestrictions: com.spotify.protocol.types.PlayerRestrictions;
					public constructor(param0: com.spotify.protocol.types.Track, param1: boolean, param2: number, param3: number, param4: com.spotify.protocol.types.PlayerOptions, param5: com.spotify.protocol.types.PlayerRestrictions);
					public equals(param0: any): boolean;
					public toString(): string;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module types {
				export class Repeat extends com.spotify.protocol.types.Item {
					public static class: java.lang.Class<com.spotify.protocol.types.Repeat>;
					public static OFF: number;
					public static ONE: number;
					public static ALL: number;
					public repeat: number;
					public equals(param0: any): boolean;
					public toString(): string;
					public hashCode(): number;
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module types {
				export class Roles extends com.spotify.protocol.types.Item {
					public static class: java.lang.Class<com.spotify.protocol.types.Roles>;
					public dealer: com.spotify.protocol.types.Empty;
					public broker: com.spotify.protocol.types.Empty;
					public subscriber: com.spotify.protocol.types.Empty;
					public caller: com.spotify.protocol.types.Empty;
					public equals(param0: any): boolean;
					public constructor(param0: com.spotify.protocol.types.Empty, param1: com.spotify.protocol.types.Empty, param2: com.spotify.protocol.types.Empty, param3: com.spotify.protocol.types.Empty);
					public toString(): string;
					public constructor();
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module types {
				export class Shuffle extends com.spotify.protocol.types.Item {
					public static class: java.lang.Class<com.spotify.protocol.types.Shuffle>;
					public shuffle: boolean;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(param0: boolean);
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module types {
				export class Track extends com.spotify.protocol.types.Item {
					public static class: java.lang.Class<com.spotify.protocol.types.Track>;
					public artist: com.spotify.protocol.types.Artist;
					public artists: java.util.List<com.spotify.protocol.types.Artist>;
					public album: com.spotify.protocol.types.Album;
					public duration: number;
					public name: string;
					public uri: string;
					public imageUri: com.spotify.protocol.types.ImageUri;
					public isEpisode: boolean;
					public isPodcast: boolean;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(param0: com.spotify.protocol.types.Artist, param1: java.util.List<com.spotify.protocol.types.Artist>, param2: com.spotify.protocol.types.Album, param3: number, param4: string, param5: string, param6: com.spotify.protocol.types.ImageUri, param7: boolean, param8: boolean);
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module types {
				export class Types {
					public static class: java.lang.Class<com.spotify.protocol.types.Types>;
					/**
					 * Constructs a new instance of the com.spotify.protocol.types.Types interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {});
					public constructor();
				}
				export module Types {
					export class RequestId {
						public static class: java.lang.Class<com.spotify.protocol.types.Types.RequestId>;
						public static NONE: com.spotify.protocol.types.Types.RequestId;
						public static from(param0: number): com.spotify.protocol.types.Types.RequestId;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getRaw(): number;
						public toString(): string;
					}
					export class SubscriptionId {
						public static class: java.lang.Class<com.spotify.protocol.types.Types.SubscriptionId>;
						public static NONE: com.spotify.protocol.types.Types.SubscriptionId;
						public static from(param0: number): com.spotify.protocol.types.Types.SubscriptionId;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public getRaw(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module types {
				export class Uri extends com.spotify.protocol.types.Item {
					public static class: java.lang.Class<com.spotify.protocol.types.Uri>;
					public uri: string;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(param0: string);
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module types {
				export class UriWithOptionExtras extends com.spotify.protocol.types.Item {
					public static class: java.lang.Class<com.spotify.protocol.types.UriWithOptionExtras>;
					public uri: string;
					public options: androidNative.Array<string>;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor();
					public constructor(param0: string, param1: androidNative.Array<string>);
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module types {
				export class Uris extends com.spotify.protocol.types.Item {
					public static class: java.lang.Class<com.spotify.protocol.types.Uris>;
					public uris: androidNative.Array<string>;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor();
					public constructor(param0: androidNative.Array<string>);
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module types {
				export class UserStatus extends com.spotify.protocol.types.Item {
					public static class: java.lang.Class<com.spotify.protocol.types.UserStatus>;
					public static STATUS_CODE_OK: number;
					public static STATUS_CODE_NOT_LOGGED_IN: number;
					public code: number;
					public shortMessage: string;
					public longMessage: string;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(param0: number, param1: string, param2: string);
					public isLoggedIn(): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module types {
				export class VolumeState extends com.spotify.protocol.types.Item {
					public static class: java.lang.Class<com.spotify.protocol.types.VolumeState>;
					public mVolume: number;
					public equals(param0: any): boolean;
					public hashCode(): number;
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module com {
	export module spotify {
		export module protocol {
			export module types {
				export class WelcomeDetails extends com.spotify.protocol.types.Item {
					public static class: java.lang.Class<com.spotify.protocol.types.WelcomeDetails>;
					public roles: com.spotify.protocol.types.Roles;
					public equals(param0: any): boolean;
					public toString(): string;
					public hashCode(): number;
					public constructor(param0: com.spotify.protocol.types.Roles);
				}
			}
		}
	}
}

//Generics information:
//com.spotify.protocol.client.CallResult:1
//com.spotify.protocol.client.CallResult.ResultCallback:1
//com.spotify.protocol.client.PendingResult:1
//com.spotify.protocol.client.PendingResultBase:1
//com.spotify.protocol.client.Result:1
//com.spotify.protocol.client.ResultUtils.ErrorResult:1
//com.spotify.protocol.client.ResultUtils.SuccessfulResult:1
//com.spotify.protocol.client.Subscription:1
//com.spotify.protocol.client.Subscription.EventCallback:1
//com.spotify.protocol.client.WampCallsOrchestrator.CallRecord:1
//com.spotify.protocol.client.WampCallsOrchestrator.SubscriptionRecord:1
