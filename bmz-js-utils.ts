import {v4} from 'uuid';
import {saveAs} from "file-saver";
import * as _ from "lodash";

export class BmzJsUtils {

    constructor() {
    }

    static getDeviceName() {
        if (navigator.userAgent.match(/Tablet|iPad/i)) {
            return 'tablet'
        } else if (navigator.userAgent.match(/Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi/i)) {
            return 'mobile'
        } else {
            return 'desktop'
        }
    }

    static isDeviceIPad() {
        return this.getDeviceName() === 'tablet';
    }

    static isDeviceTablet() {
        return this.getDeviceName() === 'tablet';
    }

    static isDeviceMobile() {
        return this.getDeviceName() === 'mobile';
    }

    static isDeviceDesktop() {
        return this.getDeviceName() === 'desktop';
    }

    static strToLower(str: string): string {
        return str.toLowerCase();
    }

    static strToUpper(str: string): string {
        return str.toUpperCase();
    }

    static trim(str: string): string {
        return str.replace(/^\s+|\s+$/gm, '');
    }

    static PI(): number {
        return 3.141592653589793;
    }

    static abs(number: number): number {
        return Math.abs(number);
    }

    static uuidv4(): string {
        return v4();
    }

    static mergeArray(arrMain: Array<any>, arrMerge: Array<any>): Array<any> {
        return [...arrMain, ...arrMerge];
    }

    static sumValueArray(numArr: Array<number>): number {
        return numArr.reduce((s, n) => s + n);
    }

    static strPadLeft(str: string, maxLength: number, fillString?: string): string {
        return _.padStart(str, maxLength, fillString);
    }

    static strPadRight(str: string, maxLength: number, fillString?: string) {
        str = str || ' ';
        return _.padEnd(str, maxLength, fillString);
    }


    static cleanHtmlTag(str: string): string {
        return str.replace(/<\/?[^>]+(>|$)/g, '');
    }

    static base64toBlob(base64Data: string, contentType?: string): Blob {
        contentType = contentType || '';
        let sliceSize = 1024;
        let byteCharacters = atob(base64Data);
        let bytesLength = byteCharacters.length;
        let slicesCount = Math.ceil(bytesLength / sliceSize);
        let byteArrays = new Array(slicesCount);
        for (let sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
            let begin = sliceIndex * sliceSize;
            let end = Math.min(begin + sliceSize, bytesLength);
            let bytes = new Array(end - begin);
            for (let offset = begin, i = 0; offset < end; ++i, ++offset) {
                bytes[i] = byteCharacters[offset].charCodeAt(0);
            }
            byteArrays[sliceIndex] = new Uint8Array(bytes);
        }
        return new Blob(byteArrays, {type: contentType});
    }

    static exportExcelFile(blobContent: string, fileName: string, ext?: string): void {
        const blob = new Blob([BmzJsUtils.base64toBlob(blobContent, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')], {});
        saveAs(blob, (fileName || Date.now()) + ('.' + ext || '.xlsx'));
    }

    static array_has_dupes(array: Array<string | number>): Array<string | number> {
        return array.filter((item, index, arr) => arr.indexOf(item) != arr.lastIndexOf(item) && arr.indexOf(item) == index);
    }

    static array_has_dupes_count(array: Array<string | number>): number {
        return (array.filter((item, index, arr) => arr.indexOf(item) != arr.lastIndexOf(item) && arr.indexOf(item) == index)).length;
    }
}
