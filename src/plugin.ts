export type PluginMetadata = { [ index: string ] : any }
export interface PluginConfig {
    [index: string]: any;
}

export interface Plugin<T> {
    init(): Plugin<T>;
    run(payload: PluginPayload): PluginResult
}

export class PluginResult {
    private readonly content: string;
    private readonly metadata: PluginMetadata;
    private final: boolean = false;

    constructor(content: string, metadata?: PluginMetadata) {
        this.content = content;
        this.metadata = metadata || {};
    }

    getContent(): string {
        return this.content;
    }

    getMetadata(): PluginMetadata {
        return this.metadata;
    }

    finalize(): void {
        this.final = true;
    }

    isFinal(): boolean {
        return this.final;
    }
}

export class PluginPayload {
    private readonly content: string;
    private readonly metadata: PluginMetadata;
    constructor(content: string, metadata?: PluginMetadata) {
        this.content = content;
        this.metadata = metadata || {}
    }

    getContent(): string {
        return this.content;
    }

    getMetadata(): PluginMetadata {
        return this.metadata;
    }
}
