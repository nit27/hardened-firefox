// Set default search engine: DuckDuckGo
user_pref("browser.urlbar.placeholderName", "DuckDuckGo");

// Set default permissions
 // * Location, Camera, Microphone, VR
 // * 0=always ask (default), 1=allow, 2=block.
user_pref("permissions.default.geo", 2);
user_pref("permissions.default.camera", 2);
user_pref("permissions.default.microphone", 0);
user_pref("permissions.default.desktop-notification", 0);
user_pref("permissions.default.xr", 2); // Virtual Reality.

// Fingerprints
user_pref("privacy.resistFingerprinting.letterboxing", false); // Disable letterbox (optional).
user_pref("privacy.resistFingerprinting", true); // Enable RFP in NormalMode.
user_pref("privacy.resistFingerprinting.pbmode", true); // Enable RFP in PBMode.

 // Disable spellchecker
user_pref("layout.spellcheckDefault", 1); // Set to `0` to disable spellcheck (optional).

// Custom DNS over HTTPS
user_pref("network.trr.custom_uri", "https://doh.mullvad.net/dns-query"); // Choose custom server here https://mullvad.net/en/help/dns-over-https-and-dns-over-tls.
user_pref("network.trr.mode", 2); // Set to `5` to disable Mullvad DNS over HTTPS.
user_pref("network.trr.uri", "https://doh.mullvad.net/dns-query");
user_pref("network.dns.disableIPv6", true); // Disable IPv6.
user_pref("doh-rollout.disable-heuristics", true);

// Use HTTPS ONLY MODE
user_pref("dom.security.https_only_mode_ever_enabled", true);

// Custom Enhance Tracking Protection
user_pref("browser.contentblocking.category", "Custom"); //Replace for "Strict" if don't use a good VPN or UBO.

// Disable autofill address & credit card
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);

// Disable built-in bullshit features
user_pref("extensions.pocket.enabled", false); // Mozilla Pocket.
user_pref("identity.fxaccounts.enabled", false); // Unknow service (correct me if you know).
user_pref("extensions.fxmonitor.enabled", false); // Unknow service (correct me if you know).
user_pref("browser.messaging-system.whatsNewPanel.enabled", false); // "What's new" gift icon from toolbar and main menu.
user_pref("dom.forms.autocomplete.formautofill", false); // Disable autofill.
user_pref("beacon.enabled", false);

// Password Manager. I recommend KeePass or KeePassXC instead
user_pref("signon.rememberSignons", false); // Do not save logins and passwords for sites.
user_pref("signon.management.page.breach-alerts.enabled", false); // Hide alerts about passwords for breached sites.

// Disable WebRTC (WebGL was already disable from user.js)
user_pref("media.peerconnection.enabled", false);

// Protect your private IP even in TRUSTED scenarios after you grant device access
user_pref("media.peerconnection.ice.no_host", true); // May result in breakage on video-conferencing platforms.

// Disable GMP (Gecko Media Plugins)
user_pref("media.gmp-provider.enabled", false);