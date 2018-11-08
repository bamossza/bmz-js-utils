"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var interval_1 = require("rxjs/internal/observable/interval");
var operators_1 = require("rxjs/operators");
var file_saver_1 = require("file-saver");
var BmzJsUtils = /** @class */ (function () {
    function BmzJsUtils() {
    }
    BmzJsUtils.getDeviceName = function () {
        if (navigator.userAgent.match(/Tablet|iPad/i)) {
            return 'tablet';
        }
        else if (navigator.userAgent.match(/Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi/i)) {
            return 'mobile';
        }
        else {
            return 'desktop';
        }
    };
    BmzJsUtils.isDeviceIPad = function () {
        return this.getDeviceName() === 'tablet';
    };
    BmzJsUtils.isDeviceTablet = function () {
        return this.getDeviceName() === 'tablet';
    };
    BmzJsUtils.isDeviceMobile = function () {
        return this.getDeviceName() === 'mobile';
    };
    BmzJsUtils.isDeviceDesktop = function () {
        return this.getDeviceName() === 'desktop';
    };
    BmzJsUtils.whatTime = function () {
        return interval_1.interval(1000).pipe(operators_1.map(function () { return new Date(); })).pipe(operators_1.share());
    };
    BmzJsUtils.strToLower = function (str) {
        return str.toLowerCase();
    };
    BmzJsUtils.strToUpper = function (str) {
        return str.toUpperCase();
    };
    BmzJsUtils.trim = function (str) {
        return str.replace(/^\s+|\s+$/gm, '');
    };
    BmzJsUtils.strPadRight = function (str, maxLength, fillString) {
        return str.padEnd(maxLength, fillString);
    };
    BmzJsUtils.PI = function () {
        return 3.141592653589793;
    };
    BmzJsUtils.abs = function (number) {
        return Math.abs(number);
    };
    BmzJsUtils.uuidv4 = function () {
        return uuid_1.v4();
    };
    BmzJsUtils.mergeArray = function (arrMain, arrMerge) {
        return arrMain.concat(arrMerge);
    };
    BmzJsUtils.sumValueArray = function (numArr) {
        return numArr.reduce(function (s, n) { return s + n; });
    };
    BmzJsUtils.strPadLeft = function (str, maxLength, fillString) {
        return str.padStart(maxLength, fillString);
    };
    BmzJsUtils.cleanHtmlTag = function (str) {
        return str.replace(/<\/?[^>]+(>|$)/g, '');
    };
    BmzJsUtils.base64toBlob = function (base64Data, contentType) {
        contentType = contentType || '';
        var sliceSize = 1024;
        var byteCharacters = atob(base64Data);
        var bytesLength = byteCharacters.length;
        var slicesCount = Math.ceil(bytesLength / sliceSize);
        var byteArrays = new Array(slicesCount);
        for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
            var begin = sliceIndex * sliceSize;
            var end = Math.min(begin + sliceSize, bytesLength);
            var bytes = new Array(end - begin);
            for (var offset = begin, i = 0; offset < end; ++i, ++offset) {
                bytes[i] = byteCharacters[offset].charCodeAt(0);
            }
            byteArrays[sliceIndex] = new Uint8Array(bytes);
        }
        return new Blob(byteArrays, { type: contentType });
    };
    BmzJsUtils.exportExcelFile = function (blobContent, fileName, ext) {
        var blob = new Blob([BmzJsUtils.base64toBlob(blobContent, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')], {});
        file_saver_1.saveAs(blob, (fileName || Date.now()) + ('.' + ext || '.xlsx'));
    };
    return BmzJsUtils;
}());
exports.BmzJsUtils = BmzJsUtils;
