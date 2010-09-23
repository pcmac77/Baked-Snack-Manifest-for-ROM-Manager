{
    // The version of the manifest, so ROM Manager knows how to load it
    version: 1,
    // The homepage for your ROM, if you have one.
    homepage: "http://www.bakedsnackshack.com/",
    // The donate link for yuor ROM, if you have one.
    donate: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=3J28MNKNUWVP2",
    // Your list of ROMs
    roms:
    [
    // =====Baked Snack 1.75
    {
        // Display name of the rom
        name: "Baked Snack 1.75",
        // Display summary of the rom
        summary: "Flash Update, 1.7 Required",
        // Device that this rom runs on
        device: "supersonic",
        url: "http://www.bakedsnackshack.com/ROMS/EVO/1.75.zip"
    },
    // =====Baked Snack 1.7
    {
        // Display name of the rom
        name: "Baked Snack 1.7",
        // Display summary of the rom
        summary: "Please do a full wipe.",
        // Device that this rom runs on
        device: "supersonic",
        product: "BakedSnack",
        // A screenshot to show off what the ROM looks like! (This is optional)
        screenshot: "",
        // This is the download URL of your ROM.
        // These URLs should have unique filenames per version!
        // Ie, don't use a zip with the same name
        // as that of a previous version with a new version. 
        // Otherwise ROM Manager will continue using the
        // old cached zip on the SD card.
        // This must be a direct download,
        // and not a Mediafire type link.
        url: "http://www.bakedsnackshack.com/42378568476357387574encrypt3248723hgf8gfd89/BakedSnack1.7.zip"
        //addons:
        //{
        //[
        //    name: "Missing Apps like HTC FM Radio, Stock, WifiRouter, News Reader, etc.  Not affiliated with Hero_Over.  Do a nandroid backup before proceeding to be safe.",
        //    url: "http://github.com/pcmac77/Baked-Snack-Manifest-for-ROM-Manager/blob/master/addons/PutAppsBack.zip"
        //]
        //}
    },
    // =====Baked Snack 1.6
    {
        // Display name of the rom
        name: "Baked Snack 1.6",
        // Display summary of the rom
        summary: "Please do a full wipe.",
        // Device that this rom runs on
        device: "supersonic",
        // A screenshot to show off what the ROM looks like! (This is optional)
        //screenshot: "http://www.droidaftermarket.com/koush//motorola/sholes/screenshot2.png",
        // This is the download URL of your ROM.
        // These URLs should have unique filenames per version!
        // Ie, don't use a zip with the same name
        // as that of a previous version with a new version. 
        // Otherwise ROM Manager will continue using the
        // old cached zip on the SD card.
        // This must be a direct download,
        // and not a Mediafire type link.
        url: "http://www.bakedsnackshack.com/ROMS/BakedSnack1.6.zip"
    },
    // =====Baked Snack 1.5
    {
        // Display name of the rom
        name: "Baked Snack 1.5",
        // Display summary of the rom
        summary: "Please do a full wipe.",
        // Device that this rom runs on
        device: "supersonic",
        // A screenshot to show off what the ROM looks like! (This is optional)
        //screenshot: "http://www.droidaftermarket.com/koush//motorola/sholes/screenshot2.png",
        // This is the download URL of your ROM.
        // These URLs should have unique filenames per version!
        // Ie, don't use a zip with the same name
        // as that of a previous version with a new version. 
        // Otherwise ROM Manager will continue using the
        // old cached zip on the SD card.
        // This must be a direct download,
        // and not a Mediafire type link.
        url: "http://www.bakedsnackshack.com/ROMS/BakedSnack150.zip"
    },
    // =====Test
    {
        // Display name of the rom
        name: "*Test Only*",
        // Display summary of the rom
        summary: "This is a test entry.  DO NOT download!",
        // Device that this rom runs on
        device: "supersonic",
        // Product name of the mod. Product names should stay the same between versions of the mod.
        product: "BakedSnack",
        // Numerical version of the mod. This allows the OTA system to figure out
        // when an upgrade is available. So, if the current version is 5.0.5.0,
        // you can set "incremental" to 5050. And when you have an upgrade available,
        // set the "incremental" of that ROM to 5051 (or any number higher than 5050).
        // ROM Manager will then figure out that an upgrade is available and let
        // the user know.
        incremental: 1750,
        // The value of ro.modversion in /system/build.prop. Your ROM should set this
        // in that build.prop so that ROM Manager can figure out what ROM is currently running.
        // This is optional however, you don't need this line here or in /system/build.prop
        // if you don't want to use OTA updates.
        modversion: "1",
        // Some Screenshots that show off the ROM!
        screenshots:
        [
            "http://www.droidaftermarket.com/koush//motorola/sholes/screenshot.png",
            "http://www.droidaftermarket.com/koush//motorola/sholes/screenshot2.png"
        ],
        // This is a list of mirrors for your ROM. These URLs should have unique filenames per version!
        // Ie, don't use a zip with the same name as that of a previous version with a new version. 
        // Otherwise ROM Manager will continue using the old cached zip on the SD card.
        urls:
        [
            "http://www.droidaftermarket.com/koush/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.5.zip",
            "http://koush.romraid.com/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.5.zip",
            "http://alldroid.org/roms/motorola/droid/koush/motorola/sholes/cyanogen_sholes-ota-eng.koush_5.0.5.zip"
        ],
        // Optional addons (you don't need this if you dont have any)
        addons:
        [
        {
            name: "FM Radio, News, and other apps",
            urls:
            [
                "http://peterchuang.com/android/rom-bs/PutAppsBack.zip"
            ]
        },
        {
            name: "Modules",
            urls:
            [
            "http://koush.romraid.com/motorola/sholes/bekit-modules.zip",
            "http://alldroid.org/roms/motorola/droid/koush//motorola/sholes/bekit-modules.zip",
            "http://www.droidaftermarket.com/koush//motorola/sholes/bekit-modules.zip"
            ]
        }
        ]
    }
    ]
}
