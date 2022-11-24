import MarkovChain from "purpl-markov-chain";
type GeneratorID = string;
export declare class MarkovGenerator {
    private chain;
    private censor;
    constructor(chain: MarkovChain);
    private scrub;
    load(corpus: string[]): Promise<void>;
    addPhrase(phrase: string): Promise<void>;
    generate(options?: {}): Promise<string>;
}
export declare class MarkovGeneratorRepository {
    private generators;
    getGenerator(generatorId: GeneratorID): MarkovGenerator;
}
export {};
