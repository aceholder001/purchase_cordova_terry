# Cordova Purchase Plugin


### Features

|  | AppStore (iOS / macOS) | Google Play | Braintree (iOS / Android) |
|--|--|--|--|
| consumables | ✅ | ✅ | ✅ |
| non consumables | ✅ | ✅ |  |
| subscriptions | ✅ | ✅ |  |
| restore purchases | ✅ | ✅ | ✅ |
| payment requests |   |   | ✅ |
| [receipt validation](https://www.iaptic.com) | ✅ | ✅ | ✅ |


## Installation

### Install the plugin (Cordova)

```sh
cordova plugin add "cordova-plugin-purchase"
```


### Recommended plugins

<details>
<summary>
Install <strong>cordova-plugin-network-information</strong> (click for details).
</summary>


Sometimes, the plugin cannot connect to the app store because it has no network connection. It will then retry either:

* periodically after a certain amount of time;
* when the device fires an ['online'](https://developer.mozilla.org/en-US/docs/Web/Events/online) event.

The [cordova-plugin-network-information](https://github.com/apache/cordova-plugin-network-information) plugin is required in order for the `'online'` event to be properly received in the Cordova application. Without it, this plugin will only be able to use the periodic check to determine if the device is back online.

</details>

<details>
<summary>
Install <strong>cordova-plugin-advanced-http</strong> (click for details).
</summary>


When making receipt validation requests, the purchase plugin uses, by default, the browser's ajax capabilities. This sometime causes issues with CORS restriction. CORS also imposes an extra back-and-forth with the server (the CORS preflight request) to ensure the server allows for such request to be made. By installing the [advanced-http plugin](https://github.com/silkimen/cordova-plugin-advanced-http), you get rid of those issue and benefit from the extra feature of the the plugin, like advanced authentication option. Read the [advanced-http](https://github.com/silkimen/cordova-plugin-advanced-http) plugin documentation for details.
</details>

### Note for Capacitor users

Capacitor users can install this new version of the plugin without the help of the awesome-cordova-plugins wrapper. Just install the `cordova-plugin-purchase` module and `import "cordova-plugin-purchase"` in files where it's needed.

As with other plugins, you should wait for Capacitor `this.platform.ready()` before using the plugin.

See [here](https://github.com/danielsogl/awesome-cordova-plugins/issues/4457) for some info.

### Setup your Application

See [Setup iOS Applications](https://github.com/j3k0/cordova-plugin-purchase/wiki/Setup-for-iOS-and-macOS#setup-ios-applications) and [Setup Android Applications](https://github.com/j3k0/cordova-plugin-purchase/wiki/Setup-for-Android-Google-Play#setup-android-applications).

## Getting Started

### Learning about In-App Purchases

If you wish to learn more about In-App Purchases (IAP), you'll find a good overview on the subject from the various platforms documentation:

* Apple:
   * [In-App Purchase Introduction](https://developer.apple.com/in-app-purchase/)
   * [Auto-Renewable Subscriptions](https://developer.apple.com/app-store/subscriptions)
* Google:
   * [In-App Purchases Best Practices](https://developer.android.com/distribute/best-practices/earn/in-app-purchases)
   * [Billing Overview](https://developer.android.com/google/play/billing/billing_overview)
* Microsoft
  * [Monetize with In-App Purchases](https://docs.microsoft.com/en-us/windows/uwp/monetize/in-app-purchases-and-trials)

All platforms share the same concepts, so they are a good reads in all cases.

### Using the Plugin

To ease the beginning of your journey into the intimidating world of In-App Purchase with Cordova, we wrote a guide which hopefully will help you get things done:

* [Guide: Cordova In-App Purchase Plugin - v13.0](https://purchase.cordova.fovea.cc/v/v13.0/)

You'll have two main tasks to accomplish:

 1. Setup your application and In-App Products on AppStore, Play, Braintree or Azure platforms using their respective web interfaces.
 2. Add In-App Purchase code to your application.

For platform setup, the [wiki](https://github.com/j3k0/cordova-plugin-purchase/wiki/Home) is a good starting point.

There's a specific page for the [version 13](./wiki/Version-13).

### Upgrading to Version 13

There's been some changes to the API with version 13 of the plugin. This document should help existing apps with the migration: [Migrate to version 13](https://github.com/j3k0/cordova-plugin-purchase/wiki/HOWTO:-Migrate-to-v13).

## Extra Resources

### For iOS

 - [In-App Purchase Configuration Guide for AppStore Connect](https://developer.apple.com/support/app-store-connect/)
   - Learn how to set up and manage In-App Purchases with AppStore Connect.

### Extensions

 - [Braintree SDK](https://github.com/j3k0/cordova-plugin-purchase-braintree)
   - Add the Braintree SDK to your application, enable Braintree on iOS and Android.

### Subscriptions

For proper subscription support, you need a receipt validation server. You can
implement your own or use [Iaptic's receipt validation service](https://www.iaptic.com).

# Contribute

### Contributors:

 * ![](https://avatars1.githubusercontent.com/u/191881?s=64&v=4) [Jean-Christophe Hoelt](https://github.com/j3k0), Author
 * ![](https://avatars3.githubusercontent.com/u/1674289?s=64&v=4) [Josef Fröhle](https://github.com/Dexus), Support
 * Guillaume Charhon, (now defunct) v1 for android
 * Matt Kane, initial iOS code
 * Mohammad Naghavi, original unification attempt
 * Dave Alden [@dpa99c](https://github.com/dpa99c) (Apple-hosted IAPs for iOS)

## Sponsors

 * <a href="https://fovea.cc"><img alt="Logo Fovea" src="https://fovea.cc/blog/wp-content/uploads/2017/09/fovea-logo-flat-128.png" height="50" /></a><br/>For sponsoring most of JC's work on the plugin.
 * <img alt="Logo Ionic" src="https://www.fovea.cc/files/Ionic-logo-landscape.png" height="50"><br/>Ionic Framework Team (http://ionicframework.com/)
 * <a href="https://www.simplan.de/"><img alt="Logo SimPlan" src="https://files.fovea.cc/wp-content/uploads/SimPlan-Logo.png" height="50"></a><br/>For sponsoring the UWP platform.
 * Maxwell C. Moore ([MCM Consulting, LLC](http://mcmconsulting.biz))
 * Justin Noel [@calendee](https://github.com/calendee)
 * [Those guys](https://www.indiegogo.com/projects/phonegap-cordova-in-app-purchase-ios-and-android#pledges)



```
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
