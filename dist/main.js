'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generateJsFile = exports.lessToJs = undefined;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _jsObjectPrettyPrint = require('js-object-pretty-print');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var lessToJs = exports.lessToJs = function lessToJs(lessFile) {
    var lessVars = {};
    var matches = lessFile.match(/@(.*:[^;]*)/g) || [];

    matches.forEach(function (variable) {
        var definition = variable.split(/:\s*/);
        var rawKey = definition[0].substring(1);
        var key = rawKey.includes('-') ? '"' + rawKey + '"' : rawKey;
        lessVars[key] = definition[1];
    });

    var sortedKeys = Object.keys(lessVars).sort();
    var sortedLessVars = {};

    sortedKeys.forEach(function (sortedKey) {
        sortedLessVars[sortedKey] = lessVars[sortedKey];
    });

    return 'export default ' + (0, _jsObjectPrettyPrint.pretty)(sortedLessVars);
};

var generateJsFile = exports.generateJsFile = function generateJsFile(lessFile, destFile) {
    return new Promise(function (resolve, reject) {
        var fileContent = lessToJs(lessFile);
        _fs2.default.writeFile(destFile, fileContent, function (err) {
            if (err) {
                reject(err);
            }
            resolve();
        });
    });
};