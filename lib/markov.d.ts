import MarkovChain from "purpl-markov-chain";
type GeneratorID = string;
export declare class MarkovGenerator {
    private _initialized;
    private chain;
    private censor;
    constructor(chain: MarkovChain);
    get initialized(): boolean;
    private set initialized(value);
    initialize(): void;
    private scrub;
    addPhrase(phrase: string): Promise<void>;
    generate(options?: {}): Promise<string>;
}
export declare class MarkovGeneratorRepository {
    private generators;
    getGenerator(generatorId: GeneratorID): MarkovGenerator;
}
export {};
