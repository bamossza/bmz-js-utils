"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var interval_1 = require("rxjs/internal/observable/interval");
var operators_1 = require("rxjs/operators");
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
    return BmzJsUtils;
}());
exports.BmzJsUtils = BmzJsUtils;
