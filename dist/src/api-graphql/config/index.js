"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialize = void 0;
let config = undefined;
function initialize(configuration) {
    if (config) {
        throw new Error("Configuration is already set.");
    }
    config = configuration;
}
exports.initialize = initialize;
