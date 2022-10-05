"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var dotenv_1 = __importDefault(require("dotenv"));
// All configs
var configs = {};
var load = function (options) {
    return dotenv_1.default.config(options);
};
var set = function (name, config) {
    configs["".concat(name)] = config;
    return configs["".concat(name)];
};
var get = function (name) {
    if (!configs.hasOwnProperty("".concat(name))) {
        return;
    }
    return configs["".concat(name)];
};
var gets = function (names) {
    return names.map(function (name) {
        return get(name);
    });
};
var all = function () {
    return configs;
};
module.exports = {
    load: load,
    set: set,
    get: get,
    gets: gets,
    all: all
};
//# sourceMappingURL=index.js.map