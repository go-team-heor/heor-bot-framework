"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginPayload = exports.PluginResult = void 0;
class PluginResult {
    constructor(content, metadata) {
        this.final = false;
        this.content = content;
        this.metadata = metadata || {};
    }
    getContent() {
        return this.content;
    }
    getMetadata() {
        return this.metadata;
    }
    finalize() {
        this.final = true;
    }
    isFinal() {
        return this.final;
    }
}
exports.PluginResult = PluginResult;
class PluginPayload {
    constructor(content, metadata) {
        this.content = content;
        this.metadata = metadata || {};
    }
    getContent() {
        return this.content;
    }
    getMetadata() {
        return this.metadata;
    }
}
exports.PluginPayload = PluginPayload;
//# sourceMappingURL=plugin.js.map