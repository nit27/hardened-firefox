# FireFox Hardending Guide
This guide is about hardening Mozilla FireFox Browser for security & privacy enhancement.

> Disclaimer: I do not own all the customised configurations nor perferences. The guide is my research when I started looking for a nerd way to against fingerprinting collection and ad tracking target. Therefore, it might include bugs and mistakes. Feel free to open tickets on Github issue tracker. 
  
I am inspired on [arkenfox's user.js](https://github.com/arkenfox/user.js) and [Sun Knudsen's privacy guides](https://sunknudsen.com/privacy-guides/how-to-configure-firefox-for-privacy-and-security). I advice you should check these projects. I feel, however, not comfortable when I have to choose one of these two inspired projects. Accordingly, I decided to use Sun's as `user-overrides.js` along with my tweaks and arkenfox's as `user.js`, `updater.sh`, and `prefsCleaner.sh` so that it incredibly fits with my personal-daily-drive. Furthermore, you might customise your own settings by changing the value of `user-overrides.js`. See how to customise `user-overrides.js` below.   

For sensitive cases, [Tor Browser](https://torproject.org) is highly recommended instead!  
## Before You Start
- Your FireFox Browser will work as a strict mode. Some websites and their services might not work properly. Use on your own risk.  
- Make sure your Operating System is set up clean & secure. If you use MacOS, you can reference my [MacOS Clean Installation & Configuration]().
- Update to the latest version of FireFox and carefully back your OS up.
## Install Mozilla FireFox Browser
You can install FireFox from [the official website](https://www.mozilla.org/en-US/firefox/new) or install via `Homebrew` is my favourite way  
```shell
brew install --cask firefox
```
## Harden FireFox
- Download my `user-overrides.js`, along with `user.js`, `updater.sh`, and `prefsCleaner.sh` from [arkenfox](https://github.com/arkenfox/user.js) to **Download** folder.
- Start FireFox, in the search bar, type `about:config`, Enter
- Find your **default profile root directory** and copy that path
- Quit FireFox
- Open Terminal and run
```shell
cd "<your path>"
```
*Note: You must put your path inside two quotation marks if the path contains spaces or weird characters*  
- Copy downloaded files to your default profile root directory  
```shell
cp ~/Download/user-overrides.js user.js updater.sh prefsCleaner.sh <your path>
```
- Make files executable 
```shell
chmod +x user-overrides.js user.js updater.sh prefsCleaner.sh
```
- Clear your previous preferences  
```shell
./prefsCleaner.sh
```
Choose `1`  
- Restart FireFox.  
### Install additional add-ons (extensions)
- [FireFox Multi-Account Containers](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/) for isolating every tab you browse. See how to use [here](https://support.mozilla.org/en-US/kb/containers)
- [Privacy Badger](https://addons.mozilla.org/en-US/firefox/addon/privacy-badger17/)
- [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search)
### Configure FireFox settings
- In FireFox, type `about:preferences#search` on searchbar
- Default Search Engine, switch to `DuckDuckGo`
- Type `about:preferences#privacy`, Security: uncheck `Block dangerous and deceptive content`
## Tweak your favourite preferences
You can feel free to customise your preferences in `user-overrides`. Please keep the file `user.js` unless you want to update it. See below.  
### Common customisations (not recommend, use on your own risk):  
#### Enable **cookie persistence**
```shell
user_pref("network.cookie.lifetimePolicy", 2);
// Set to `0` to enable default cookie persistence
```
```shell
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
//  Set to `false` to enable cookie and site data persistence
```
#### Keep history  
```shell
user_pref("places.history.enabled", false);
// Set to `false` to enable history
```
#### Disable letterboxing
```shell
user_pref("privacy.resistFingerprinting.letterboxing", true);
// Used to help resist fingerprinting. Set to `false` to disable letterboxing
```
- Save the file
- Restart Firefox.
## Update `user.js`
It is neccessary to keep the `user.js` up-to-date. I find that the author might update `user.js` when FireFox has a new release. However, you should backup the `user.js` file before you update. See how to backup [here](https://github.com/arkenfox/user.js/wiki/2.2-Backup).
To update `user.js`, run this command in your default profile root directory:  
```shell
$ ./updater.sh
```
- Choose `Y` to accept the update
- Choose `N` to discard
- Restart FireFox.

