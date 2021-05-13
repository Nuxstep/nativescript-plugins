# @nuxstep/nativescript-spotify

> **IMPORTANT:** This project is in early development

## About

This project surged from our own needs, as there's no Spotify plugin available for NativeScript (or at least updated).

For now, the goal of this plugin is simple: Integrate Spotify into your app through the Spotify App Remote SDK, so you can control playback and get the user recommended content items.

Later (maybe), we can implement the Spotify Authentication SDK and Web API for more features, but that will depend on our available time and needs, so, feel free to help the project through issue submissions and pull requests.

## Setup

Add the plugin to your NativeScript project with:

```bash
ns plugin add @nuxstep/nativescript-spotify
```

### Android

In your app project, head over to `App_Resources/Android/src/main/res` and open `AndroidManifest.xml`. Inside the `<activity>` tag with the name `com.tns.NativeScriptActivity`, add the property `android:launchMode="singleTask"`, as follows:

```xml
<activity
  android:name="com.tns.NativeScriptActivity"
  android:label="@string/title_activity_kimera"
  android:configChanges="keyboard|keyboardHidden|orientation|screenSize|smallestScreenSize|screenLayout|locale|uiMode"
  android:theme="@style/LaunchScreenTheme"
  android:launchMode="singleTask">
```

**Before** the first `<activity>` tag is closed, add the following:

```xml
<!-- Custom URI schemes -->
<intent-filter>
  <action android:name="android.intent.action.VIEW" />
  <category android:name="android.intent.category.DEFAULT" />
  <category android:name="android.intent.category.BROWSABLE" />

  <data
    android:scheme="plugindemo"
    android:host="spotify-login-callback" />
</intent-filter>
```

Here you will set the **Redirect URI** for the Spotify App Remote authentication (it reads as `plugindemo://spotify-login-callback`). Change the `android:scheme` to something related to your app (like `myapp`) and host you can keep it as `spotify-login-callback`. **Write down** your **Redirect URI**, you will need it to set up the `SpotifyAppRemote` class.

**Before** the `<application>` tag closes, add the following:

```xml
<!-- Spotify Activity -->
<activity
  android:name="com.spotify.sdk.android.authentication.LoginActivity"
  android:theme="@android:style/Theme.Translucent.NoTitleBar" />
```

For **Android 11** or higher, you also need to specify which other applications your application can **query** (read about it [here](https://developer.android.com/training/package-visibility)). To do that, simply add the following snippet one level below the `<manifest>` tag:

```xml
<queries>
  <package android:name="com.spotify.music" />
</queries>
```

You'll need an **App Fingerprint** too. Refer to https://developer.spotify.com/documentation/android/quick-start/#register-app-fingerprints on how to create one. **Write it down** because you will need it later.

### iOS

In your app project, head over to `App_Resources/iOS` and open `Info.plist`. At the end of the file, before the last `</dict>` tag closes, add the following:

```xml
<key>LSApplicationQueriesSchemes</key>
<array>
  <string>spotify</string>
</array>
```

This allows the Spotify SDK to open the Spotify app through its URL scheme. After that, add the following:

```xml
<key>CFBundleURLTypes</key>
<array>
  <dict>
    <key>CFBundleURLName</key>
    <string>com.nuxstep.nativescript.plugindemo</string>
    <key>CFBundleURLSchemes</key>
    <array>
      <string>plugindemo</string>
    </array>
  </dict>
</array>
```

Change `com.nuxstep.nativescript.plugindemo` to your **app bundle name**. Also, change `plugindemo` to your app **URL scheme**. Use the same **URL scheme** from Android for the sake of simplicity.

In your **app entry point** (usually `app.ts`), import `isIOS` and `SpotifyAppRemote` at the top of the file:

```ts
import { isIOS } from '@nativescript/core';
import { SpotifyAppRemote } from '@nuxstep/nativescript-spotify';
```

Then, implement a custom **app delegate** before your app starts, usually before `Application.run()` if you are using plain NativeScript.

```ts
/**
 * Implement a custom AppDelegate on iOS so we can get the access token
 * returned from Spotify and store it on SpotifyAppRemote class
 */
if (isIOS) {
	@NativeClass()
	class AppDelegate extends UIResponder implements UIApplicationDelegate {
		public static ObjCProtocols = [UIApplicationDelegate];

		applicationOpenURLOptions(_application: UIApplication, url: NSURL, _options: any): boolean {
			SpotifyAppRemote.setAuthorizationParameters(url);
			return true;
		}
	}
	Application.ios.delegate = AppDelegate;
}
```

If you are **not** using TypeScript, refer to https://v7.docs.nativescript.org/core-concepts/application-lifecycle#ios-uiapplicationdelegate on how to implement the app delegate with JavaScript.

### Spotify Developer

Head over to https://developer.spotify.com/dashboard and register a developer account.

In the dashboard, click on **CREATE AN APP** and provide a name and an description.

Inside your app dashboard, click on **EDIT SETTINGS**. Set the **Redirect URI** as you have defined before (e.g. `myapp://spotify-login-callback`) and click on **ADD**.

On section **Bundle IDs**, insert your app bundle name (e.g. `com.example.myapp`) and click on **ADD**. This one is for iOS.

On section **Android Packages**, insert your **app package name** (e.g. `com.example.myapp`) and insert the **App Fingerprint** you've created before. Click on **ADD** and then on **SAVE** to finish.

**Write down** your **Client ID**, you will need it to set up the `SpotifyAppRemote` class.

### Usage

First, you need to pass the **Client ID** and **Redirect URI** to the `SpotifyAppRemote` class. You can do that in your **app entry point** before the custom **app delegate**:

```ts
SpotifyAppRemote.setClientId('SPOTIFY_CLIENT_ID');
SpotifyAppRemote.setRedirectUri('APP_REDIRECT_URI');
```

In the page where you want to use `SpotifyAppRemote`, add to the top of the file:

```ts
import { isIOS } from '@nativescript/core';
import { SpotifyAppRemote } from '@nuxstep/nativescript-spotify';
```

Then, somewhere you want, connect to `SpotifyAppRemote`:

```ts
/**
 * If platform is iOS, we need to open the app and start playback
 * before connecting to SpotifyAppRemote. This is an iOS-specific
 * limitation.
 */
if (isIOS) {
	await SpotifyAppRemote.authorizeAndPlayURI();
}

await SpotifyAppRemote.connect();
```

You can pass any **Spotify URI** to `authorizeAndPlayURI()`. If you pass an empty string or no parameter at all, it'll try to play the user's last played song.

To understand how to use the plugin, refer to:

- [apps/demo/src](https://github.com/Nuxstep/nativescript-plugins/tree/master/apps/demo/src)
- [tools/demo/nativescript-spotify](https://github.com/Nuxstep/nativescript-plugins/tree/master/tools/demo/nativescript-spotify)
- [packages/nativescript-spotify/index.d.ts](https://github.com/Nuxstep/nativescript-plugins/blob/master/packages/nativescript-spotify/index.d.ts)

This README will be updated with the available methods at a later time.

## License

Apache License Version 2.0
