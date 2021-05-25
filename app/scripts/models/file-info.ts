import * as kdbxweb from 'kdbxweb';
import { Model } from 'util/model';
import { InitWithFieldsOf } from 'util/types';

export interface FileBackupConfig {
    enabled: boolean;
    storage: string;
    path: string;
    schedule: string;
    lastTime?: number;
}

export interface FileChalRespConfig {
    vid: number;
    pid: number;
    serial: number;
    slot: number;
}

export interface FileStorageExtraOptions {
    user: string;
    encpass?: string;
}

export class FileInfo extends Model {
    id: string;
    name: string;
    storage?: string;
    path?: string;
    modified = false;
    editState?: kdbxweb.KdbxEditState;
    rev?: string;
    syncDate?: Date;
    openDate?: Date;
    keyFileName?: string;
    keyFileHash?: string;
    keyFilePath?: string;
    opts?: FileStorageExtraOptions;
    backup?: FileBackupConfig;
    chalResp?: FileChalRespConfig;
    encryptedPassword?: string;
    encryptedPasswordDate?: Date;

    constructor(values: InitWithFieldsOf<FileInfo> & { id: string; name: string }) {
        super();
        this.id = values.id;
        this.name = values.name;
        Object.assign(this, values);
    }
}
