export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export interface YubiKeyInfo {
    vid: number;
    pid: number;
    serial: number;
    slots: number;
    version: string;
}

export interface NativeDataWithSalt {
    data: number[];
    salt: number[];
}

export interface NativeArgon2OptionsArg {
    memoryCost: number;
    hashLength: number;
    timeCost: number;
    parallelism: number;
    type: number;
    version: number;
}

export interface NativeModuleCalls {
    'start': () => void;
    'start-usb-listener': () => void;
    'stop-usb-listener': () => void;
    'get-yubikeys': () => YubiKeyInfo[];
    'yubikey-cancel-chal-resp': () => void;
    'argon2': (
        password: NativeDataWithSalt,
        salt: NativeDataWithSalt,
        options: NativeArgon2OptionsArg
    ) => NativeDataWithSalt;
}

export interface NativeModuleHostCallbackYubiKeys {
    cmd: 'yubikeys';
    numYubiKeys: number;
}

export interface ProcessSpawnArg {
    cmd: string;
    args: string[];
}

export interface ProcessSpawnResult {
    err?: string;
    code?: number;
    stdout?: string;
    stderr?: string;
}

export type NativeModuleHostCallbackMessage = NativeModuleHostCallbackYubiKeys;

export interface DesktopShortcutsSettings {
    globalShortcutCopyPassword?: string;
    globalShortcutCopyUser?: string;
    globalShortcutCopyUrl?: string;
    globalShortcutCopyOtp?: string;
    globalShortcutAutoType?: string;
    globalShortcutRestoreApp?: string;
}

export type HttpRequestMultipartDataItem = string | ArrayBuffer;

export interface HttpRequestConfig {
    url: string;
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    data?: ArrayBuffer | string;
    multipartData?: HttpRequestMultipartDataItem[];
    dataType?: string;
    headers?: Record<string, string>;
    skipAuth?: boolean;
    statuses?: number[];
    tryNum?: number;
    responseType?: XMLHttpRequestResponseType;
}

export interface HttpResponse {
    status: number;
    data: unknown;
    headers: Record<string, string>;
}

// ipcRenderer.on('event', ...args)
// mainWindow.webContents.send('event', ...args)
export interface DesktopIpcRendererEvents {
    'log': (name: string, level: LogLevel, ...args: unknown[]) => void;
    'native-module-host-error': (err: unknown) => void;
    'native-module-host-exit': (code: number | undefined, signal: string | undefined) => void;
    'native-module-host-disconnect': () => void;
    'native-module-host-callback': (msg: NativeModuleHostCallbackMessage) => void;
}

// ipcRenderer.send('event', ...args)
// ipcMain.on('event', ...args)
export interface DesktopIpcMainEvents {
    'native-module-call': (cmd: string, ...args: unknown[]) => void;
}

// ipcRenderer.invoke('event', ...args)
// ipcMain.handle('event', ...args)
export interface DesktopIpcMainCalls {
    'set-locale': (locale: string, values: Record<string, string>) => void;
    'load-config': (name: string) => string;
    'save-config': (name: string, data: string) => string;
    'is-app-focused': () => boolean;
    'set-global-shortcuts': (shortcuts: DesktopShortcutsSettings) => void;
    'get-temp-path': () => string | undefined;
    'get-app-path': () => string;
    'get-user-data-path': () => string;
    'resolve-proxy': (url: string) => { host: string; port: string } | undefined;
    'spawn-process': (arg: ProcessSpawnArg) => ProcessSpawnResult;
    'kill-process': (name: string) => void;
    'http-request': (arg: HttpRequestConfig) => HttpResponse;
    'show-main-window': () => void;
    'minimize-main-window': () => void;
    'maximize-main-window': () => void;
    'restore-main-window': () => void;
    'show-devtools': () => void;
}
