'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

var initializeFirebaseAppClient = function (config) {
    var firebase = config.firebase, databaseURL = config.databaseURL, apiKey = config.apiKey, authDomain = config.authDomain, projectId = config.projectId, storageBucket = config.storageBucket, messagingSenderId = config.messagingSenderId, restMaybe = __rest(config, ["firebase", "databaseURL", "apiKey", "authDomain", "projectId", "storageBucket", "messagingSenderId"]);
    try {
        firebase.initializeApp(__assign({ apiKey: apiKey,
            authDomain: authDomain,
            databaseURL: databaseURL,
            projectId: projectId,
            storageBucket: storageBucket,
            messagingSenderId: messagingSenderId }, restMaybe));
    }
    catch (err) {
        if (err.code !== "app/duplicate-app") {
            throw err;
        }
    }
};
function isServerConfig(config) {
    return "credential" in config;
}
function isWebConfig(config) {
    return "apiKey" in config;
}
var initializeFirebaseApp = function (config) {
    if (config === void 0) { config = null; }
    if (config === null)
        return;
    if (isWebConfig(config)) {
        initializeFirebaseAppClient(config);
    }
    else if (isServerConfig(config)) {
        initializeFirebaseAppAdmin(config);
    }
};
var initializeFirebaseAppAdmin = function (config) {
    var firebase = config.firebase, databaseURL = config.databaseURL, credential = config.credential;
    try {
        firebase.initializeApp({
            databaseURL: databaseURL,
            credential: firebase.credential.cert(credential)
        });
        return;
    }
    catch (err) {
        if (err.code !== "app/duplicate-app") {
            throw err;
        }
    }
};

exports.initializeFirebaseAppClient = initializeFirebaseAppClient;
exports.initializeFirebaseApp = initializeFirebaseApp;
exports.initializeFirebaseAppAdmin = initializeFirebaseAppAdmin;
exports.default = initializeFirebaseApp;
