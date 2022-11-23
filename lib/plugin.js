export class PluginResult {
    content;
    metadata;
    final = false;
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
    finalize() {
        this.final = true;
    }
    isFinal() {
        return this.final;
    }
}
export class PluginPayload {
    content;
    metadata;
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
