import fs from "fs";
import os from "os";
import path from "path";
import {CodeStorage} from "./types/CodeStorage";
import {promisify} from "util";


export class Code {

    getPath() {
        return `${os.homedir()}/Library/Application Support/Code/User/globalStorage/storage.json`;
    }

    getStorageSync(): CodeStorage {
        const recentPreferences = fs.readFileSync(this.getPath(), {encoding: 'utf8'});
        return JSON.parse(recentPreferences);
    }
    async getStorage(): Promise<CodeStorage> {
        let readFile = promisify(fs.readFile);
        const recentPreferences = await readFile(this.getPath(), {encoding: 'utf8'});
        return JSON.parse(recentPreferences);
    }
}

let code = new Code();
export default code;
export {CodeStorage};