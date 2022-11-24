export type PluginMetadata = {
    [index: string]: any;
};
export interface PluginConfig {
    [index: string]: any;
}
export interface Plugin<T> {
    init(): Plugin<T>;
    run(payload: PluginPayload): PluginResult;
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
