export type PluginMetadata = {
    [index: string]: any;
};
export declare abstract class Plugin {
    abstract init(): Plugin;
    abstract run(payload: PluginPayload): PluginResult;
}
export declare class PluginResult {
    private readonly content;
    private readonly metadata;
    private final;
    constructor(content: string, metadata?: PluginMetadata);
    getContent(): string;
    getMetadata(): PluginMetadata;
    finalize(): void;
    isFinal(): boolean;
}
export declare class PluginPayload {
    private readonly content;
    private readonly metadata;
    constructor(content: string, metadata?: PluginMetadata);
    getContent(): string;
    getMetadata(): PluginMetadata;
}
