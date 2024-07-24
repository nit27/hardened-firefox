# FireFox Hardending Guide
This guide is about hardening Mozilla FireFox Browser for security & privacy enhancement using a custom profile.

> Disclaimer: I do not own all the customised configurations nor preferences. The guide is my research when I started looking for a nerdy way to against fingerprinting collections and ad tracking targets. Therefore, it might include bugs and mistakes. This repo is specifically for myself use-cases and you should consider it as the reference only.
  
*The guide is inspired and based on [arkenfox's user.js](https://github.com/arkenfox/user.js) because the community and the author are very active on project maintenance and contribution. Please, visit their repo and give them a star ⭐️*

⚠️ **For the most sensitive case, [Tor Browser](https://torproject.org) is highly recommended instead!**

## Table of Contents
<!-- TOC start -->
- [FireFox Hardending Guide](#firefox-hardending-guide)
   * [Before You Start](#before-you-start)
   * [Install Mozilla FireFox](#install-mozilla-firefox-browser-optional)
   * [Create a Profile](#create-a-profile)
   * [Harden FireFox](#harden-firefox)
      + [Download essentials](#download-essentials)
      + [Copy essentials](#copy-essentials-to-profile-root-directory)
         - [Find your Profile path](#find-your-profile-root-directory-path)
         - [Copy essentials](#copy-essentials-from-downloads-to-your-profile-root-directory)
         - [Grant permissions](#grant-permissions-for-them-may-need-sudo-in-linux)
         - [Clear previous preferences](#clear-your-previous-preferences-optional)
      + [Install additional add-ons](#install-additional-add-ons-extensions)
   * [Update `user.js`](#update-userjs)
   * [Tweak your preferences](#tweak-your-favourite-preferences)
   * [Persist cookies & site data](#persist-specific-cookies-and-site-data)
<!-- TOC end -->

## Before You Start
- Your FireFox Browser will work as a strict/custom mode. Some websites and their services might not work properly
- Your history, cookies, current login sessions may be deleted
- Make sure your Operating System is diligently set up and carefully back your OS up
- Make a backup of your current FireFox profiles
- Update to the latest version of FireFox

## Install Mozilla FireFox Browser (optional)
If you have not used FireFox, you should have installed it from [their official website](https://www.mozilla.org/en-US/firefox/new) or via **Homebrew** if you are using MacOS:

```shell
brew install --cask firefox
```
## Create a Profile
*(If you want to harden your current profile, skip to the next step)*

- Open FireFox, type `about:profiles`
- Hit `Create a New Profile` on top left
- Choose a desire name, then hit `Done`

## Harden FireFox
### Download essentials
Now you need to download 4 script files to your `Downloads` folder. You can use `curl` or directly download:
- Custom [`user-overrides.js`](https://github.com/nit27/hardened-firefox/blob/main/user-overrides.js)
- [`user.js`](https://github.com/arkenfox/user.js/blob/master/user.js), [`updater.sh`](https://github.com/arkenfox/user.js/blob/master/updater.sh), and [`prefsCleaner.sh`](https://github.com/arkenfox/user.js/blob/master/prefsCleaner.sh)

### Copy essentials to Profile Root Directory
> HEADS-UP 1: `Quit != Close` in MacOS  
> HEADS-UP 2: You must put **your path** inside two quotation marks if the path contains spaces or weird characters

#### Find your Profile **Root Directory** path:
- Start FireFox, in the search bar, type `about:profiles`, Enter
- Find your profile **Root Directory**, hit `Show in Finder` or `Show in Files` on Linux (and copy that path to clipboard if you want to use command line in next step)
- Quit FireFox

#### Copy essentials from `Downloads` to your Profile **Root directory**:
You can copy downloaded files using the GUI (drag & drop - Copy/Paste) or simply use this command on Terminal:
```shell
cp ~/Downloads/user-overrides.js user.js updater.sh prefsCleaner.sh <your path>
```

#### Grant permissions for them (may need `sudo` in Linux):
- Using GUI:
  - Right click to them, choose `Get Info` (or `Properties` or any on Linux)
  - At `Sharing & Permissions`: Choose your account, set Privilege to `Read & Write`
- Using command line:
  - Open Terminal and run:
```shell
cd "<your path>"
```
```shell
chmod +x user-overrides.js user.js updater.sh prefsCleaner.sh
```
#### Clear your previous preferences (optional)
Run this command in your **Root Directory** if you want to clear last preferences in your previous profile:
```shell
./prefsCleaner.sh
```
Choose `1`

### Install additional add-ons (extensions)
- [FireFox Multi-Account Containers](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/) - Isolate every tab you browse. See how to use [here](https://support.mozilla.org/en-US/kb/containers)
- [Privacy Badger](https://addons.mozilla.org/en-US/firefox/addon/privacy-badger17) - Automatically learns to block invisible trackers.
- [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin) - An efficient wide-spectrum content blocker. Easy on CPU and memory.

---

## Update `user.js`
It is necessary to keep the `user.js` up-to-date. The author might regularly update `user.js` after FireFox has a new release. Obviously, you should backup the `user.js` file before you update. See how to backup [here](https://github.com/arkenfox/user.js/wiki/2.2-Backup). You also need to run the update every time making changes on `user-overrides.js` (see below).

> HEADS-UP: Always run `updater.sh` in your profile root directory

- Quit FireFox
- Open Terminal and run:
```shell
./updater.sh
```
  - Choose `Y` to accept the update
  - Choose `N` to discard

---

## Tweak your favourite preferences
Feel free to customise your preferences in `user-overrides.js`. Please do not manually make changes on `user.js` because the `user-overrides.js` will be appended to `user.js`. Learn more [here](https://github.com/arkenfox/user.js/wiki/3.1-Overrides).

> HEADS-UP 1: `Quit != Close` in MacOS

- On the search bar, type `about:profiles`, enter
- Navigate to you profile and hit `Show in Finder` (it may say `Show in Files` on Linux)
- Quit FireFox 
- Open `user-overrides.js` file in your favourite editor
- Make changes as your desires
- Save the file

> HEADS-UP 2: Always run `updater.sh` in your Profile **Root Directory**

To update your tweaks, append `user-overrides.js` to `user.js` by running
```shell
./updater.sh
```
Choose `y`

---

## Persist specific cookies and site data
As defaut, the `user.js` and my `user-overrides.js` will delete all cookies, history, and site data after a session (when you `quit` FireFox). To keep your accounts persistently login, you must manually make **Exceptions - Cookies and Site Data**:

If you are in a website:
`Ctr-I` > `Permissions` > `Set cookies` > `Allow`

If you want to make a `Allow` list:
On search bar, type:
- `about:preferences#privacy`
- Go to **Cookies and Site Data**, hit **Manage Exceptions...**
- Put your desire links one-by-one, hit `Allow`
- Save Changes