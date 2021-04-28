# @nuxstep/nativescript-spotify

> **IMPORTANT:** This project is in early development

## About

This project surged from our own needs, as there's no Spotify plugin available for NativeScript (or at least updated).

For now, the goal of this plugin is simple: Integrate Spotify into your app through the Spotify App Remote SDK, so you can control playback and get the user recommended content items.

Later (maybe), we can implement the Spotify Authentication SDK and Web API for more features, but that will depend on our available time and needs, so, feel free to help the project through issue submissions and pull requests.

## Setup

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
    android:host="spotify" />
</intent-filter>
```

Here you will set the **Redirect URI** for the Spotify App Remote authentication (it reads as `plugindemo://spotify`). Change the `android:scheme` to something related to your app (like `myapp`) and host you can keep it as `spotify`. **Write down** your **Redirect URI**, you will need it to instantiate the `SpotifyAppRemote` class.

**Before** the `<application>` tag closes, add the following:

```xml
<!-- Spotify Activity -->
<activity
  android:name="com.spotify.sdk.android.authentication.LoginActivity"
  android:theme="@android:style/Theme.Translucent.NoTitleBar" />
```

You'll need an **App Fingerprint** too. Refer to https://developer.spotify.com/documentation/android/quick-start/#register-app-fingerprints on how to create one. **Write it down** because you will need it later.

### iOS

Soon.

### Spotify Developer

Head over to https://developer.spotify.com/dashboard and register a developer account.

In the dashboard, click on **CREATE AN APP** and provide a name and an description.

Inside your app dashboard, click on **EDIT SETTINGS**. Set the **Redirect URI** as you have defined before (e.g. `myapp://spotify`) and click on **ADD**.

On section **Android Packages**, insert your **app package name** (e.g. `com.example.myapp`) and insert the **App Fingerprint** you've created before. Click on **ADD** and then on **SAVE** to finish.

**Write down** your **Client ID**, you will need it to instantiate `SpotifyAppRemote` class.

## Usage

**Not** available on npm yet, but soon you'll be able to add to your project with:

```bash
ns plugin add @nuxstep/nativescript-spotify
```

If you want to test it in your app, refer to the demo (`apps/demo`) on how to include the plugin manually and how to use it.

## License

Apache License Version 2.0
