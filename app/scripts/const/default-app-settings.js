const DefaultAppSettings = {
    theme: 'fb', // UI theme
    locale: null, // user interface language
    expandGroups: true, // show entries from all subgroups
    listViewWidth: null, // width of the entry list representation
    menuViewWidth: null, // width of the left menu
    tagsViewHeight: null, // tags menu section height
    autoUpdate: 'install', // auto-update options: "install", "check", ""
    clipboardSeconds: 0, // number of seconds after which the clipboard will be cleared
    autoSave: true, // auto-save open files
    autoSaveInterval: 0, // interval between performing automatic sync, minutes
    rememberKeyFiles: false, // remember keyfiles selected on the Open screen
    idleMinutes: 15, // app lock timeout after inactivity, minutes
    minimizeOnClose: false, // minimise the app instead of closing
    tableView: false, // view entries as a table instead of list
    colorfulIcons: false, // use colorful custom icons instead of grayscale
    useMarkdown: true, // use Markdown in Notes field
    directAutotype: true, // if only one matching entry is found, select that one automatically
    titlebarStyle: 'default', // window titlebar style
    lockOnMinimize: true, // lock the app when it's minimized
    lockOnCopy: false, // lock the app after a password was copied
    lockOnAutoType: false, // lock the app after performing auto-type
    lockOnOsLock: false, // lock the app when the computer is locked
    helpTipCopyShown: false, // disable the tooltip about copying fields
    templateHelpShown: false, // disable the tooltip about entry templates
    skipOpenLocalWarn: false, // disable the warning about opening a local file
    hideEmptyFields: false, // hide empty fields in entries
    skipHttpsWarning: false, // disable the non-HTTPS warning
    demoOpened: false, // hide the demo button inside the More... menu
    fontSize: 0, // font size: 0, 1, 2
    tableViewColumns: null, // columns displayed in the table view
    generatorPresets: null, // presets used in the password generator
    generatorHidePassword: false, // hide password in the generator
    cacheConfigSettings: false, // cache config settings and use them if the config can't be loaded
    allowIframes: false, // allow displaying the app in IFrames
    useGroupIconForEntries: false, // automatically use group icon when creating new entries
    enableUsb: true, // enable interaction with USB devices
    nativeArgon2: true, // use native argon2 module

    yubiKeyShowIcon: true, // show an icon to open OTP codes from YubiKey
    yubiKeyAutoOpen: false, // auto-load one-time codes when there are open files
    yubiKeyMatchEntries: true, // show matching one-time codes in entries
    yubiKeyShowChalResp: true, // show YubiKey challenge-response option
    yubiKeyOathWorkaround: false, // enable the workaround for YubiKey OATH issues

    canOpen: true, // can select and open new files
    canOpenDemo: true, // can open a demo file
    canOpenSettings: true, // can go to settings
    canCreate: true, // can create new files
    canImportXml: true, // can import files from XML
    canImportCsv: true, // can import files from CSV
    canRemoveLatest: true, // can remove files from the recent file list
    canExportXml: true, // can export files as XML
    canExportHtml: true, // can export files as HTML
    canSaveTo: true, // can save existing files to filesystem
    canOpenStorage: true, // can open files from cloud storage providers
    canOpenGenerator: true, // can open password generator
    canOpenOtpDevice: true, // can open OTP codes from USB tokens

    dropbox: true, // enable Dropbox integration
    dropboxFolder: null, // default folder path
    dropboxAppKey: null, // custom Dropbox app key
    dropboxSecret: null, // custom Dropbox app secret

    webdav: true, // enable WebDAV integration
    webdavSaveMethod: 'move', // how to save files with WebDAV: "move" or "put"

    gdrive: true, // enable Google Drive integration
    gdriveClientId: null, // custom Google Drive client id
    gdriveSecret: null, // custom Google Drive client secret

    onedrive: true, // enable OneDrive integration
    onedriveClientId: null, // custom OneDrive client id
    onedriveSecret: null // custom OneDrive client secret
};

export { DefaultAppSettings };