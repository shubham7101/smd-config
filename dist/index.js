"use strict";
// All configs
var configs = {};
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
var all = function () {
    return configs;
};
module.exports = {
    set: set,
    get: get,
    all: all
};
//# sourceMappingURL=index.js.map