export declare class BmzJsUtils {
    constructor();
    static getDeviceName(): "tablet" | "mobile" | "desktop";
    static isDeviceIPad(): boolean;
    static isDeviceTablet(): boolean;
    static isDeviceMobile(): boolean;
    static isDeviceDesktop(): boolean;
    static strToLower(str: string): string;
    static strToUpper(str: string): string;
    static trim(str: string): string;
    static PI(): number;
    static abs(number: number): number;
    static uuidv4(): string;
    static mergeArray(arrMain: Array<any>, arrMerge: Array<any>): Array<any>;
    static sumValueArray(numArr: Array<number>): number;
    static strPadLeft(str: string, maxLength: number, fillString?: string): string;
    static strPadRight(str: string, maxLength: number, fillString?: string): string;
    static cleanHtmlTag(str: string): string;
    static base64toBlob(base64Data: string, contentType?: string): Blob;
    static exportExcelFile(blobContent: string, fileName: string, ext?: string): void;
    static array_has_dupes(array: Array<string | number>): Array<string | number>;
    static array_has_dupes_count(array: Array<string | number>): number;
}
